import { z } from 'zod';

/**
 * Zod schema for validating font size values.
 *
 * This schema ensures that:
 * - The value is a **string** in the `"Nrem"` format.
 * - The number part can be a **positive decimal** (e.g., `"1.2rem"`, `"1.6rem"`).
 * - The value **must end with "rem"** (other units like `px`, `%`, `em` are **not allowed**).
 * - **Zero (`0rem`) is not allowed**.
 * - Example valid values: `"1.2rem"`, `"1.6rem"`, `"3.2rem"`.
 * - Example invalid values:
 *   - `"0rem"` ❌ (zero is not allowed)
 *   - `"16px"` ❌ (`px` unit not allowed)
 *   - `"1.6"` ❌ (missing `"rem"`)
 *   - `"1.6em"` ❌ (`em` unit not allowed)
 *
 * @example
 * fontSizeValueSchema.parse("1.2rem"); // ✅ Valid
 * fontSizeValueSchema.parse("1.6rem"); // ✅ Valid
 * fontSizeValueSchema.parse("3.2rem"); // ✅ Valid
 * fontSizeValueSchema.parse("0rem");   // ❌ Invalid (zero is not allowed)
 * fontSizeValueSchema.parse("16px");   // ❌ Invalid (`px` unit not allowed)
 *
 * @throws ZodError if the font size value string is invalid.
 */
export const fontSizeValueSchema = z
  .string()
  .regex(
    /^[0-9]*[1-9][0-9]*(\.[0-9]+)?rem$|^[0-9]+\.[0-9]*[1-9][0-9]*rem$/,
    'Invalid font size value format. Must be a positive number followed by "rem" (e.g., "1.2rem", "1.6rem").',
  )
  .describe(
    'Font size value format: positive number followed by "rem" (e.g., "1.2rem", "1.6rem").',
  );
