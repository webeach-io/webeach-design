export type FontFamilyVariant = 'monospace' | 'primary';

export type FontLineHeightKey =
  | 'compact'
  | 'tight'
  | 'caption'
  | 'snug'
  | 'mono'
  | 'text';

export type FontProperties = {
  fontFamily: FontFamilyVariant;
  fontSize: `${number}rem`;
  fontWeight: number;
  lineHeight: number;
};

export type FontSizeKey =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'extraExtraLarge'
  | 'extraExtraExtraLarge';

export type FontWeightKey = 'regular' | 'medium' | 'bold';
