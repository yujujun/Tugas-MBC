const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files in current directory (for index.html & style.css)
app.use(express.static(path.join(__dirname)));

// Handle POST from contact form
app.post('/kirim-pesan', (req, res) => {
  const { nama, email, pesan } = req.body;

  console.log('Pesan diterima:');
  console.log(`Nama: ${nama}`);
  console.log(`Email: ${email}`);
  console.log(`Pesan: ${pesan}`);

  res.send('Pesan berhasil dikirim!');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
