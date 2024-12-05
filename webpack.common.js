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
      template: './src/recipes/cherry-pies.html',
      filename: './recipes/cherry-pies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes/apple-pies.html',
      filename: './recipes/apple-pies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes/shangi-s-kartoshkoy-i-syrom.html',
      filename: './recipes/shangi-s-kartoshkoy-i-syrom.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/collections/classic-pies.html',
      filename: './collections/classic-pies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/collections/pies-for-children.html',
      filename: './collections/pies-for-children.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/collections/regional-recipes-for-pies.html',
      filename: './collections/regional-recipes-for-pies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/collections/pies-for-special-occasions.html',
      filename: './collections/pies-for-special-occasions.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/pochemu-v-karelii-yedyat-kalitki.html',
      filename: './articles/pochemu-v-karelii-yedyat-kalitki.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/secrets-of-the-perfect-pie-dough.html',
      filename: './articles/secrets-of-the-perfect-pie-dough.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/secrets-of-the-perfect-pie-dough.html',
      filename: './articles/secrets-of-the-perfect-pie-dough.html'
    }),

    new HtmlWebpackPlugin({
      template:
        './src/articles/pies-in-the-oven-or-deep-fried-choosing-the-best-cooking-method.html',
      filename:
        './articles/pies-in-the-oven-or-deep-fried-choosing-the-best-cooking-method.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/quizzes/what-do-you-know-about-pies.html',
      filename: './quizzes/what-do-you-know-about-pies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/recipes.html',
      filename: './recipes.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/collections.html',
      filename: './collections.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/quizzes.html',
      filename: './quizzes.html'
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
