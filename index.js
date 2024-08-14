const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');
mongoDB();
app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type, Accept"
  )
next();
})
// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/api', require("./routes/createUser"));
app.use('/api', require("./routes/Display"));

app.get('/', (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
