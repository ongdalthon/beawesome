import db from '../../@models'
const PRODUCT_TB = db.PRODUCT_TB

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const body = req.body
    // console.log(body.PR_NAME)

    const product = await PRODUCT_TB.create({
      PR_NAME: body.PR_NAME,
      PR_COMPANY: body.PR_COMPANY,
      PR_TAG: body.PR_TAG,
      PR_SALES: body.PR_SALES,
      PR_PARING: body.PR_PARING,
      PR_DES: body.PR_DES,
      PR_ALC: body.PR_ALC,
      PR_NON: body.PR_NON,
      PR_IMAGE: body.PR_IMAGE,
      PR_BACKGROUND: body.PR_BACKGROUND,
      PR_PRICE: body.PR_PRICE,
    }).then((result) => {
      return result
    })
    return res.status(200).json({ product })
  } else {
    const product = await PRODUCT_TB.findAll({}).then((result) => {
      return result
    })
    return res.status(200).json({ product })
  }

  // const product = models.PRODUCT_TB.findAll({}).then((result) => {})
  // PRODUCT_TB
}
