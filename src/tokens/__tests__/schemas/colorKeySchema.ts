import { z } from 'zod';

/**
 * Zod schema for validating color key names.
 *
 * This schema ensures that:
 * - The color key consists of lowercase letters followed by a **multiple of 100 from 100 to 900**.
 * - The numeric suffix must be one of: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`.
 * - The prefix must be **only lowercase letters** (e.g., `"primary"`, `"secondary"`).
 * - Example valid values: `"primary100"`, `"secondary500"`, `"danger900"`.
 * - Example invalid values:
 *   - `"Primary100"` ❌ (contains uppercase letters)
 *   - `"secondary0"` ❌ (zero is not allowed)
 *   - `"primary1000"` ❌ (out of range, should be from `100` to `900`)
 *   - `"neutral"` ❌ (no numeric suffix)
 *
 * @example
 * colorKeySchema.parse("primary100"); // ✅ Valid
 * colorKeySchema.parse("danger500");  // ✅ Valid
 * colorKeySchema.parse("neutral900");  // ✅ Valid
 * colorKeySchema.parse("Primary100"); // ❌ Invalid (uppercase letter)
 * colorKeySchema.parse("secondary0"); // ❌ Invalid (zero is not allowed)
 * colorKeySchema.parse("primary1000"); // ❌ Invalid (out of range)
 *
 * @throws ZodError if the color key string is invalid.
 */
export const colorKeySchema = z
  .string()
  .regex(/^[a-z]+(100|[2-9]00)$/, 'Invalid color key format')
  .describe(
    `Color key format: lowercase letters followed by a multiple of 100 from 100 to 900 (e.g., 'primary100', 'secondary900').`,
  );
