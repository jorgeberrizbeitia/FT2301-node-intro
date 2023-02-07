const express = require('express')
const app = express()
const port = 3000

// primera RUTA => "/"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", (req, res) => {
  res.send("Seccion sobre mi. Mi nombre es Jorge")
})

app.get("/friends/all", (req, res) => {
  res.send("Esta es la info de todos mis amigos...")
})

// todas las rutas dinamicas se reciben dentro de req.params
// SIN DESTRUCTURACION
app.get("/friends/single/:friendName", (req, res) => {
  
  console.log(req.params)
  if (req.params.friendName === "caro") {
    res.send(`Esta es la info de mi amiga ${req.params.friendName} y Phantom`)
  } else if (req.params.friendName === "adria") {
    res.send("Esta es la info de mi amigo Adria")
  } else if (req.params.friendName === "ruth") {
    res.send("Esta es la info de mi amiga Ruth")
  } else {
    res.send("No tengo más amigos :(")
  }
})


// todas las rutas dinamicas se reciben dentro de req.params
// CON DESTRUCTURACION
app.get("/friends/single/:friendName", (req, res) => {

  const { friendName } = req.params

  // console.log(req.params)
  if (friendName === "caro") {
    res.send(`Esta es la info de mi amiga ${friendName} y Phantom`)
  } else if (friendName === "adria") {
    res.send("Esta es la info de mi amigo Adria")
  } else if (friendName === "ruth") {
    res.send("Esta es la info de mi amiga Ruth")
  } else {
    res.send("No tengo más amigos :(")
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})