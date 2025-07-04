const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.post('/kirim-pesan', (req, res) => {
  const { nama, email, pesan } = req.body;

  console.log('Pesan diterima:');
  console.log(`Nama: ${nama}`);
  console.log(`Email: ${email}`);
  console.log(`Pesan: ${pesan}`);

  res.send('Pesan berhasil dikirim!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
