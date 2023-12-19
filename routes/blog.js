const express = require('express');
const router = express.Router();

router.get('/buat-berita', (req, res) => {
  res.render('pages/blog/buat-berita');
});

router.get('/semua-berita', (req, res) => {
  res.render('pages/blog/semua-berita');
});

module.exports = router;
