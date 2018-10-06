const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.get('/', (req, res) => {
  res.send("Hi")
});


app.post('/upload-image',upload.single('file'), (req, res) => {
  console.log(req);
  // var file = 'uploads' + '/' + req.file.originalname;
  // fs.rename(req.file.path, file, function(err) {
  //   if (err) {
  //     res.send(500);
  //   } else {
  //     res.json({
  //       message: 'File uploaded successfully',
  //       filename: req.originalname
  //     });
  //   }
  // });
  res.send("Hi");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on " + (process.env.PORT ? process.env.PORT : '5000'));
});
