const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
const cors = require('cors');

//Connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.use(
  cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
  }))


// define route
app.use('/api/carousel', require('./routes/api/carousel'));


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 3600;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));