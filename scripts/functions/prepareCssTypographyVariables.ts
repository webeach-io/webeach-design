import { TypographyMapByWeight } from '../../src/types/typography';
import { toCssKeyFormat } from './toCssKeyFormat';

/**
 * Options for generating CSS variables.
 */
interface Options {
  fontFamilyVariantKeyPrefix: string;

  /**
   * Optional prefix to prepend to each CSS variable key.
   * @example "typography"
   */
  keyPrefix?: string;
}

/**
 * Generates a record of CSS variables from a typography weight map.
 *
 * Each value will be a valid CSS font shorthand in the format:
 * `"{font-weight} {font-size}/{line-height} var(--{fontFamilyVariantKeyPrefix}-{font-family-variant})"`
 *
 * The font family is referenced as a CSS variable rather than inlined, allowing consumers
 * to override font stacks via the corresponding `--font-variant-*` custom properties.
 *
 * @param typographyObject - A map of weight keys to font definitions (family variant, size, weight, line height)
 * @param options - Required settings: `fontFamilyVariantKeyPrefix` for the font-variant variable prefix,
 *   and optional `keyPrefix` for the output variable names
 * @returns An object of CSS variable definitions ready to be used with `font: var(--...)`
 *
 * @example
 * prepareCssTypographyVariables({
 *   medium: {
 *     fontFamily: 'primary',
 *     fontSize: '3.2rem',
 *     fontWeight: 500,
 *     lineHeight: 1.25,
 *   }
 * }, { fontFamilyVariantKeyPrefix: 'font-variant', keyPrefix: 'typography-h1' })
 *
 * // Returns:
 * // {
 * //   'typography-h1-medium': '500 3.2rem/1.25 var(--font-variant-primary)'
 * // }
 */
export function prepareCssTypographyVariables(
  typographyObject: TypographyMapByWeight,
  options: Options,
) {
  const { fontFamilyVariantKeyPrefix, keyPrefix = '' } = options;

  return Object.fromEntries(
    Object.entries(typographyObject).map(([key, fontProperties]) => {
      const {
        fontFamily: fontFamilyVariant,
        fontSize,
        fontWeight,
        lineHeight,
      } = fontProperties;

      const fontFamilyVariantFormatted = toCssKeyFormat(fontFamilyVariant);
      const fontFamilyVariantWithPrefix = `${fontFamilyVariantKeyPrefix}-${fontFamilyVariantFormatted}`;

      const keyFormatted = toCssKeyFormat(key);
      const finalKey =
        keyPrefix !== '' ? `${keyPrefix}-${keyFormatted}` : keyFormatted;

      const finalValue = `${fontWeight} ${fontSize}/${lineHeight} var(--${fontFamilyVariantWithPrefix})`;

      return [finalKey, finalValue] as const;
    }),
  );
}
