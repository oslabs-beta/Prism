const fs = require('fs/promises');
const fsCallback = require('fs');
const path = require('path');

module.exports = metricsController = {
    //testButton method
    testButton: (req, res, next) => {
        console.log('test button routed through metrics controller')
        next();
    },


};
