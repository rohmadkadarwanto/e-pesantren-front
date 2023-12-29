const express = require('express');
const router = express.Router();

router.get('/nasabah', (req, res) => {
  res.render('pages/transaksi/nasabah');
});

router.get('/akun', (req, res) => {
  res.render('pages/transaksi/akun');
});

router.get('/transaksi', (req, res) => {
  res.render('pages/transaksi/transaksi');
});

module.exports = router;
