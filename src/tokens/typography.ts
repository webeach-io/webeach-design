import {
  FontFamilyVariant,
  FontLineHeightKey,
  FontSizeKey,
  FontWeightKey,
} from '../types/font';
import { TypographyMap } from '../types/typography';

export const FontFamily = {
  primary:
    '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
  monospace:
    '"Roboto Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
} as const satisfies Readonly<Record<FontFamilyVariant, string>>;

export const FontSize = {
  extraSmall: '1.2rem', // 20px
  small: '1.4rem', // 14px
  medium: '1.6rem', // 16px
  large: '1.8rem', // 18px
  extraLarge: '2rem', // 20px
  extraExtraLarge: '2.4rem', // 24px
  extraExtraExtraLarge: '3.2rem', // 32px
} as const satisfies Readonly<Record<FontSizeKey, `${number}rem`>>;

export const FontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const satisfies Readonly<Record<FontWeightKey, number>>;

export const LineHeight = {
  compact: 1.2,
  tight: 1.25,
  caption: 1.28571,
  snug: 1.33333,
  mono: 1.42857,
  text: 1.5,
} as const satisfies Record<FontLineHeightKey, number>;

export const Typography = {
  H1: {
    medium: {
      fontFamily: 'primary',
      fontSize: FontSize.extraExtraExtraLarge,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.tight,
    },
  },
  H2: {
    medium: {
      fontFamily: 'primary',
      fontSize: FontSize.extraExtraLarge,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.tight,
    },
  },
  H3: {
    regular: {
      fontFamily: 'primary',
      fontSize: FontSize.extraLarge,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.compact,
    },
    medium: {
      fontFamily: 'primary',
      fontSize: FontSize.extraLarge,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.compact,
    },
  },
  H4: {
    regular: {
      fontFamily: 'primary',
      fontSize: FontSize.large,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.snug,
    },
    medium: {
      fontFamily: 'primary',
      fontSize: FontSize.large,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.snug,
    },
  },
  H5: {
    regular: {
      fontFamily: 'primary',
      fontSize: FontSize.medium,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.text,
    },
    medium: {
      fontFamily: 'primary',
      fontSize: FontSize.medium,
      fontWeight: FontWeight.medium,
      lineHeight: LineHeight.text,
    },
    bold: {
      fontFamily: 'primary',
      fontSize: FontSize.medium,
      fontWeight: FontWeight.bold,
      lineHeight: LineHeight.text,
    },
  },
  Body: {
    extraSmall: {
      regular: {
        fontFamily: 'primary',
        fontSize: FontSize.extraSmall,
        fontWeight: FontWeight.regular,
        lineHeight: LineHeight.text,
      },
      medium: {
        fontFamily: 'primary',
        fontSize: FontSize.extraSmall,
        fontWeight: FontWeight.medium,
        lineHeight: LineHeight.text,
      },
    },
    small: {
      regular: {
        fontFamily: 'primary',
        fontSize: FontSize.small,
        fontWeight: FontWeight.regular,
        lineHeight: LineHeight.caption,
      },
      medium: {
        fontFamily: 'primary',
        fontSize: FontSize.small,
        fontWeight: FontWeight.medium,
        lineHeight: LineHeight.caption,
      },
      bold: {
        fontFamily: 'primary',
        fontSize: FontSize.small,
        fontWeight: FontWeight.bold,
        lineHeight: LineHeight.caption,
      },
    },
    medium: {
      regular: {
        fontFamily: 'primary',
        fontSize: FontSize.medium,
        fontWeight: FontWeight.regular,
        lineHeight: LineHeight.text,
      },
      medium: {
        fontFamily: 'primary',
        fontSize: FontSize.medium,
        fontWeight: FontWeight.medium,
        lineHeight: LineHeight.text,
      },
      bold: {
        fontFamily: 'primary',
        fontSize: FontSize.medium,
        fontWeight: FontWeight.bold,
        lineHeight: LineHeight.text,
      },
    },
  },
  Code: {
    regular: {
      fontFamily: 'monospace',
      fontSize: FontSize.small,
      fontWeight: FontWeight.regular,
      lineHeight: LineHeight.mono,
    },
  },
} as const satisfies Readonly<TypographyMap>;

export type TypographyType = Readonly<typeof Typography>;
