const mysql = require('mysql');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lizard4093",
    database: "digital_menu_bureff",
    post: "3306"
});

connection.connect((err) => {
    if (err) {
        throw err;
        console.log(err);
    } else {
        console.log('Connected');
    }
})

const port = process.env.PORT || 3000;
app.listen(port);

console.log('Server on port 3000');

/*pool.query(`SELECT * FROM user`, (err, res, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(res);
});*/