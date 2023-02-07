const someData = {
  name: "bob",
  age: 50
}

const someOtherData = {
  username: "patata",
  hobby: "reading"
}

// module.exports => exporta un obj, data, funcion a otro modulo
module.exports = {
  someData: someData,
  someOtherData: someOtherData
};

// 1. cada modulo solo puede tener un module.exports