const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Cho phép truy cập các file trong thư mục public
app.use(express.static('public'));

// Khi mở web sẽ hiện file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Web Game đang chạy tại cổng ${port}`);
});
