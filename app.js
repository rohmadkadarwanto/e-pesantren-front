const express = require('express');
const app = express();
const port = 3005;

app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Routes
// Routes
const indexRoute = require('./routes/index');
const akademikRoute = require('./routes/akademik');
const keuanganRoute = require('./routes/keuangan');
const blogRoute = require('./routes/blog');
const sistemRoute = require('./routes/sistem');
const customerServiceRoute = require('./routes/customer_service');
const tellerRoute = require('./routes/teller');

app.use('/', indexRoute);
app.use('/akademik', akademikRoute);
app.use('/keuangan', keuanganRoute);
app.use('/blog', blogRoute);
app.use('/sistem', sistemRoute);
app.use('/customer/service', customerServiceRoute);
app.use('/teller', tellerRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
