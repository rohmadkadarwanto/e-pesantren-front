const express = require('express');
const router = express.Router();

router.get('/transaksi', (req, res) => {
  res.render('pages/teller/transaksi');
});



module.exports = router;
