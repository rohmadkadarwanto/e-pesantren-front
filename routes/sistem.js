const express = require('express');
const router = express.Router();

router.get('/data-client', (req, res) => {
  res.render('pages/sistem/data-client');
});

router.get('/pengguna/permission', (req, res) => {
  res.render('pages/sistem/pengguna/permission');
});

router.get('/pengaturan/data-pengguna', (req, res) => {
  res.render('pages/sistem/pengaturan/data-pengguna');
});

router.get('/pengaturan/mata-pelajaran', (req, res) => {
  res.render('pages/sistem/pengaturan/mata-pelajaran');
});

module.exports = router;
