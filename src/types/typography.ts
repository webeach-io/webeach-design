import { FontProperties, FontSizeKey, FontWeightKey } from './font';

export type TypographyMap = {
  // Headings
  H1: TypographyMapByWeight;
  H2: TypographyMapByWeight;
  H3: TypographyMapByWeight;
  H4: TypographyMapByWeight;
  H5: TypographyMapByWeight;

  // Body
  Body: Partial<Record<FontSizeKey, TypographyMapByWeight>>;

  // Code (monospace)
  Code: TypographyMapByWeight;
};

export type TypographyMapByWeight = Partial<
  Record<FontWeightKey, FontProperties>
>;
