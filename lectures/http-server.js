const http = require("http");

const server = http.createServer((request, response) => {

  console.log("cliente solicitando algo", request.url)

  if (request.url === "/") {
    // enviar algo al cliente
    response.write("Bienvenido a mi servidor, que desea?")
    response.end()
  } else if (request.url === "/about") {
    response.write("Esta es sección sobre mi")
    response.end()
  } else {
    response.write("No sé a donde vas. Estas perdido? :(")
    response.end()
  }


})


// continuamente necesito escuchar solicitudes de clientes
server.listen(3000) // 3000 es comunmente un puerto libre para uso de pruebas