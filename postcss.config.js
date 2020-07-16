const less = require('less');


module.exports = {
    plugins: {
        "postcss-preset-env":{
            stage: 0,
            autoprefixer:true,
            "features": {
                "custom-properties": {
                  "importFrom": [
                    {
                      "customProperties": {
                        "--color": "#FF5050",
                        "--color-active": "#ff3636"
                      }
                    }
                  ]
                }
            }
        },
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 10,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 750

        }
    }
};
