import db from '../../@models'
const PRODUCT_TB = db.PRODUCT_TB

export default async function handler(req, res) {
  // PRODUCT_TB.sync()
  if (req.method === 'GET') {
    const product = await PRODUCT_TB.findAll({
      attributes: ['PR_ID_PK', 'PR_NAME'],
    }).then((result) => {
      return result
    })
    return res.status(200).json({ product })
  }
  // const product = models.PRODUCT_TB.findAll({}).then((result) => {})
  // PRODUCT_TB
}
