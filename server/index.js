const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');
// const listTemplate = require('./list');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// POST - PDF generation and fetching of the data

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if(err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});


// app.use('/create-list', listTemplate);
// router.post('/create-list', (req, res) => {
//   list.create(list(req.body), {});
// });


// GET - Send the generated PDF to the client

app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
  // res.json({message:'Success!!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
