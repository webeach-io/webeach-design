# `@webeach-io/design`

`@webeach-io/design` is a unified design tokens package used across the `webeach` services.

It provides a standardized foundation for building visually consistent user interfaces with full support for both light and dark modes.

---

<!-- TOC -->

- [`@webeach-io/design`](#webeach-iodesign)
  - [📦 Installation](#-installation)
  - [🎨 Colors](#-colors)
    - [Light Mode Colors](#light-mode-colors)
    - [Dark Mode Colors](#dark-mode-colors)
    - [Mode Colors](#mode-colors)
  - [🌈 Gradients](#-gradients)
    - [Light Mode Gradients](#light-mode-gradients)
    - [Dark Mode Gradients](#dark-mode-gradients)
    - [Mode Gradients](#mode-gradients)
  - [📐 Sizes](#-sizes)
    - [Base Sizes](#base-sizes)
    - [Spacing Sizes](#spacing-sizes)
    - [Roundings](#roundings)
    - [Border Sizes](#border-sizes)
  - [✍️ Typography](#-typography)
  - [🎛️ Mode Switching](#-mode-switching)
  - [💡 Examples](#-examples)
    - [Colors](#colors)
    - [Gradients](#gradients)
    - [Sizes](#sizes)
    - [Typography](#typography)
  - [🧩 TypeScript Types](#-typescript-types)
  - [⚙️ Development](#-development)
    - [Build the library](#build-the-library)
    - [Watch mode](#watch-mode)
    - [Generate assets](#generate-assets)
  - [✅ Design Token Requirements](#-design-token-requirements)
  - [🔖 Releasing a New Version](#-releasing-a-new-version)
  - [👨‍💻 Author](#-author)
  - [📄 License](#-license)
  <!-- TOC -->

---

## 📦 Installation

```sh
yarn add @webeach-io/design
```

---

## 🎨 Colors

Each color group includes 9 shades (100–900) adapted for both light and dark modes. Shade **600** is the brand/accent anchor.

In **light mode**, `100` is the lightest shade and `900` is the darkest. In **dark mode**, the direction is inverted: `100` is the darkest (dark background) and `900` is the lightest (light foreground). This ensures that semantic variables like `--color-neutral-100` always represent the primary background colour regardless of the active mode.

- **Primary** — main brand accent colors
- **Secondary** — additional accent colors
- **Neutral** — neutral grayscale palette
- **Danger** — used for errors and critical states
- **Warning** — used for warnings and alerts
- **Success** — used for success messages and confirmations

### Light Mode Colors

The table below shows the color values for the light mode:

|                                Color                                |     Name      |              JS               |               CSS               |
|:-------------------------------------------------------------------:|:-------------:|:-----------------------------:|:-------------------------------:|
|  <img alt="" src="./assets/color-lm-neutral-100.svg" width="24px">  |  Neutral 100  |  `LightModeColor.neutral100`  |  `var(--lm-color-neutral-100)`  |
|  <img alt="" src="./assets/color-lm-neutral-200.svg" width="24px">  |  Neutral 200  |  `LightModeColor.neutral200`  |  `var(--lm-color-neutral-200)`  |
|  <img alt="" src="./assets/color-lm-neutral-300.svg" width="24px">  |  Neutral 300  |  `LightModeColor.neutral300`  |  `var(--lm-color-neutral-300)`  |
|  <img alt="" src="./assets/color-lm-neutral-400.svg" width="24px">  |  Neutral 400  |  `LightModeColor.neutral400`  |  `var(--lm-color-neutral-400)`  |
|  <img alt="" src="./assets/color-lm-neutral-500.svg" width="24px">  |  Neutral 500  |  `LightModeColor.neutral500`  |  `var(--lm-color-neutral-500)`  |
|  <img alt="" src="./assets/color-lm-neutral-600.svg" width="24px">  |  Neutral 600  |  `LightModeColor.neutral600`  |  `var(--lm-color-neutral-600)`  |
|  <img alt="" src="./assets/color-lm-neutral-700.svg" width="24px">  |  Neutral 700  |  `LightModeColor.neutral700`  |  `var(--lm-color-neutral-700)`  |
|  <img alt="" src="./assets/color-lm-neutral-800.svg" width="24px">  |  Neutral 800  |  `LightModeColor.neutral800`  |  `var(--lm-color-neutral-800)`  |
|  <img alt="" src="./assets/color-lm-neutral-900.svg" width="24px">  |  Neutral 900  |  `LightModeColor.neutral900`  |  `var(--lm-color-neutral-900)`  |
|  <img alt="" src="./assets/color-lm-primary-100.svg" width="24px">  |  Primary 100  |  `LightModeColor.primary100`  |  `var(--lm-color-primary-100)`  |
|  <img alt="" src="./assets/color-lm-primary-200.svg" width="24px">  |  Primary 200  |  `LightModeColor.primary200`  |  `var(--lm-color-primary-200)`  |
|  <img alt="" src="./assets/color-lm-primary-300.svg" width="24px">  |  Primary 300  |  `LightModeColor.primary300`  |  `var(--lm-color-primary-300)`  |
|  <img alt="" src="./assets/color-lm-primary-400.svg" width="24px">  |  Primary 400  |  `LightModeColor.primary400`  |  `var(--lm-color-primary-400)`  |
|  <img alt="" src="./assets/color-lm-primary-500.svg" width="24px">  |  Primary 500  |  `LightModeColor.primary500`  |  `var(--lm-color-primary-500)`  |
|  <img alt="" src="./assets/color-lm-primary-600.svg" width="24px">  |  Primary 600  |  `LightModeColor.primary600`  |  `var(--lm-color-primary-600)`  |
|  <img alt="" src="./assets/color-lm-primary-700.svg" width="24px">  |  Primary 700  |  `LightModeColor.primary700`  |  `var(--lm-color-primary-700)`  |
|  <img alt="" src="./assets/color-lm-primary-800.svg" width="24px">  |  Primary 800  |  `LightModeColor.primary800`  |  `var(--lm-color-primary-800)`  |
|  <img alt="" src="./assets/color-lm-primary-900.svg" width="24px">  |  Primary 900  |  `LightModeColor.primary900`  |  `var(--lm-color-primary-900)`  |
| <img alt="" src="./assets/color-lm-secondary-100.svg" width="24px"> | Secondary 100 | `LightModeColor.secondary100` | `var(--lm-color-secondary-100)` |
| <img alt="" src="./assets/color-lm-secondary-200.svg" width="24px"> | Secondary 200 | `LightModeColor.secondary200` | `var(--lm-color-secondary-200)` |
| <img alt="" src="./assets/color-lm-secondary-300.svg" width="24px"> | Secondary 300 | `LightModeColor.secondary300` | `var(--lm-color-secondary-300)` |
| <img alt="" src="./assets/color-lm-secondary-400.svg" width="24px"> | Secondary 400 | `LightModeColor.secondary400` | `var(--lm-color-secondary-400)` |
| <img alt="" src="./assets/color-lm-secondary-500.svg" width="24px"> | Secondary 500 | `LightModeColor.secondary500` | `var(--lm-color-secondary-500)` |
| <img alt="" src="./assets/color-lm-secondary-600.svg" width="24px"> | Secondary 600 | `LightModeColor.secondary600` | `var(--lm-color-secondary-600)` |
| <img alt="" src="./assets/color-lm-secondary-700.svg" width="24px"> | Secondary 700 | `LightModeColor.secondary700` | `var(--lm-color-secondary-700)` |
| <img alt="" src="./assets/color-lm-secondary-800.svg" width="24px"> | Secondary 800 | `LightModeColor.secondary800` | `var(--lm-color-secondary-800)` |
| <img alt="" src="./assets/color-lm-secondary-900.svg" width="24px"> | Secondary 900 | `LightModeColor.secondary900` | `var(--lm-color-secondary-900)` |
|  <img alt="" src="./assets/color-lm-danger-100.svg" width="24px">   |  Danger 100   |  `LightModeColor.danger100`   |  `var(--lm-color-danger-100)`   |
|  <img alt="" src="./assets/color-lm-danger-200.svg" width="24px">   |  Danger 200   |  `LightModeColor.danger200`   |  `var(--lm-color-danger-200)`   |
|  <img alt="" src="./assets/color-lm-danger-300.svg" width="24px">   |  Danger 300   |  `LightModeColor.danger300`   |  `var(--lm-color-danger-300)`   |
|  <img alt="" src="./assets/color-lm-danger-400.svg" width="24px">   |  Danger 400   |  `LightModeColor.danger400`   |  `var(--lm-color-danger-400)`   |
|  <img alt="" src="./assets/color-lm-danger-500.svg" width="24px">   |  Danger 500   |  `LightModeColor.danger500`   |  `var(--lm-color-danger-500)`   |
|  <img alt="" src="./assets/color-lm-danger-600.svg" width="24px">   |  Danger 600   |  `LightModeColor.danger600`   |  `var(--lm-color-danger-600)`   |
|  <img alt="" src="./assets/color-lm-danger-700.svg" width="24px">   |  Danger 700   |  `LightModeColor.danger700`   |  `var(--lm-color-danger-700)`   |
|  <img alt="" src="./assets/color-lm-danger-800.svg" width="24px">   |  Danger 800   |  `LightModeColor.danger800`   |  `var(--lm-color-danger-800)`   |
|  <img alt="" src="./assets/color-lm-danger-900.svg" width="24px">   |  Danger 900   |  `LightModeColor.danger900`   |  `var(--lm-color-danger-900)`   |
|  <img alt="" src="./assets/color-lm-warning-100.svg" width="24px">  |  Warning 100  |  `LightModeColor.warning100`  |  `var(--lm-color-warning-100)`  |
|  <img alt="" src="./assets/color-lm-warning-200.svg" width="24px">  |  Warning 200  |  `LightModeColor.warning200`  |  `var(--lm-color-warning-200)`  |
|  <img alt="" src="./assets/color-lm-warning-300.svg" width="24px">  |  Warning 300  |  `LightModeColor.warning300`  |  `var(--lm-color-warning-300)`  |
|  <img alt="" src="./assets/color-lm-warning-400.svg" width="24px">  |  Warning 400  |  `LightModeColor.warning400`  |  `var(--lm-color-warning-400)`  |
|  <img alt="" src="./assets/color-lm-warning-500.svg" width="24px">  |  Warning 500  |  `LightModeColor.warning500`  |  `var(--lm-color-warning-500)`  |
|  <img alt="" src="./assets/color-lm-warning-600.svg" width="24px">  |  Warning 600  |  `LightModeColor.warning600`  |  `var(--lm-color-warning-600)`  |
|  <img alt="" src="./assets/color-lm-warning-700.svg" width="24px">  |  Warning 700  |  `LightModeColor.warning700`  |  `var(--lm-color-warning-700)`  |
|  <img alt="" src="./assets/color-lm-warning-800.svg" width="24px">  |  Warning 800  |  `LightModeColor.warning800`  |  `var(--lm-color-warning-800)`  |
|  <img alt="" src="./assets/color-lm-warning-900.svg" width="24px">  |  Warning 900  |  `LightModeColor.warning900`  |  `var(--lm-color-warning-900)`  |
|  <img alt="" src="./assets/color-lm-success-100.svg" width="24px">  |  Success 100  |  `LightModeColor.success100`  |  `var(--lm-color-success-100)`  |
|  <img alt="" src="./assets/color-lm-success-200.svg" width="24px">  |  Success 200  |  `LightModeColor.success200`  |  `var(--lm-color-success-200)`  |
|  <img alt="" src="./assets/color-lm-success-300.svg" width="24px">  |  Success 300  |  `LightModeColor.success300`  |  `var(--lm-color-success-300)`  |
|  <img alt="" src="./assets/color-lm-success-400.svg" width="24px">  |  Success 400  |  `LightModeColor.success400`  |  `var(--lm-color-success-400)`  |
|  <img alt="" src="./assets/color-lm-success-500.svg" width="24px">  |  Success 500  |  `LightModeColor.success500`  |  `var(--lm-color-success-500)`  |
|  <img alt="" src="./assets/color-lm-success-600.svg" width="24px">  |  Success 600  |  `LightModeColor.success600`  |  `var(--lm-color-success-600)`  |
|  <img alt="" src="./assets/color-lm-success-700.svg" width="24px">  |  Success 700  |  `LightModeColor.success700`  |  `var(--lm-color-success-700)`  |
|  <img alt="" src="./assets/color-lm-success-800.svg" width="24px">  |  Success 800  |  `LightModeColor.success800`  |  `var(--lm-color-success-800)`  |
|  <img alt="" src="./assets/color-lm-success-900.svg" width="24px">  |  Success 900  |  `LightModeColor.success900`  |  `var(--lm-color-success-900)`  |

### Dark Mode Colors

The table below shows the color values for the dark mode:

|                                Color                                |     Name      |              JS              |               CSS               |
|:-------------------------------------------------------------------:|:-------------:|:----------------------------:|:-------------------------------:|
|  <img alt="" src="./assets/color-dm-neutral-100.svg" width="24px">  |  Neutral 100  |  `DarkModeColor.neutral100`  |  `var(--dm-color-neutral-100)`  |
|  <img alt="" src="./assets/color-dm-neutral-200.svg" width="24px">  |  Neutral 200  |  `DarkModeColor.neutral200`  |  `var(--dm-color-neutral-200)`  |
|  <img alt="" src="./assets/color-dm-neutral-300.svg" width="24px">  |  Neutral 300  |  `DarkModeColor.neutral300`  |  `var(--dm-color-neutral-300)`  |
|  <img alt="" src="./assets/color-dm-neutral-400.svg" width="24px">  |  Neutral 400  |  `DarkModeColor.neutral400`  |  `var(--dm-color-neutral-400)`  |
|  <img alt="" src="./assets/color-dm-neutral-500.svg" width="24px">  |  Neutral 500  |  `DarkModeColor.neutral500`  |  `var(--dm-color-neutral-500)`  |
|  <img alt="" src="./assets/color-dm-neutral-600.svg" width="24px">  |  Neutral 600  |  `DarkModeColor.neutral600`  |  `var(--dm-color-neutral-600)`  |
|  <img alt="" src="./assets/color-dm-neutral-700.svg" width="24px">  |  Neutral 700  |  `DarkModeColor.neutral700`  |  `var(--dm-color-neutral-700)`  |
|  <img alt="" src="./assets/color-dm-neutral-800.svg" width="24px">  |  Neutral 800  |  `DarkModeColor.neutral800`  |  `var(--dm-color-neutral-800)`  |
|  <img alt="" src="./assets/color-dm-neutral-900.svg" width="24px">  |  Neutral 900  |  `DarkModeColor.neutral900`  |  `var(--dm-color-neutral-900)`  |
|  <img alt="" src="./assets/color-dm-primary-100.svg" width="24px">  |  Primary 100  |  `DarkModeColor.primary100`  |  `var(--dm-color-primary-100)`  |
|  <img alt="" src="./assets/color-dm-primary-200.svg" width="24px">  |  Primary 200  |  `DarkModeColor.primary200`  |  `var(--dm-color-primary-200)`  |
|  <img alt="" src="./assets/color-dm-primary-300.svg" width="24px">  |  Primary 300  |  `DarkModeColor.primary300`  |  `var(--dm-color-primary-300)`  |
|  <img alt="" src="./assets/color-dm-primary-400.svg" width="24px">  |  Primary 400  |  `DarkModeColor.primary400`  |  `var(--dm-color-primary-400)`  |
|  <img alt="" src="./assets/color-dm-primary-500.svg" width="24px">  |  Primary 500  |  `DarkModeColor.primary500`  |  `var(--dm-color-primary-500)`  |
|  <img alt="" src="./assets/color-dm-primary-600.svg" width="24px">  |  Primary 600  |  `DarkModeColor.primary600`  |  `var(--dm-color-primary-600)`  |
|  <img alt="" src="./assets/color-dm-primary-700.svg" width="24px">  |  Primary 700  |  `DarkModeColor.primary700`  |  `var(--dm-color-primary-700)`  |
|  <img alt="" src="./assets/color-dm-primary-800.svg" width="24px">  |  Primary 800  |  `DarkModeColor.primary800`  |  `var(--dm-color-primary-800)`  |
|  <img alt="" src="./assets/color-dm-primary-900.svg" width="24px">  |  Primary 900  |  `DarkModeColor.primary900`  |  `var(--dm-color-primary-900)`  |
| <img alt="" src="./assets/color-dm-secondary-100.svg" width="24px"> | Secondary 100 | `DarkModeColor.secondary100` | `var(--dm-color-secondary-100)` |
| <img alt="" src="./assets/color-dm-secondary-200.svg" width="24px"> | Secondary 200 | `DarkModeColor.secondary200` | `var(--dm-color-secondary-200)` |
| <img alt="" src="./assets/color-dm-secondary-300.svg" width="24px"> | Secondary 300 | `DarkModeColor.secondary300` | `var(--dm-color-secondary-300)` |
| <img alt="" src="./assets/color-dm-secondary-400.svg" width="24px"> | Secondary 400 | `DarkModeColor.secondary400` | `var(--dm-color-secondary-400)` |
| <img alt="" src="./assets/color-dm-secondary-500.svg" width="24px"> | Secondary 500 | `DarkModeColor.secondary500` | `var(--dm-color-secondary-500)` |
| <img alt="" src="./assets/color-dm-secondary-600.svg" width="24px"> | Secondary 600 | `DarkModeColor.secondary600` | `var(--dm-color-secondary-600)` |
| <img alt="" src="./assets/color-dm-secondary-700.svg" width="24px"> | Secondary 700 | `DarkModeColor.secondary700` | `var(--dm-color-secondary-700)` |
| <img alt="" src="./assets/color-dm-secondary-800.svg" width="24px"> | Secondary 800 | `DarkModeColor.secondary800` | `var(--dm-color-secondary-800)` |
| <img alt="" src="./assets/color-dm-secondary-900.svg" width="24px"> | Secondary 900 | `DarkModeColor.secondary900` | `var(--dm-color-secondary-900)` |
|  <img alt="" src="./assets/color-dm-danger-100.svg" width="24px">   |  Danger 100   |  `DarkModeColor.danger100`   |  `var(--dm-color-danger-100)`   |
|  <img alt="" src="./assets/color-dm-danger-200.svg" width="24px">   |  Danger 200   |  `DarkModeColor.danger200`   |  `var(--dm-color-danger-200)`   |
|  <img alt="" src="./assets/color-dm-danger-300.svg" width="24px">   |  Danger 300   |  `DarkModeColor.danger300`   |  `var(--dm-color-danger-300)`   |
|  <img alt="" src="./assets/color-dm-danger-400.svg" width="24px">   |  Danger 400   |  `DarkModeColor.danger400`   |  `var(--dm-color-danger-400)`   |
|  <img alt="" src="./assets/color-dm-danger-500.svg" width="24px">   |  Danger 500   |  `DarkModeColor.danger500`   |  `var(--dm-color-danger-500)`   |
|  <img alt="" src="./assets/color-dm-danger-600.svg" width="24px">   |  Danger 600   |  `DarkModeColor.danger600`   |  `var(--dm-color-danger-600)`   |
|  <img alt="" src="./assets/color-dm-danger-700.svg" width="24px">   |  Danger 700   |  `DarkModeColor.danger700`   |  `var(--dm-color-danger-700)`   |
|  <img alt="" src="./assets/color-dm-danger-800.svg" width="24px">   |  Danger 800   |  `DarkModeColor.danger800`   |  `var(--dm-color-danger-800)`   |
|  <img alt="" src="./assets/color-dm-danger-900.svg" width="24px">   |  Danger 900   |  `DarkModeColor.danger900`   |  `var(--dm-color-danger-900)`   |
|  <img alt="" src="./assets/color-dm-warning-100.svg" width="24px">  |  Warning 100  |  `DarkModeColor.warning100`  |  `var(--dm-color-warning-100)`  |
|  <img alt="" src="./assets/color-dm-warning-200.svg" width="24px">  |  Warning 200  |  `DarkModeColor.warning200`  |  `var(--dm-color-warning-200)`  |
|  <img alt="" src="./assets/color-dm-warning-300.svg" width="24px">  |  Warning 300  |  `DarkModeColor.warning300`  |  `var(--dm-color-warning-300)`  |
|  <img alt="" src="./assets/color-dm-warning-400.svg" width="24px">  |  Warning 400  |  `DarkModeColor.warning400`  |  `var(--dm-color-warning-400)`  |
|  <img alt="" src="./assets/color-dm-warning-500.svg" width="24px">  |  Warning 500  |  `DarkModeColor.warning500`  |  `var(--dm-color-warning-500)`  |
|  <img alt="" src="./assets/color-dm-warning-600.svg" width="24px">  |  Warning 600  |  `DarkModeColor.warning600`  |  `var(--dm-color-warning-600)`  |
|  <img alt="" src="./assets/color-dm-warning-700.svg" width="24px">  |  Warning 700  |  `DarkModeColor.warning700`  |  `var(--dm-color-warning-700)`  |
|  <img alt="" src="./assets/color-dm-warning-800.svg" width="24px">  |  Warning 800  |  `DarkModeColor.warning800`  |  `var(--dm-color-warning-800)`  |
|  <img alt="" src="./assets/color-dm-warning-900.svg" width="24px">  |  Warning 900  |  `DarkModeColor.warning900`  |  `var(--dm-color-warning-900)`  |
|  <img alt="" src="./assets/color-dm-success-100.svg" width="24px">  |  Success 100  |  `DarkModeColor.success100`  |  `var(--dm-color-success-100)`  |
|  <img alt="" src="./assets/color-dm-success-200.svg" width="24px">  |  Success 200  |  `DarkModeColor.success200`  |  `var(--dm-color-success-200)`  |
|  <img alt="" src="./assets/color-dm-success-300.svg" width="24px">  |  Success 300  |  `DarkModeColor.success300`  |  `var(--dm-color-success-300)`  |
|  <img alt="" src="./assets/color-dm-success-400.svg" width="24px">  |  Success 400  |  `DarkModeColor.success400`  |  `var(--dm-color-success-400)`  |
|  <img alt="" src="./assets/color-dm-success-500.svg" width="24px">  |  Success 500  |  `DarkModeColor.success500`  |  `var(--dm-color-success-500)`  |
|  <img alt="" src="./assets/color-dm-success-600.svg" width="24px">  |  Success 600  |  `DarkModeColor.success600`  |  `var(--dm-color-success-600)`  |
|  <img alt="" src="./assets/color-dm-success-700.svg" width="24px">  |  Success 700  |  `DarkModeColor.success700`  |  `var(--dm-color-success-700)`  |
|  <img alt="" src="./assets/color-dm-success-800.svg" width="24px">  |  Success 800  |  `DarkModeColor.success800`  |  `var(--dm-color-success-800)`  |
|  <img alt="" src="./assets/color-dm-success-900.svg" width="24px">  |  Success 900  |  `DarkModeColor.success900`  |  `var(--dm-color-success-900)`  |

### Mode Colors

The table below shows color values that adapt to both light and dark modes:

|                             Light Mode                              |                              Dark Mode                              |     Name      |             CSS              |
|:-------------------------------------------------------------------:|:-------------------------------------------------------------------:|:-------------:|:----------------------------:|
|  <img alt="" src="./assets/color-lm-neutral-100.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-100.svg" width="24px">  |  Neutral 100  |  `var(--color-neutral-100)`  |
|  <img alt="" src="./assets/color-lm-neutral-200.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-200.svg" width="24px">  |  Neutral 200  |  `var(--color-neutral-200)`  |
|  <img alt="" src="./assets/color-lm-neutral-300.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-300.svg" width="24px">  |  Neutral 300  |  `var(--color-neutral-300)`  |
|  <img alt="" src="./assets/color-lm-neutral-400.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-400.svg" width="24px">  |  Neutral 400  |  `var(--color-neutral-400)`  |
|  <img alt="" src="./assets/color-lm-neutral-500.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-500.svg" width="24px">  |  Neutral 500  |  `var(--color-neutral-500)`  |
|  <img alt="" src="./assets/color-lm-neutral-600.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-600.svg" width="24px">  |  Neutral 600  |  `var(--color-neutral-600)`  |
|  <img alt="" src="./assets/color-lm-neutral-700.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-700.svg" width="24px">  |  Neutral 700  |  `var(--color-neutral-700)`  |
|  <img alt="" src="./assets/color-lm-neutral-800.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-800.svg" width="24px">  |  Neutral 800  |  `var(--color-neutral-800)`  |
|  <img alt="" src="./assets/color-lm-neutral-900.svg" width="24px">  |  <img alt="" src="./assets/color-dm-neutral-900.svg" width="24px">  |  Neutral 900  |  `var(--color-neutral-900)`  |
|  <img alt="" src="./assets/color-lm-primary-100.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-100.svg" width="24px">  |  Primary 100  |  `var(--color-primary-100)`  |
|  <img alt="" src="./assets/color-lm-primary-200.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-200.svg" width="24px">  |  Primary 200  |  `var(--color-primary-200)`  |
|  <img alt="" src="./assets/color-lm-primary-300.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-300.svg" width="24px">  |  Primary 300  |  `var(--color-primary-300)`  |
|  <img alt="" src="./assets/color-lm-primary-400.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-400.svg" width="24px">  |  Primary 400  |  `var(--color-primary-400)`  |
|  <img alt="" src="./assets/color-lm-primary-500.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-500.svg" width="24px">  |  Primary 500  |  `var(--color-primary-500)`  |
|  <img alt="" src="./assets/color-lm-primary-600.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-600.svg" width="24px">  |  Primary 600  |  `var(--color-primary-600)`  |
|  <img alt="" src="./assets/color-lm-primary-700.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-700.svg" width="24px">  |  Primary 700  |  `var(--color-primary-700)`  |
|  <img alt="" src="./assets/color-lm-primary-800.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-800.svg" width="24px">  |  Primary 800  |  `var(--color-primary-800)`  |
|  <img alt="" src="./assets/color-lm-primary-900.svg" width="24px">  |  <img alt="" src="./assets/color-dm-primary-900.svg" width="24px">  |  Primary 900  |  `var(--color-primary-900)`  |
| <img alt="" src="./assets/color-lm-secondary-100.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-100.svg" width="24px"> | Secondary 100 | `var(--color-secondary-100)` |
| <img alt="" src="./assets/color-lm-secondary-200.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-200.svg" width="24px"> | Secondary 200 | `var(--color-secondary-200)` |
| <img alt="" src="./assets/color-lm-secondary-300.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-300.svg" width="24px"> | Secondary 300 | `var(--color-secondary-300)` |
| <img alt="" src="./assets/color-lm-secondary-400.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-400.svg" width="24px"> | Secondary 400 | `var(--color-secondary-400)` |
| <img alt="" src="./assets/color-lm-secondary-500.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-500.svg" width="24px"> | Secondary 500 | `var(--color-secondary-500)` |
| <img alt="" src="./assets/color-lm-secondary-600.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-600.svg" width="24px"> | Secondary 600 | `var(--color-secondary-600)` |
| <img alt="" src="./assets/color-lm-secondary-700.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-700.svg" width="24px"> | Secondary 700 | `var(--color-secondary-700)` |
| <img alt="" src="./assets/color-lm-secondary-800.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-800.svg" width="24px"> | Secondary 800 | `var(--color-secondary-800)` |
| <img alt="" src="./assets/color-lm-secondary-900.svg" width="24px"> | <img alt="" src="./assets/color-dm-secondary-900.svg" width="24px"> | Secondary 900 | `var(--color-secondary-900)` |
|  <img alt="" src="./assets/color-lm-danger-100.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-100.svg" width="24px">   |  Danger 100   |  `var(--color-danger-100)`   |
|  <img alt="" src="./assets/color-lm-danger-200.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-200.svg" width="24px">   |  Danger 200   |  `var(--color-danger-200)`   |
|  <img alt="" src="./assets/color-lm-danger-300.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-300.svg" width="24px">   |  Danger 300   |  `var(--color-danger-300)`   |
|  <img alt="" src="./assets/color-lm-danger-400.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-400.svg" width="24px">   |  Danger 400   |  `var(--color-danger-400)`   |
|  <img alt="" src="./assets/color-lm-danger-500.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-500.svg" width="24px">   |  Danger 500   |  `var(--color-danger-500)`   |
|  <img alt="" src="./assets/color-lm-danger-600.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-600.svg" width="24px">   |  Danger 600   |  `var(--color-danger-600)`   |
|  <img alt="" src="./assets/color-lm-danger-700.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-700.svg" width="24px">   |  Danger 700   |  `var(--color-danger-700)`   |
|  <img alt="" src="./assets/color-lm-danger-800.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-800.svg" width="24px">   |  Danger 800   |  `var(--color-danger-800)`   |
|  <img alt="" src="./assets/color-lm-danger-900.svg" width="24px">   |  <img alt="" src="./assets/color-dm-danger-900.svg" width="24px">   |  Danger 900   |  `var(--color-danger-900)`   |
|  <img alt="" src="./assets/color-lm-warning-100.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-100.svg" width="24px">  |  Warning 100  |  `var(--color-warning-100)`  |
|  <img alt="" src="./assets/color-lm-warning-200.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-200.svg" width="24px">  |  Warning 200  |  `var(--color-warning-200)`  |
|  <img alt="" src="./assets/color-lm-warning-300.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-300.svg" width="24px">  |  Warning 300  |  `var(--color-warning-300)`  |
|  <img alt="" src="./assets/color-lm-warning-400.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-400.svg" width="24px">  |  Warning 400  |  `var(--color-warning-400)`  |
|  <img alt="" src="./assets/color-lm-warning-500.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-500.svg" width="24px">  |  Warning 500  |  `var(--color-warning-500)`  |
|  <img alt="" src="./assets/color-lm-warning-600.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-600.svg" width="24px">  |  Warning 600  |  `var(--color-warning-600)`  |
|  <img alt="" src="./assets/color-lm-warning-700.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-700.svg" width="24px">  |  Warning 700  |  `var(--color-warning-700)`  |
|  <img alt="" src="./assets/color-lm-warning-800.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-800.svg" width="24px">  |  Warning 800  |  `var(--color-warning-800)`  |
|  <img alt="" src="./assets/color-lm-warning-900.svg" width="24px">  |  <img alt="" src="./assets/color-dm-warning-900.svg" width="24px">  |  Warning 900  |  `var(--color-warning-900)`  |
|  <img alt="" src="./assets/color-lm-success-100.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-100.svg" width="24px">  |  Success 100  |  `var(--color-success-100)`  |
|  <img alt="" src="./assets/color-lm-success-200.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-200.svg" width="24px">  |  Success 200  |  `var(--color-success-200)`  |
|  <img alt="" src="./assets/color-lm-success-300.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-300.svg" width="24px">  |  Success 300  |  `var(--color-success-300)`  |
|  <img alt="" src="./assets/color-lm-success-400.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-400.svg" width="24px">  |  Success 400  |  `var(--color-success-400)`  |
|  <img alt="" src="./assets/color-lm-success-500.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-500.svg" width="24px">  |  Success 500  |  `var(--color-success-500)`  |
|  <img alt="" src="./assets/color-lm-success-600.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-600.svg" width="24px">  |  Success 600  |  `var(--color-success-600)`  |
|  <img alt="" src="./assets/color-lm-success-700.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-700.svg" width="24px">  |  Success 700  |  `var(--color-success-700)`  |
|  <img alt="" src="./assets/color-lm-success-800.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-800.svg" width="24px">  |  Success 800  |  `var(--color-success-800)`  |
|  <img alt="" src="./assets/color-lm-success-900.svg" width="24px">  |  <img alt="" src="./assets/color-dm-success-900.svg" width="24px">  |  Success 900  |  `var(--color-success-900)`  |

---

## 🌈 Gradients

Currently, there is one gradient variation, available in 9 shades (100–900) for each mode. Gradients are used for decorative elements and to emphasize visual hierarchy.

### Light Mode Gradients

The table below shows the gradients for the light mode:

|                                Color                                 |    Name     |               JS               |               CSS                |
|:--------------------------------------------------------------------:|:-----------:|:------------------------------:|:--------------------------------:|
| <img alt="" src="./assets/gradient-lm-primary-100.svg" width="24px"> | Primary 100 | `LightModeGradient.primary100` | `var(--lm-gradient-primary-100)` |
| <img alt="" src="./assets/gradient-lm-primary-200.svg" width="24px"> | Primary 200 | `LightModeGradient.primary200` | `var(--lm-gradient-primary-200)` |
| <img alt="" src="./assets/gradient-lm-primary-300.svg" width="24px"> | Primary 300 | `LightModeGradient.primary300` | `var(--lm-gradient-primary-300)` |
| <img alt="" src="./assets/gradient-lm-primary-400.svg" width="24px"> | Primary 400 | `LightModeGradient.primary400` | `var(--lm-gradient-primary-400)` |
| <img alt="" src="./assets/gradient-lm-primary-500.svg" width="24px"> | Primary 500 | `LightModeGradient.primary500` | `var(--lm-gradient-primary-500)` |
| <img alt="" src="./assets/gradient-lm-primary-600.svg" width="24px"> | Primary 600 | `LightModeGradient.primary600` | `var(--lm-gradient-primary-600)` |
| <img alt="" src="./assets/gradient-lm-primary-700.svg" width="24px"> | Primary 700 | `LightModeGradient.primary700` | `var(--lm-gradient-primary-700)` |
| <img alt="" src="./assets/gradient-lm-primary-800.svg" width="24px"> | Primary 800 | `LightModeGradient.primary800` | `var(--lm-gradient-primary-800)` |
| <img alt="" src="./assets/gradient-lm-primary-900.svg" width="24px"> | Primary 900 | `LightModeGradient.primary900` | `var(--lm-gradient-primary-900)` |

### Dark Mode Gradients

The table below shows the gradients for the dark mode:

|                                Color                                 |    Name     |              JS               |               CSS                |
|:--------------------------------------------------------------------:|:-----------:|:-----------------------------:|:--------------------------------:|
| <img alt="" src="./assets/gradient-dm-primary-100.svg" width="24px"> | Primary 100 | `DarkModeGradient.primary100` | `var(--dm-gradient-primary-100)` |
| <img alt="" src="./assets/gradient-dm-primary-200.svg" width="24px"> | Primary 200 | `DarkModeGradient.primary200` | `var(--dm-gradient-primary-200)` |
| <img alt="" src="./assets/gradient-dm-primary-300.svg" width="24px"> | Primary 300 | `DarkModeGradient.primary300` | `var(--dm-gradient-primary-300)` |
| <img alt="" src="./assets/gradient-dm-primary-400.svg" width="24px"> | Primary 400 | `DarkModeGradient.primary400` | `var(--dm-gradient-primary-400)` |
| <img alt="" src="./assets/gradient-dm-primary-500.svg" width="24px"> | Primary 500 | `DarkModeGradient.primary500` | `var(--dm-gradient-primary-500)` |
| <img alt="" src="./assets/gradient-dm-primary-600.svg" width="24px"> | Primary 600 | `DarkModeGradient.primary600` | `var(--dm-gradient-primary-600)` |
| <img alt="" src="./assets/gradient-dm-primary-700.svg" width="24px"> | Primary 700 | `DarkModeGradient.primary700` | `var(--dm-gradient-primary-700)` |
| <img alt="" src="./assets/gradient-dm-primary-800.svg" width="24px"> | Primary 800 | `DarkModeGradient.primary800` | `var(--dm-gradient-primary-800)` |
| <img alt="" src="./assets/gradient-dm-primary-900.svg" width="24px"> | Primary 900 | `DarkModeGradient.primary900` | `var(--dm-gradient-primary-900)` |

### Mode Gradients

The table below shows gradients that adapt to both light and dark modes.

|                              Light Mode                              |                              Dark Mode                               |    Name     |              CSS              |
|:--------------------------------------------------------------------:|:--------------------------------------------------------------------:|:-----------:|:-----------------------------:|
| <img alt="" src="./assets/gradient-lm-primary-100.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-100.svg" width="24px"> | Primary 100 | `var(--gradient-primary-100)` |
| <img alt="" src="./assets/gradient-lm-primary-200.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-200.svg" width="24px"> | Primary 200 | `var(--gradient-primary-200)` |
| <img alt="" src="./assets/gradient-lm-primary-300.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-300.svg" width="24px"> | Primary 300 | `var(--gradient-primary-300)` |
| <img alt="" src="./assets/gradient-lm-primary-400.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-400.svg" width="24px"> | Primary 400 | `var(--gradient-primary-400)` |
| <img alt="" src="./assets/gradient-lm-primary-500.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-500.svg" width="24px"> | Primary 500 | `var(--gradient-primary-500)` |
| <img alt="" src="./assets/gradient-lm-primary-600.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-600.svg" width="24px"> | Primary 600 | `var(--gradient-primary-600)` |
| <img alt="" src="./assets/gradient-lm-primary-700.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-700.svg" width="24px"> | Primary 700 | `var(--gradient-primary-700)` |
| <img alt="" src="./assets/gradient-lm-primary-800.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-800.svg" width="24px"> | Primary 800 | `var(--gradient-primary-800)` |
| <img alt="" src="./assets/gradient-lm-primary-900.svg" width="24px"> | <img alt="" src="./assets/gradient-dm-primary-900.svg" width="24px"> | Primary 900 | `var(--gradient-primary-900)` |

---

## 📐 Sizes

The design tokens package also includes size groups, consisting of both base and semantic values.

- **Base Sizes** — foundational size values (e.g., container width/height)
- **Spacing** — gaps between elements
- **Rounding** — border radius values
- **Border Sizes** — border thickness values

### Base Sizes

Below is a table of all available base sizes:

| Name |  Value  |       JS       |        CSS         |
|:----:|:-------:|:--------------:|:------------------:|
|  1x  |  `4px`  |  `Size['1x']`  |  `var(--size-1x)`  |
|  2x  |  `8px`  |  `Size['2x']`  |  `var(--size-2x)`  |
|  3x  | `12px`  |  `Size['3x']`  |  `var(--size-3x)`  |
|  4x  | `16px`  |  `Size['4x']`  |  `var(--size-4x)`  |
| 4.5x | `18px`  | `Size['4.5x']` | `var(--size-4-5x)` |
|  5x  | `20px`  |  `Size['5x']`  |  `var(--size-5x)`  |
|  6x  | `24px`  |  `Size['6x']`  |  `var(--size-6x)`  |
|  7x  | `28px`  |  `Size['7x']`  |  `var(--size-7x)`  |
|  8x  | `32px`  |  `Size['8x']`  |  `var(--size-8x)`  |
| 10x  | `40px`  | `Size['10x']`  | `var(--size-10x)`  |
| 12x  | `48px`  | `Size['12x']`  | `var(--size-12x)`  |
| 16x  | `64px`  | `Size['16x']`  | `var(--size-16x)`  |
| 24x  | `96px`  | `Size['24x']`  | `var(--size-24x)`  |
| 32x  | `128px` | `Size['32x']`  | `var(--size-32x)`  |

### Spacing Sizes

The table below shows all available spacing sizes.

| Name | Value  |        JS         |          CSS          |
|:----:|:------:|:-----------------:|:---------------------:|
| 0.5x | `2px`  | `Spacing['0.5x']` | `var(--spacing-0-5x)` |
|  1x  | `4px`  |  `Spacing['1x']`  |  `var(--spacing-1x)`  |
|  2x  | `8px`  |  `Spacing['2x']`  |  `var(--spacing-2x)`  |
|  3x  | `12px` |  `Spacing['3x']`  |  `var(--spacing-3x)`  |
|  4x  | `16px` |  `Spacing['4x']`  |  `var(--spacing-4x)`  |
|  5x  | `20px` |  `Spacing['5x']`  |  `var(--spacing-5x)`  |
|  6x  | `24px` |  `Spacing['6x']`  |  `var(--spacing-6x)`  |
|  7x  | `28px` |  `Spacing['7x']`  |  `var(--spacing-7x)`  |
|  8x  | `32px` |  `Spacing['8x']`  |  `var(--spacing-8x)`  |
| 10x  | `40px` | `Spacing['10x']`  | `var(--spacing-10x)`  |
| 12x  | `48px` | `Spacing['12x']`  | `var(--spacing-12x)`  |

### Roundings

Ниже приведена таблица с размерами сгруглений

| Name | Value  |         JS         |          CSS           |
|:----:|:------:|:------------------:|:----------------------:|
|  1x  | `4px`  |  `Rounding['1x']`  |  `var(--rounding-1x)`  |
| 1.5x | `6px`  | `Rounding['1.5x']` | `var(--rounding-1-5x)` |
|  2x  | `8px`  |  `Rounding['2x']`  |  `var(--rounding-2x)`  |
|  4x  | `16px` |  `Rounding['4x']`  |  `var(--rounding-4x)`  |

### Border Sizes

The table below shows all available border thickness values.

|    Name    | Value |           JS           |               CSS               |
|:----------:|:-----:|:----------------------:|:-------------------------------:|
|    Thin    | `1px` |   `BorderSize.thin`    |    `var(--border-size-thin)`    |
|  Regular   | `2px` |  `BorderSize.regular`  |  `var(--border-size-regilar)`   |
|   Medium   | `4px` |  `BorderSize.medium`   |   `var(--border-size-medium)`   |
|    Bold    | `6px` |   `BorderSize.bold`    |    `var(--border-size-bold)`    |
| Extra Bold | `8px` | `BorderSize.extraBold` | `var(--border-size-extra-bold)` |

---

## ✍️ Typography

The typography system includes styles for various levels of headings, body text, and code blocks.

Available groups:

- Headings — 5 levels with different weight variations
- Body text — multiple sizes and weights
- Monospaced style — for displaying code

⚠️ Note: Font files are not included in this package. You are responsible for importing fonts manually in your project, for example via Google Fonts.

### Root Font Size Requirement

Font sizes in this package use `rem` units scaled to a **10px base**: `1rem = 10px`. This means your project **must** set the following in its global CSS:

```css
:root {
  font-size: 62.5%; /* 1rem = 10px (62.5% of the browser default 16px) */
}
```

Without this, all `rem`-based typography values will render at incorrect sizes. For example, `1.6rem` is intended to render as `16px`, but without the root override it would compute to `25.6px` (1.6 × 16px).

> **Why 62.5%?** Most browsers default to `font-size: 16px`. Setting `62.5%` brings it down to `10px`, which makes rem arithmetic straightforward: `1.6rem → 16px`, `1.2rem → 12px`, `3.2rem → 32px`, etc.

### Font Families

Font stacks are exposed as separate CSS variables, which allows consumers to override them independently of the individual typography tokens:

| Variant     | CSS Variable                    | Font Stack                                                                       |
|:------------|:--------------------------------|:---------------------------------------------------------------------------------|
| `primary`   | `var(--font-variant-primary)`   | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`     |
| `monospace` | `var(--font-variant-monospace)` | `"Roboto Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace` |

Font size values use `rem` units. Line height values are unitless ratios.

### Typography Styles

Below is a table of all available typography styles:

| Name                        | Font Variant | Font Size | Font Weight | Line Height |                  JS                  |                     CSS                      |
|:----------------------------|:------------:|:---------:|:-----------:|:-----------:|:------------------------------------:|:--------------------------------------------:|
| H1 / medium                 |  `primary`   | `3.2rem`  |    `500`    |   `1.25`    |        `Typography.H1.medium`        |        `var(--typography-h1-medium)`         |
| H2 / medium                 |  `primary`   | `2.4rem`  |    `500`    |   `1.25`    |        `Typography.H2.medium`        |        `var(--typography-h2-medium)`         |
| H3 / regular                |  `primary`   |  `2rem`   |    `400`    |    `1.2`    |       `Typography.H3.regular`        |        `var(--typography-h3-regular)`        |
| H3 / medium                 |  `primary`   |  `2rem`   |    `500`    |    `1.2`    |        `Typography.H3.medium`        |        `var(--typography-h3-medium)`         |
| H4 / regular                |  `primary`   | `1.8rem`  |    `400`    |  `1.33333`  |       `Typography.H4.regular`        |        `var(--typography-h4-regular)`        |
| H4 / medium                 |  `primary`   | `1.8rem`  |    `500`    |  `1.33333`  |        `Typography.H4.medium`        |        `var(--typography-h4-medium)`         |
| H5 / regular                |  `primary`   | `1.6rem`  |    `400`    |    `1.5`    |       `Typography.H5.regular`        |        `var(--typography-h5-regular)`        |
| H5 / medium                 |  `primary`   | `1.6rem`  |    `500`    |    `1.5`    |        `Typography.H5.medium`        |        `var(--typography-h5-medium)`         |
| H5 / bold                   |  `primary`   | `1.6rem`  |    `700`    |    `1.5`    |         `Typography.H5.bold`         |         `var(--typography-h5-bold)`          |
| Body / extraSmall / regular |  `primary`   | `1.2rem`  |    `400`    |    `1.5`    | `Typography.Body.extraSmall.regular` | `var(--typography-body-extra-small-regular)` |
| Body / extraSmall / medium  |  `primary`   | `1.2rem`  |    `500`    |    `1.5`    | `Typography.Body.extraSmall.medium`  | `var(--typography-body-extra-small-medium)`  |
| Body / small / regular      |  `primary`   | `1.4rem`  |    `400`    |  `1.28571`  |   `Typography.Body.small.regular`    |    `var(--typography-body-small-regular)`    |
| Body / small / medium       |  `primary`   | `1.4rem`  |    `500`    |  `1.28571`  |    `Typography.Body.small.medium`    |    `var(--typography-body-small-medium)`     |
| Body / small / bold         |  `primary`   | `1.4rem`  |    `700`    |  `1.28571`  |     `Typography.Body.small.bold`     |     `var(--typography-body-small-bold)`      |
| Body / medium / regular     |  `primary`   | `1.6rem`  |    `400`    |    `1.5`    |   `Typography.Body.medium.regular`   |   `var(--typography-body-medium-regular)`    |
| Body / medium / medium      |  `primary`   | `1.6rem`  |    `500`    |    `1.5`    |   `Typography.Body.medium.medium`    |    `var(--typography-body-medium-medium)`    |
| Body / medium / bold        |  `primary`   | `1.6rem`  |    `700`    |    `1.5`    |    `Typography.Body.medium.bold`     |     `var(--typography-body-medium-bold)`     |
| Code / regular              | `monospace`  | `1.4rem`  |    `400`    |  `1.42857`  |      `Typography.Code.regular`       |       `var(--typography-code-regular)`       |

---

## 🎛️ Mode Switching

To enable automatic mode-based styling, make sure to include the generated CSS tokens file:

```ts
import '@webeach-io/design/tokens.css';
```

The current mode is controlled via the `data-ui-mode` attribute on the any HTML element. You should define a default value:

```html
<html data-ui-mode="light">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

```html
<div data-ui-mode="dark">...</div>
```

You can also manually retrieve mode color and gradient maps in JavaScript:

```ts
import { getModeColor, getModeGradient } from '@wrs/design';

const Color = getModeColor('light');
const Gradient = getModeGradient('light');

console.log(Color.primary600); // "hsl(301 53% 55%)"
console.log(Gradient.primary600); // ["hsl(201 84% 55%)", "hsl(301 53% 55%)"]
```

---

## 💡 Examples

### Colors

```css
.button {
  background-color: var(--color-primary-500);
  color: var(--color-neutral-100);
}
```

### Gradients

```css
.button {
  background-image: var(--gradient-primary-600);
}
```

### Sizes

```css
.box {
  block-size: var(--size-10x);
  inline-size: var(--size-12x);

  padding-block: var(--size-2x);
  padding-inline: var(--size-3x);
}
```

```css
.box {
  display: flex;
  gap: var(--spacing-1x);
}
```

```css
.button {
  background-color: var(--color-neutral-100);
  border-color: var(--color-secondary-600);
  color: var(--color-neutral-900);

  border-style: solid;
  border-width: var(--border-size-regular);
  border-radius: var(--rounding-2x);
}
```

### Typography

```css
.heading-1 {
  font: var(--typography-h1-medium);
}

.paragraph {
  font: var(--typography-body-medium-regular);
}

.small-text {
  font: var(--typography-body-small-regular);
}

.code {
  font: var(--typography-code-regular);
}
```

---

## 🧩 TypeScript Types

This package also provides full TypeScript typings for all design token objects.

```ts
import type {
  BorderSizeKey,
  BorderSizeType,
  BorderSizeValue,
  ColorKey,
  GradientKey,
  ModeKey,
  RoundingKey,
  RoundingType,
  RoundingValue,
  SizeKey,
  SizeType,
  SizeValue,
  SpacingKey,
  SpacingType,
  SpacingValue,
  TypographyType,
} from '@webeach-io/design';
```

You can also access the font family map at runtime (for example, to override font stacks):

```ts
import { TypographyFontFamilyMap } from '@webeach-io/design';

console.log(TypographyFontFamilyMap.primary);
// '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
```

These types help you maintain type safety when working with token keys or token maps in your own components, utilities, or design tooling.

---

## ⚙️ Development

### Build the library

Compiles the codebase and generates the production-ready output in the `dist` directory.

```sh
yarn run build
```

### Watch mode

Watches for file changes and rebuilds automatically.

```sh
yarn run build:watch
```

### Generate assets

Generates color and gradient preview images for use in the `README.md`.

```sh
yarn run generate:assets
```

⚠️ Note: you need to run this manually whenever you update the color or gradient token sets.

---

## ✅ Design Token Requirements

All tokens are validated during the build process. Below are the basic format requirements:

- **Key names** (`key`) must be in `camelCase` format
  - Example: `primary100`, `secondary900`, `extraRelaxed`
- **Colors** must use the `HSL` format
  - Example: `hsl(301 53% 55%)`
  - `hex`, `rgb`, `rgba`, and other formats are **not allowed**
- **Sizes** (e.g., `Size`, `Spacing`, `Rounding`, `BorderSize`) must be in `px` units
  - Example: `16px`, `24px`
  - `em`, `rem`, `%`, `auto`, `inherit`, and other units are **not allowed**
- **Font sizes** (`FontSize`) must be in `rem` units
  - Example: `1.2rem`, `1.6rem`
  - `px`, `em`, `%`, and other units are **not allowed**
- **Line heights** (`LineHeight`) must be unitless numeric ratios
  - Example: `1.2`, `1.5`
  - String values with units are **not allowed**
- **Font family** (`fontFamily` in `Typography`) must be a variant key (`"primary"` or `"monospace"`) — not a raw font stack string
- **All values** must be explicitly defined — empty strings are **not allowed**

If any token does not meet these requirements, the build will fail with a console error.

---

## 🔖 Releasing a New Version

Releases are handled automatically using `semantic-release`.

Before publishing a new version, make sure to:

1. Commit and push all changes to the `main` branch.
2. Use commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format:
   - `feat: ...` — for new features
   - `fix: ...` — for bug fixes
   - `chore: ...`, `refactor: ...`, etc.
3. Versioning is determined automatically based on the type of commits (`patch`, `minor`, `major`).
4. Update the `README.md`:

- All tables should be updated if any tokens related to colors, sizes, or typography were changed.
- If color or gradient tokens were changed, also run `yarn run generate:assets` to regenerate the color preview images.

---

## 👨‍💻 Author

Developed and maintained by [Ruslan Martynov](https://github.com/ruslan-mart)

If you have any suggestions or find a bug, feel free to open an issue or pull request.

---

## 📄 License

This package is licensed under the [MIT License](./LICENSE).
