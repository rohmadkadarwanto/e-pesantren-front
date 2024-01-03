const express = require('express');
const router = express.Router();

router.get('/pembukaan-produk', (req, res) => {
  res.render('pages/customer_service/produk');
});

router.get('/nasabah', (req, res) => {
  res.render('pages/nasabah/nasabah');
});


module.exports = router;
