import { z } from 'zod';

import { fontSizeKeySchema } from './fontSizeKeySchema';
import { fontSizeValueSchema } from './fontSizeValueSchema';
import { fontWeightKeySchema } from './fontWeightKeySchema';
import { fontWeightValueSchema } from './fontWeightValueSchema';

/**
 * Zod schema for font style definition.
 *
 * This schema ensures that:
 * - `fontFamily` is one of the predefined font family variants: `"primary"` or `"monospace"`.
 * - `fontSize` is a valid rem value (e.g., `"1.2rem"`, `"1.6rem"`).
 * - `fontWeight` is a number between `100` and `900` (multiple of `100`).
 * - `lineHeight` is a positive unitless number ratio (e.g., `1.2`, `1.5`).
 *
 * @example
 * fontStyleSchema.parse({
 *   fontFamily: "primary",
 *   fontSize: "1.6rem",
 *   fontWeight: 400,
 *   lineHeight: 1.5,
 * }); // ✅ Valid
 *
 * fontStyleSchema.parse({
 *   fontFamily: "Roboto", // ❌ Invalid (must be "primary" or "monospace")
 *   fontSize: "16px",     // ❌ Invalid (only rem allowed)
 *   fontWeight: 450,      // ❌ Invalid (not a multiple of 100)
 *   lineHeight: "24px",   // ❌ Invalid (must be a number)
 * }); // ❌ Throws ZodError
 *
 * @throws ZodError if any property is invalid.
 */
const fontStyleSchema = z
  .object({
    fontFamily: z.enum(['primary', 'monospace']),
    fontSize: fontSizeValueSchema,
    fontWeight: fontWeightValueSchema,
    lineHeight: z.number().positive(),
  })
  .describe('Font style definition for typography tokens.');

/**
 * Zod schema for font styles with variants.
 *
 * This schema ensures that:
 * - Each font variant key (e.g., `"bold"`, `"medium"`) maps to a valid font style.
 *
 * @example
 * fontStyleWithVariantSchema.parse({
 *   bold: { fontFamily: "Roboto", fontSize: "16px", fontWeight: 700, lineHeight: "24px" },
 *   mediumUnderline: { fontFamily: "Roboto", fontSize: "14px", fontWeight: 500, lineHeight: "22px" },
 * }); // ✅ Valid
 *
 * fontStyleWithVariantSchema.parse({
 *   "extraMedium": { fontFamily: "Roboto", fontSize: "16px", fontWeight: 400, lineHeight: "24px" },
 * }); // ❌ Invalid key (not in fontWeightKeySchema)
 *
 * @throws ZodError if any variant key or font style is invalid.
 */
const fontStyleWithVariantSchema = z.partialRecord(
  fontWeightKeySchema,
  fontStyleSchema,
);

/**
 * Zod schema for validating the typography token map.
 *
 * This schema ensures that:
 * - `H1`, `H2`, `H3`, `H4`, `H5`, and `Code` follow `fontStyleWithVariantSchema`.
 * - `Body` is a nested record with `fontSizeKeySchema` as keys and `fontStyleWithVariantSchema` as values.
 *
 * @example
 * typographyMapSchema.parse({
 *   H1: { bold: { fontFamily: "Roboto", fontSize: "32px", fontWeight: 700, lineHeight: "40px" } },
 *   Body: {
 *     medium: { regular: { fontFamily: "Roboto", fontSize: "16px", fontWeight: 400, lineHeight: "24px" } },
 *   },
 * }); // ✅ Valid
 *
 * typographyMapSchema.parse({
 *   Body: {
 *     "16px": { regular: { fontFamily: "Roboto", fontSize: "16px", fontWeight: 400, lineHeight: "24px" } },
 *   },
 * }); // ❌ Invalid key (must be fontSizeKeySchema)
 *
 * @throws ZodError if any typography entry is invalid.
 */
export const typographyMapSchema = z
  .object({
    H1: fontStyleWithVariantSchema,
    H2: fontStyleWithVariantSchema,
    H3: fontStyleWithVariantSchema,
    H4: fontStyleWithVariantSchema,
    H5: fontStyleWithVariantSchema,
    Body: z.record(fontSizeKeySchema, fontStyleWithVariantSchema),
    Code: fontStyleWithVariantSchema,
  })
  .describe('Typography token structure for design system.');
