// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { PRODUCT_TB } from '~/@models/index'
const models = require('../../@models/index')
// const models = require('../../@models')
import db from '../../@models'
db.sequelize.sync()

export default function handler(req, res) {
  db.PRODUCT_TB.sync()
  // const product = models.PRODUCT_TB.findAll({}).then((result) => {})
  // PRODUCT_TB
  res.status(200).json({ name: 'John Doe' })
}
