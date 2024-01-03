const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/dashboard');
  //res.render('pages/transaksi/nasabah');
});

module.exports = router;
