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
    })

    // Article
    // new HtmlWebpackPlugin({
    //   template: './src/articles/superorganisms/S_Popup.html',
    //   filename: './superorganisms/S_Popup.html'
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
