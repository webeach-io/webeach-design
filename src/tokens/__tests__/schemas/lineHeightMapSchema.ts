import { z } from 'zod';

import { camelCaseStringSchema } from './camelCaseStringSchema';

/**
 * Zod schema for validating a line height mapping.
 *
 * This schema ensures that:
 * - The object is a **record (key-value map)** where:
 *   - The key follows the **camelCase** naming convention (`camelCaseStringSchema`).
 *   - The value is a **positive number** representing a unitless line height ratio (e.g., `1.2`, `1.5`).
 * - Line height values **must be positive** (zero and negative values are **not allowed**).
 *
 * @example
 * lineHeightMapSchema.parse({
 *   compact: 1.2,
 *   tight: 1.25,
 *   caption: 1.28571,
 *   snug: 1.33333,
 *   mono: 1.42857,
 *   text: 1.5,
 * }); // ✅ Valid
 *
 * lineHeightMapSchema.parse({
 *   Compact: 1.2,       // ❌ Invalid (must be camelCase)
 *   extra_relaxed: 1.5, // ❌ Invalid (must be camelCase)
 *   normal: "24px",     // ❌ Invalid (must be a number, not a string)
 *   relaxed: 0,         // ❌ Invalid (zero is not allowed)
 * }); // ❌ Invalid values
 *
 * @throws ZodError if:
 * - Any key is not in camelCase format.
 * - Any value is not a positive number.
 */
export const lineHeightMapSchema = z
  .record(camelCaseStringSchema, z.number().positive())
  .describe(
    'Mapping of line heights with camelCase keys and unitless numeric ratio values.',
  );
