const faker = require('faker')
const fs = require('fs')

const news = Array.from({ length: 4 }, () => ({
  id: faker.datatype.uuid(),
  url: faker.internet.url(),
  headline: faker.commerce.productDescription(),
  thumbnail: faker.image.image(),
}))

fs.writeFileSync('./src/assets/example.json', JSON.stringify(news))
