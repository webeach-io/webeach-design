import type { HSLValue } from '../types/common';

export const DarkModeColor = {
  // Danger colors (100=lightest, 900=darkest, 600=brand)
  danger100: 'hsl(0 100% 85%)',
  danger200: 'hsl(0 100% 70%)',
  danger300: 'hsl(0 100% 60%)',
  danger400: 'hsl(0 79% 54%)',
  danger500: 'hsl(0 73% 51%)',
  danger600: 'hsl(0 67% 48%)',
  danger700: 'hsl(0 100% 30%)',
  danger800: 'hsl(0 100% 20%)',
  danger900: 'hsl(0 100% 10%)',

  // Neutral colors (100=lightest, 900=darkest)
  neutral100: 'hsl(0 0% 100%)',
  neutral200: 'hsl(240 1% 83%)',
  neutral300: 'hsl(240 2% 57%)',
  neutral400: 'hsl(240 1% 39%)',
  neutral500: 'hsl(240 1% 34%)',
  neutral600: 'hsl(240 1% 29%)',
  neutral700: 'hsl(240 2% 23%)',
  neutral800: 'hsl(240 3% 11%)',
  neutral900: 'hsl(0 0% 0%)',

  // Primary colors (100=lightest, 900=darkest, 600=brand)
  primary100: 'hsl(299 77% 90%)',
  primary200: 'hsl(301 72% 80%)',
  primary300: 'hsl(302 67% 72%)',
  primary400: 'hsl(302 59% 63%)',
  primary500: 'hsl(301 51% 56%)',
  primary600: 'hsl(300 43% 49%)',
  primary700: 'hsl(300 47% 35%)',
  primary800: 'hsl(300 48% 20%)',
  primary900: 'hsl(300 45% 11%)',

  // Secondary colors (100=lightest, 900=darkest)
  secondary100: 'hsl(196 86% 88%)',
  secondary200: 'hsl(198 85% 79%)',
  secondary300: 'hsl(199 86% 70%)',
  secondary400: 'hsl(200 85% 63%)',
  secondary500: 'hsl(201 78% 55%)',
  secondary600: 'hsl(202 71% 47%)',
  secondary700: 'hsl(201 70% 42%)',
  secondary800: 'hsl(197 69% 25%)',
  secondary900: 'hsl(200 71% 13%)',

  // Success colors (100=lightest, 900=darkest)
  success100: 'hsl(120 52% 88%)',
  success200: 'hsl(120 52% 80%)',
  success300: 'hsl(120 50% 71%)',
  success400: 'hsl(120 49% 62%)',
  success500: 'hsl(121 45% 54%)',
  success600: 'hsl(123 41% 45%)',
  success700: 'hsl(120 40% 35%)',
  success800: 'hsl(120 33% 21%)',
  success900: 'hsl(120 36% 10%)',

  // Warning colors (100=lightest, 900=darkest)
  warning100: 'hsl(37 92% 80%)',
  warning200: 'hsl(36 90% 72%)',
  warning300: 'hsl(34 89% 63%)',
  warning400: 'hsl(35 89% 55%)',
  warning500: 'hsl(36 82% 52%)',
  warning600: 'hsl(36 75% 49%)',
  warning700: 'hsl(42 100% 30%)',
  warning800: 'hsl(40 100% 20%)',
  warning900: 'hsl(40 100% 10%)',
} satisfies Record<string, HSLValue>;

export const LightModeColor = {
  // Danger colors (100=lightest, 900=darkest, 600=brand)
  danger100: 'hsl(0 100% 97%)',
  danger200: 'hsl(0 100% 92%)',
  danger300: 'hsl(0 100% 85%)',
  danger400: 'hsl(0 100% 75%)',
  danger500: 'hsl(0 100% 65%)',
  danger600: 'hsl(0 100% 60%)',
  danger700: 'hsl(0 79% 54%)',
  danger800: 'hsl(0 67% 48%)',
  danger900: 'hsl(0 67% 42%)',

  // Neutral colors (100=lightest, 900=darkest)
  neutral100: 'hsl(0 0% 100%)',
  neutral200: 'hsl(0 0% 98%)',
  neutral300: 'hsl(0 0% 96%)',
  neutral400: 'hsl(0 0% 88%)',
  neutral500: 'hsl(0 0% 80%)',
  neutral600: 'hsl(0 0% 66%)',
  neutral700: 'hsl(0 0% 53%)',
  neutral800: 'hsl(0 0% 40%)',
  neutral900: 'hsl(0 0% 27%)',

  // Primary colors (100=lightest, 900=darkest, 600=brand)
  primary100: 'hsl(300 83% 95%)',
  primary200: 'hsl(299 77% 90%)',
  primary300: 'hsl(301 72% 80%)',
  primary400: 'hsl(302 71% 71%)',
  primary500: 'hsl(302 72% 62%)',
  primary600: 'hsl(301 53% 55%)',
  primary700: 'hsl(301 42% 49%)',
  primary800: 'hsl(299 41% 40%)',
  primary900: 'hsl(297 41% 31%)',

  // Secondary colors (100=lightest, 900=darkest)
  secondary100: 'hsl(203 85% 95%)',
  secondary200: 'hsl(203 85% 89%)',
  secondary300: 'hsl(204 85% 84%)',
  secondary400: 'hsl(205 85% 79%)',
  secondary500: 'hsl(204 84% 73%)',
  secondary600: 'hsl(201 84% 55%)',
  secondary700: 'hsl(202 71% 49%)',
  secondary800: 'hsl(203 72% 42%)',
  secondary900: 'hsl(205 75% 36%)',

  // Success colors (100=lightest, 900=darkest)
  success100: 'hsl(120 52% 94%)',
  success200: 'hsl(120 52% 88%)',
  success300: 'hsl(120 52% 80%)',
  success400: 'hsl(120 50% 71%)',
  success500: 'hsl(120 49% 62%)',
  success600: 'hsl(122 39% 49%)',
  success700: 'hsl(123 41% 45%)',
  success800: 'hsl(123 43% 39%)',
  success900: 'hsl(123 46% 34%)',

  // Warning colors (100=lightest, 900=darkest)
  warning100: 'hsl(46 100% 94%)',
  warning200: 'hsl(40 93% 89%)',
  warning300: 'hsl(37 92% 80%)',
  warning400: 'hsl(36 90% 72%)',
  warning500: 'hsl(34 89% 63%)',
  warning600: 'hsl(35 89% 55%)',
  warning700: 'hsl(36 75% 49%)',
  warning800: 'hsl(37 75% 44%)',
  warning900: 'hsl(34 74% 35%)',
} satisfies Record<string, HSLValue>;

export type DarkModeColorType = Readonly<typeof DarkModeColor>;
export type DarkModeColorKey = keyof DarkModeColorType;

export type LightModeColorType = Readonly<typeof LightModeColor>;
export type LightModeColorKey = keyof LightModeColorType;

export type ColorKey = DarkModeColorKey | LightModeColorKey;
