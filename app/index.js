const express = require('express');
const app = express();


/** ********* */
/*  SWAGGER */
/** ******** */
const expressJSDocSwagger = require("express-jsdoc-swagger");

const options = {
    info: {
        version: "1.0.0",
        title: "API Cadex",
        license: {
            name: "MIT",
        },
    },
    security: {
        BasicAuth: {
            type: "http",
            scheme: "basic",
        },
    },
    swaggerUIPath: "/tata&toto", // url où se trouve la doc
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: "./**/*.js",
};

expressJSDocSwagger(app)(options);

/** ********* */
/*  EXPRESS */
/** ******** */

app.use(express.static('public'));

const {getRouter,postRouter} = require("./router");
app.use(getRouter);

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(postRouter);

module.exports = app;