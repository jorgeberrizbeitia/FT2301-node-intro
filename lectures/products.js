// 10 products con su nombre y precio

const { faker } = require("@faker-js/faker")

const productArr = []

for (let i = 0; i < 10; i++) {
  // console.log(faker.commerce.product())
  // console.log(faker.commerce.price())
  productArr.push({
    name: faker.commerce.product(),
    price: faker.commerce.price()
  })
}

console.log(productArr)