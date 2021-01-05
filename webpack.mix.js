// const mix = require('laravel-mix');
// const tailwindcss = require('tailwindcss');
// let build = require('./tasks/build.js');

// require('laravel-mix-jigsaw');

// mix.disableSuccessNotifications();
// mix.setPublicPath('source/assets/build');
// mix.webpackConfig({
//   plugins: [
//       build.jigsaw,
//       build.browserSync(),
//       build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*']),
//   ]
// });

// mix
//   .js('source/_assets/js/main.js', 'js')
//   .sass('source/_assets/sass/main.scss', 'css')
//   .options({
//     processCssUrls: false,
//     postCss: [ tailwindcss('./tailwind.config.js') ],
//   })
//   .version();

const mix = require('laravel-mix');
require('laravel-mix-jigsaw');
const tailwindcss = require('tailwindcss')

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');

mix.jigsaw()
   .js('source/_assets/js/main.js', 'js')
   .options({
       processCssUrls: false,
       postCss: [
           tailwindcss('tailwind.config.js'),
       ]
   })
   .sass('source/_assets/sass/main.scss', 'css')
   .version();
