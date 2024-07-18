const express = require('express')
const app = express();
const port = 3000
const connectDb = require('./db')



const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my hotel')
})

const personRoutes = require('./personRoutes');
app.use('/person',personRoutes)

const menuRoutes = require('./menuRoutes');
app.use('/menu',menuRoutes)


connectDb().then(()=>{
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
});
