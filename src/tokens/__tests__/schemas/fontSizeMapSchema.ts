import { z } from 'zod';

import { fontSizeKeySchema } from './fontSizeKeySchema';
import { fontSizeValueSchema } from './fontSizeValueSchema';

/**
 * Zod schema for validating a font size mapping.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key is a **font size key** (`fontSizeKeySchema`), one of:
 *     - `"small"`, `"medium"`, `"large"`.
 *     - `"extraSmall"`, `"extraLarge"`, `"extraExtraSmall"`, `"extraExtraLarge"`, etc.
 *   - The value is a **font size value** (`fontSizeValueSchema`), which must be in `"Nrem"` format (e.g., `"1.2rem"`, `"1.6rem"`).
 *
 * @example
 * fontSizeMapSchema.parse({
 *   extraSmall: "1.2rem",
 *   small: "1.4rem",
 *   medium: "1.6rem",
 *   large: "1.8rem",
 *   extraLarge: "2rem",
 *   extraExtraLarge: "2.4rem",
 *   extraExtraExtraLarge: "3.2rem",
 * }); // ✅ Valid
 *
 * fontSizeMapSchema.parse({
 *   extraMedium: "1.5rem", // ❌ Invalid (medium cannot have "extra")
 *   large: "16px",         // ❌ Invalid (must be in rem)
 *   small: "tiny",         // ❌ Invalid (not a numeric rem value)
 * }); // ❌ Invalid values
 *
 * @throws ZodError if:
 * - Any key is not a valid `fontSizeKeySchema` value.
 * - Any value is not a valid `fontSizeValueSchema` (`Nrem` format).
 */
export const fontSizeMapSchema = z
  .record(fontSizeKeySchema, fontSizeValueSchema)
  .describe('Mapping of font sizes with predefined keys and rem-based values.');
