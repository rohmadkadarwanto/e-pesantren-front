const express = require('express');
const router = express.Router();

router.get('/account', (req, res) => {
  res.render('pages/keuangan/chart-of-account');
});

router.get('/account/account-utama', (req, res) => {
  res.render('pages/keuangan/account-utama');
});

router.get('/account/sub-account', (req, res) => {
  res.render('pages/keuangan/sub-account');
});

router.get('/transaksi', (req, res) => {
  res.render('pages/keuangan/transaksi');
});

router.get('/laporan-neraca', (req, res) => {
  res.render('pages/keuangan/laporan-neraca');
});

router.get('/laporan-laba-rugi', (req, res) => {
  res.render('pages/keuangan/laporan-laba-rugi');
});

router.get('/laporan-perubahan-modal', (req, res) => {
  res.render('pages/keuangan/laporan-perubahan-modal');
});

router.get('/laporan-arus-kas', (req, res) => {
  res.render('pages/keuangan/laporan-arus-kas');
});

module.exports = router;
