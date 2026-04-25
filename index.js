const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Dùng cổng của Replit

app.use(express.static('public'));

app.get('/', (req, res) => {
  // Đảm bảo file index.html nằm TRONG thư mục public
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Keep-Alive đang chạy!`);
});
