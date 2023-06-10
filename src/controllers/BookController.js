const multiparty = require('multiparty');
const fs = require('fs');


function option(req, res) {
    req.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM book', (error, books) => {
            if (error) {
                res.json(err);
            }
            console.log(books)
            books.forEach((book) => {
                var bufferBase64 = new Buffer(book.portada, 'binary').toString('base64')
                book.portada = bufferBase64;
            })
            res.render('libros/option', { books })
        })
    })
}

function create(req, res) {
    console.log("create");
    res.render('libros/create');
}

function store(req, res) {
    var form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
        console.log(fields, files);

        fs.open(files.portada[0].path, 'r', function (err, f) {
            var stats = fs.statSync(files.portada[0].path);

            var buffer = Buffer.alloc(stats.size);

            fs.read(f, buffer, 0, buffer.length, 0, function (err, num) {



                console.log('f is', f);
                console.log('path is', files.portada[0].path);
                const data = {
                    titulo: fields.titulo[0],
                    autor: fields.autor[0],
                    year: fields.year[0],
                    reseña: fields.reseña[0],
                    portada: buffer,
                };
                console.log(data);
                req.getConnection((error, conexion) => {
                    console.log(data);
                    conexion.query('INSERT INTO book SET ?', [data], (error, renglones) => {
                        console.log(renglones);
                        if (!!error) console.error(error);
                        res.redirect('/libros');
                    })
                    if (!!error) console.error(error);
                })
            })
        })
    })



}

module.exports = {
    option: option,
    create: create,
    store: store
}