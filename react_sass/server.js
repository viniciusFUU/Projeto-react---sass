const express = require('express')
const { resolve } = require('path')

const app = express()

app.use('/', express.static(
    resolve(
        __dirname,
        './dist'
        )
    )
)

app.listen(process.env.PORT || 300, (err) => {
    if (err) {
         return console.log(err);
        } else {
            return console.log('Tudo funcionando certo.');
        }
})