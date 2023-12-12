
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submit-biodata', (req, res) => {
  const biodata = req.body;
  // Process the biodata as needed (e.g., save to a database)
  console.log('Received Biodata:', biodata);

  // Send a response back to the client
  res.json({ message: 'Biodata received successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
