const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Static user credentials for demonstration
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // For simplicity, we'll just display a success message if login is successful.
    // In a real-world application, you would create a session or token to handle user authentication.
    res.send('<h2>Login successful!</h2>');
  } else {
    res.send('<h2>Login failed. Please check your credentials.</h2>');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
