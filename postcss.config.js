import postcssImport from 'postcss-import'
import tailwindcssNesting from 'tailwindcss/nesting'

export default {
  plugins: [
    postcssImport(),
    tailwindcssNesting(),
    tailwindcss(),
    autoprefixer()
  ]
}
