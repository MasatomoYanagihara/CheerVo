const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

// Vue-quizの設定
// mix.browserSync({
//     files: ["public/**/*.*"],
//     proxy: "http://localhost:8000"
// });

mix.browserSync("vuevoice.test")
    // .js("コンパイル対象のファイル","コンパイル結果の配置先")
    .js("resources/js/app.js", "public/js")
    // バージョニングを有効にする（ブラウザがキャッシュを読み込まなようにしている）
    .version();
