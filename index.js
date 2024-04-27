const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const router = express.Router();

router.get('/',(req,res,next) => {
  res.send(`<h1>Running..</h1>`)
})

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`)
})