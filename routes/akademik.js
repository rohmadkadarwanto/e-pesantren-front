const express = require('express');
const router = express.Router();

router.get('/santri', (req, res) => {
  res.render('pages/akademik/data-santri');
});

router.get('/asatid', (req, res) => {
  res.render('pages/akademik/data-asatid');
});

router.get('/mata-pelajaran', (req, res) => {
  res.render('pages/akademik/mata-pelajaran');
});

router.get('/kelas', (req, res) => {
  res.render('pages/akademik/data-kelas');
});

router.get('/lembaga', (req, res) => {
  res.render('pages/akademik/lembaga');
});

router.get('/laporan-santri', (req, res) => {
  res.render('pages/akademik/laporan-santri');
});

router.get('/nilai-santri', (req, res) => {
  res.render('pages/akademik/nilai-santri');
});

router.get('/raport-digital', (req, res) => {
  res.render('pages/akademik/raport-digital');
});

module.exports = router;
