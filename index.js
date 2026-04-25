const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Phục vụ các file tĩnh (HTML, CSS, JS của web game)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Keep-Alive đang chạy tại http://localhost:${port}`);
});
