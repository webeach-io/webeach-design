import { toCssKeyFormat } from './toCssKeyFormat';

/**
 * Options for generating CSS variables.
 */
interface Options {
  /**
   * Required prefix to prepend to each CSS variable key.
   * @example "font-variant"
   */
  keyPrefix: string;
}

/**
 * Generates a record of CSS variables from a font family map.
 *
 * Each entry becomes a CSS variable that holds the full font stack string for a given variant.
 * These variables are intended to be referenced by typography variables via `var(--...)`,
 * allowing consumers to override font stacks without touching individual typography tokens.
 *
 * @param fontFamilyMap - A map of font family variant keys to full CSS font stack strings
 * @param options - Required settings: `keyPrefix` for the output variable names
 * @returns An object of CSS variable definitions mapping variant names to font stack strings
 *
 * @example
 * prepareCssTypographyFontFamilyVariables(
 *   {
 *     primary: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
 *     monospace: '"Roboto Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
 *   },
 *   { keyPrefix: 'font-variant' }
 * )
 *
 * // Returns:
 * // {
 * //   'font-variant-primary': '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
 * //   'font-variant-monospace': '"Roboto Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
 * // }
 */
export function prepareCssTypographyFontFamilyVariables(
  fontFamilyMap: Record<string, string>,
  options: Options,
) {
  const { keyPrefix } = options;

  return Object.fromEntries(
    Object.entries(fontFamilyMap).map(([key, fontFamily]) => {
      const keyFormatted = toCssKeyFormat(key);
      const finalKey = `${keyPrefix}-${keyFormatted}`;

      return [finalKey, fontFamily] as const;
    }),
  );
}
