const express = require('express');
const app = express();
const PORT = 5000;

// মিডলওয়্যার
app.use(express.json());
app.use(cors());

// রাউটস
app.use('/api/auth', require('./routes/auth'));
app.use('/api/transfer', require('./routes/transfer'));

// সার্ভার স্টার্ট
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
