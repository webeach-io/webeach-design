import { makeCssVariablesBody } from '../makeCssVariablesBody';

describe('makeCssVariablesBody', () => {
  test('should generate CSS variables for :root (default selector)', () => {
    const variables = {
      'primary-color': '#ff0000',
      'spacing-1x': '4px',
      'font-size': '16px',
    };

    const result = makeCssVariablesBody(variables);
    expect(result).toBe(
      ':root {\n  --primary-color: #ff0000;\n  --spacing-1x: 4px;\n  --font-size: 16px;\n}',
    );
  });

  test('should generate CSS variables with custom selector (data-ui-mode)', () => {
    const variables = {
      'primary-color': '#0000ff',
      'border-radius': '8px',
    };

    const result = makeCssVariablesBody(variables, '[data-ui-mode="dark"]');
    expect(result).toBe(
      '[data-ui-mode="dark"] {\n  --primary-color: #0000ff;\n  --border-radius: 8px;\n}',
    );
  });

  test('should handle empty variable map', () => {
    const result = makeCssVariablesBody({});
    expect(result).toBe(':root {\n\n}');
  });

  test('should handle numeric values correctly', () => {
    const variables = {
      opacity: 0.8,
      'z-index': 10,
    };

    const result = makeCssVariablesBody(variables);
    expect(result).toBe(':root {\n  --opacity: 0.8;\n  --z-index: 10;\n}');
  });

  test('should handle special characters in keys correctly', () => {
    const variables = {
      'text-color_primary': '#333',
      'text-color-secondary': '#666',
    };

    const result = makeCssVariablesBody(variables);
    expect(result).toBe(
      ':root {\n  --text-color_primary: #333;\n  --text-color-secondary: #666;\n}',
    );
  });
});
