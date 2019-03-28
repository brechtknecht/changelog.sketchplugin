var sketch = require('sketch');

module.exports = {
    // Returns the Artboard Instance with a specific name as a promise
    getArtboardByName: function (name) {
        return new Promise((resolve, reject) => {
            const document = sketch.fromNative(context.document)

            // Iterate over all Pages
            document.pages.forEach(page => {
                // Iterate over each text layer in the selection
                page.layers.forEach(layer => {
                    // Finds all Artboards
                    if (layer.type === String(sketch.Types.Artboard)) {
                        if (layer.name == name) {
                            // console.log('🧐Found Artboard', layer);
                            resolve(layer);
                        }
                    }
                })
            });
            reject('No Artboard found with the search query.')
        });
    },

    //find a layer from a specific artboard as a promise
    getLayerFromArtboardByName: function (layerName, artboardName) {
        return new Promise((resolve, reject) => {
            const document = sketch.fromNative(context.document);
            let result = module.exports.getArtboardByName(artboardName);
            result.then(result => {
                result.layers.forEach((layer) => {
                    if (layer.name == layerName) {
                        resolve(layer);
                    }
                });
                reject('No Layer found in Artboard: ' + artboardName + ' with the LayerID: ' + layerName);
            });
        });
    },

    // returns the current date
    getCurrentDate: function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    },

    // returns the current time
    currentTime: function () {
        var d = new Date()
        var h = d.getHours();
        var m = d.getMinutes();
        if (h <= 9) {
            h = '0' + h
        };
        if (m <= 9) {
            m = '0' + m
        };

        time = h + ':' + m;
        return time;
    }

}