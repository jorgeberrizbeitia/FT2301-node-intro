const express = require('express')
const app = express()
const port = 3000


// configuracion del servidor

// donde se encuentran los elementos estaticos => imagenes, css, videos, js
app.use(express.static("public"))



// primera RUTA => "/"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", (req, res) => {
  console.log(req.params)
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


app.get("/greet/:word/:number", (req, res) => {

  console.log(req.params)
  // console.log(req.params.number)
  const { word, number } = req.params

  // let newStr = "";

  // for (let i = 0; i < number; i++) {
  //   newStr += word + " "
  // }


  // res.send(newStr)
  let strToRepeat = word + " "
  res.send(strToRepeat.repeat(number))

})


app.get("/home", (req, res) => {

  // esta ruta envie al cliente, un archivo de html
  // no usaremos .send()
  // sendFile para enviar archivos (como html)
  console.log(__dirname)
  res.sendFile(__dirname + "/views/home.html")

})

app.get("/my-profile", (req, res) => {


  res.sendFile(__dirname + "/views/my-profile.html")

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})