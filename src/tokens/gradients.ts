import {
  DarkModeColor,
  DarkModeColorKey,
  DarkModeColorType,
  LightModeColor,
  LightModeColorKey,
  LightModeColorType,
} from './colors';

export const DarkModeGradient = {
  primary100: [DarkModeColor.secondary100, DarkModeColor.primary100],
  primary200: [DarkModeColor.secondary200, DarkModeColor.primary200],
  primary300: [DarkModeColor.secondary300, DarkModeColor.primary300],
  primary400: [DarkModeColor.secondary400, DarkModeColor.primary400],
  primary500: [DarkModeColor.secondary500, DarkModeColor.primary500],
  primary600: [DarkModeColor.secondary600, DarkModeColor.primary600],
  primary700: [DarkModeColor.secondary700, DarkModeColor.primary700],
  primary800: [DarkModeColor.secondary800, DarkModeColor.primary800],
  primary900: [DarkModeColor.secondary900, DarkModeColor.primary900],
} satisfies Record<
  string,
  [DarkModeColorType[DarkModeColorKey], DarkModeColorType[DarkModeColorKey]]
>;

export const LightModeGradient = {
  primary100: [LightModeColor.secondary100, LightModeColor.primary100],
  primary200: [LightModeColor.secondary200, LightModeColor.primary200],
  primary300: [LightModeColor.secondary300, LightModeColor.primary300],
  primary400: [LightModeColor.secondary400, LightModeColor.primary400],
  primary500: [LightModeColor.secondary500, LightModeColor.primary500],
  primary600: [LightModeColor.secondary600, LightModeColor.primary600],
  primary700: [LightModeColor.secondary700, LightModeColor.primary700],
  primary800: [LightModeColor.secondary800, LightModeColor.primary800],
  primary900: [LightModeColor.secondary900, LightModeColor.primary900],
} satisfies Record<
  string,
  [LightModeColorType[LightModeColorKey], LightModeColorType[LightModeColorKey]]
>;

export type DarkModeGradientType = Readonly<typeof DarkModeGradient>;
export type DarkModeGradientKey = keyof DarkModeGradientType;

export type LightModeGradientType = Readonly<typeof LightModeGradient>;
export type LightModeGradientKey = keyof LightModeGradientType;

export type GradientKey = DarkModeGradientKey & LightModeGradientKey;
