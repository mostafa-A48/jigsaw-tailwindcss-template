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
