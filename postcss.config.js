const purgecss = require('@fullhuman/postcss-purgecss')

const productionPlugins = process.env.NODE_ENV === 'production'
  ? [
    purgecss({
      content: ['./index.html', './src/**/*.js'],
      whitelistPatterns: [/DayPicker/],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
  : []

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...productionPlugins
  ]
}
