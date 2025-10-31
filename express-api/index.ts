
import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(401).json({
    result: 'error',
    msg:'cambiaste'
  })
  // res.json({
  //   result: 'ok',
  //   msg:'Cambiao Piantao piantao!'
  // })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
