const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const pool = mysql.createPool({
  host: 'mysql-service.default.svc.cluster.local',
  port: 3306,
  user: 'myuser',
  password: 'mypassword',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10
});

app.get('/', (req, res) => {
  res.json({ message: 'API dang chay!', status: 'OK' });
});

app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get('/api/users/:id', (req, res) => {
  pool.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Khong tim thay!' });
    res.json(results[0]);
  });
});

app.listen(3000, () => console.log('API chay tren port 3000'));
