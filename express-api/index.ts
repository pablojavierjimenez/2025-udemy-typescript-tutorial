
import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(401).json({
    result: 'error',
    msg:'prueva con la ruta /api/{cualquier-texto-o-numero}'
  })
  // res.json({
  //   result: 'ok',
  //   msg:'Cambiao Piantao piantao!'
  // })
})

app.get('/api', (req, res) => {
    res.status(401).json({
      result: 'error',
      msg:`debes enviar algún parámetro luego de api, ejemplo: /api/hello-world`
    })
})

/**
 * Endpoint que recibe un parámetro por la URL y lo devuelve en la respuesta
 * @param text parámetro recibido por la URL
 * @return json con el parámetro recibido
 * ejemplo: /api/hello-world
 * respuesta: { result: 'ok', msg: 'Funciona!! recibí --> hello-world <-- por URL' }
 * ejemplo: /api/12345
 * respuesta: { result: 'ok', msg: 'Funciona!! recibí --> 12345 <-- por URL' }
 */
app.get('/api/:text', (req, res) => {
  const { text } = req.params;
  res.json({
    result: 'ok',
    msg:`Funciona!! recibí --> ${text} <-- por URL`
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
