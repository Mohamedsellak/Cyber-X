module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: {
          entry: './src/main.js',
          module: {
            rules: [
              {
                test: /native_modules\/.+\.node$/,
                use: 'node-loader',
              },
              {
                test: /\.(m?js|node)$/,
                parser: { amd: false },
                use: {
                  loader: '@vercel/webpack-asset-relocator-loader',
                  options: {
                    outputAssetBase: 'native_modules',
                  },
                },
              },
            ],
          },
          externals: {
            systeminformation: 'commonjs systeminformation'
          }
        },
        renderer: {
          config: {
            entry: './src/renderer.js',
            resolve: {
              extensions: ['.js', '.jsx', '.json']
            },
            module: {
              rules: [
                {
                  test: /\.jsx?$/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-react']
                    }
                  },
                  exclude: /node_modules/
                },
                {
                  test: /\.css$/,
                  use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
              ],
            },
            target: 'web'
          },
          entryPoints: [
            {
              html: './src/index.html',
              js: './src/renderer.js',
              name: 'main_window',
              preload: {
                js: './src/preload.js',
                config: {
                  target: 'electron-preload',
                  externals: ['os', 'electron']
                }
              }
            }
          ]
        }
      }
    }
  ]
};
