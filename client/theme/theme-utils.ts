import ThemeConfig from './theme-config'

namespace ThemeUtils {
  type LineStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'

  /**
   * Get a border style CSS property string from a color scheme of the current theme.
   * @param theme primary or secondary color scheme for the border color.
   * @param width CSS line-width attribute.
   * @param style CSS line-style attribute.
   * @returns {string} formatted CSS border property.
   */
  export function border(theme: ThemeConfig.ColorScheme, width: number, style: LineStyle): string {
    return `${width}px ${style} ${theme.background}`
  }
}

export default ThemeUtils
