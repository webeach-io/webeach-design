import { makeCssVariablesBody } from './makeCssVariablesBody';

import fs from 'node:fs';

type VariableMap = Record<string, string | number>;

interface VariableSection {
  /** Optional selector to scope the CSS variables (e.g., `[data-ui-mode="dark"]`). */
  selector?: string;
  /** Key-value pairs representing CSS variables in kebab-case. */
  variables: VariableMap;
}

/**
 * Generates a CSS file with CSS variable definitions.
 *
 * @param {string} filePath - The path where the CSS file will be saved.
 * @param {ReadonlyArray<VariableSection>} variableSections - An array of sections containing CSS variables.
 * @returns {Promise<void>} A promise that resolves when the file is successfully written.
 *
 * @example
 * await makeCssVariablesFile("styles.css", [
 *   {
 *     selector: "[data-ui-mode='dark']",
 *     variables: { "primary-color": "#000", "secondary-color": "#333" },
 *   },
 *   {
 *     selector: "[data-ui-mode='light']",
 *     variables: { "primary-color": "#fff", "secondary-color": "#ccc" },
 *   },
 * ]);
 */
export async function makeCssVariablesFile(
  filePath: string,
  variableSections: ReadonlyArray<VariableSection>,
): Promise<void> {
  const cssBody = variableSections
    .map((section) => {
      return makeCssVariablesBody(section.variables, section.selector);
    })
    .join('\n\n');

  await fs.promises.writeFile(filePath, cssBody + '\n', {
    encoding: 'utf8',
  });
}
