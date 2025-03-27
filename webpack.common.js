const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes.html',
      filename: './recipes.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/quizzes.html',
      filename: './quizzes.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/500.html',
      filename: './500.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/505.html',
      filename: './505.html'
    }),

    // Recipes

    new HtmlWebpackPlugin({
      template: './src/recipes/kalitki-s-kartofelem.html',
      filename: './recipes/kalitki-s-kartofelem.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes/pirozhki-s-myasom-i-lukom.html',
      filename: './recipes/pirozhki-s-myasom-i-lukom.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes/kulebyaka-s-kapustoy.html',
      filename: './recipes/kulebyaka-s-kapustoy.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes/rzhanie-lepeshki-na-skovorode.html',
      filename: './recipes/rzhanie-lepeshki-na-skovorode.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pirog-s-brusnikoy.html',
      filename: './recipes/pirog-s-brusnikoy.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/vatrushki-s-tvorogom.html',
      filename: './recipes/vatrushki-s-tvorogom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/shangi-s-kartofelem.html',
      filename: './recipes/shangi-s-kartofelem.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/kulebyaka-s-ryboy-i-risom.html',
      filename: './recipes/kulebyaka-s-ryboy-i-risom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/sladkie-pirozhki-s-morkovyu-i-izyumom.html',
      filename: './recipes/sladkie-pirozhki-s-morkovyu-i-izyumom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/chak-chak-domashniy.html',
      filename: './recipes/chak-chak-domashniy.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/postnye-lepeshki-na-kartofelnom-otvare.html',
      filename: './recipes/postnye-lepeshki-na-kartofelnom-otvare.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/belyashi-s-myasom-po-chuvashski.html',
      filename: './recipes/belyashi-s-myasom-po-chuvashski.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/khachapuri-po-imeretinski.html',
      filename: './recipes/khachapuri-po-imeretinski.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/chechenskie-hingaly-s-myasom.html',
      filename: './recipes/chechenskie-hingaly-s-myasom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/gata-armyanskaya.html',
      filename: './recipes/gata-armyanskaya.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/lepeshki-na-matsoni-s-zelenyu.html',
      filename: './recipes/lepeshki-na-matsoni-s-zelenyu.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/zyryanskiye-pirozhki-s-repoy.html',
      filename: './recipes/zyryanskiye-pirozhki-s-repoy.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/tonkie-rzhanie-lepeshki-shangi.html',
      filename: './recipes/tonkie-rzhanie-lepeshki-shangi.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pirog-s-pshenkoy-i-tvorogom.html',
      filename: './recipes/pirog-s-pshenkoy-i-tvorogom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/medovye-shangi-s-klyukvoy.html',
      filename: './recipes/medovye-shangi-s-klyukvoy.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pachat.html',
      filename: './recipes/pachat.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pshennyy-pirog-s-tykvoy.html',
      filename: './recipes/pshennyy-pirog-s-tykvoy.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/shanezhki-s-tvorogom.html',
      filename: './recipes/shanezhki-s-tvorogom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/kapustnyy-pirog-na-chugunke.html',
      filename: './recipes/kapustnyy-pirog-na-chugunke.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/rasstegai-s-ryboy.html',
      filename: './recipes/rasstegai-s-ryboy.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/peremyachi-s-myasom.html',
      filename: './recipes/peremyachi-s-myasom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pirog-s-kapustoy-i-gribami.html',
      filename: './recipes/pirog-s-kapustoy-i-gribami.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/sladkie-vatrushki-s-varenyem.html',
      filename: './recipes/sladkie-vatrushki-s-varenyem.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/kulochki-s-povidlom.html',
      filename: './recipes/kulochki-s-povidlom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pirog-s-lukom-i-yaytsom.html',
      filename: './recipes/pirog-s-lukom-i-yaytsom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/sloyenye-yazychki-s-saharom.html',
      filename: './recipes/sloyenye-yazychki-s-saharom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/plyushki-moskovskie.html',
      filename: './recipes/plyushki-moskovskie.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pirozhki-s-gorbushey-i-risom.html',
      filename: './recipes/pirozhki-s-gorbushey-i-risom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/belyashi-s-morskoy-kapustoy-i-yaytsom.html',
      filename: './recipes/belyashi-s-morskoy-kapustoy-i-yaytsom.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/presnye-lepeshki-s-lukom-i-solyu.html',
      filename: './recipes/presnye-lepeshki-s-lukom-i-solyu.html'
    }),
    
    new HtmlWebpackPlugin({
      template: './src/recipes/pirog-s-cheremuhoy-i-smetannoy-zalivkoy.html',
      filename: './recipes/pirog-s-cheremuhoy-i-smetannoy-zalivkoy.html'
    }),

    // Article
    new HtmlWebpackPlugin({
      template: './src/articles/babushka-pirog-s-lukom-i-subbotnee-molchanie.html',
      filename: './articles/babushka-pirog-s-lukom-i-subbotnee-molchanie.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/chto-delat-esli-pirog-ne-propyoksya-no-sverhu-uzhe-rumyanyj.html',
      filename: './articles/chto-delat-esli-pirog-ne-propyoksya-no-sverhu-uzhe-rumyanyj.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/chto-pekli-na-svadbu-kalitki-karavaj-i-shanezhki.html',
      filename: './articles/chto-pekli-na-svadbu-kalitki-karavaj-i-shanezhki.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/domashnyaya-skatyortka-pletyonaya-korzina-derevyannaya-doska-kak-sobrat-tepluyu-podachu.html',
      filename: './articles/domashnyaya-skatyortka-pletyonaya-korzina-derevyannaya-doska-kak-sobrat-tepluyu-podachu.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/kak-mama-uchila-menya-lepit-kulebyaku-i-chto-iz-etogo-vyshlo.html',
      filename: './articles/kak-mama-uchila-menya-lepit-kulebyaku-i-chto-iz-etogo-vyshlo.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/kak-maslenica-prevratilas-v-bliny-tradicii-i-simvoly.html',
      filename: './articles/kak-maslenica-prevratilas-v-bliny-tradicii-i-simvoly.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/kak-pahnet-testo-aromaty-kotorye-delayut-dom-uyutnym.html',
      filename: './articles/kak-pahnet-testo-aromaty-kotorye-delayut-dom-uyutnym.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/kak-zamenit-dorogie-ingredienty-i-ne-isportit-vkus.html',
      filename: './articles/kak-zamenit-dorogie-ingredienty-i-ne-isportit-vkus.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/kak-zamesti-testo-chtoby-ono-ne-lipko-ne-rvalos-i-ne-zlilo.html',
      filename: './articles/kak-zamesti-testo-chtoby-ono-ne-lipko-ne-rvalos-i-ne-zlilo.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/kogda_ya_vpervye_poprobovala_kalitki_i_uznala_chto_eto_voobshche.html',
      filename: './articles/kogda_ya_vpervye_poprobovala_kalitki_i_uznala_chto_eto_voobshche.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/pirog-na-pominki-zachem-v-rossii-pekli-lestnicu-iz-testa.html',
      filename: './articles/pirog-na-pominki-zachem-v-rossii-pekli-lestnicu-iz-testa.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/posuda_kak_iz_babushkogo_shkafa_iz_chego_podat_vypechku_krasivo.html',
      filename: './articles/posuda_kak_iz_babushkogo_shkafa_iz_chego_podat_vypechku_krasivo.html'
    })

    // Quizzes
    // new HtmlWebpackPlugin({
    //   template: './src/quizzes/superorganisms/S_Popup.html',
    //   filename: './quizzes/S_Popup.html'
    // }),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
