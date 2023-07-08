import db from '../../@models'
const PRODUCT_TB = db.PRODUCT_TB

export default async function handler(req, res) {
  const query = req.query

  const { PR_ID } = query

  if (req.method === 'GET') {
    const product = await PRODUCT_TB.findOne({
      where: { PR_ID_PK: PR_ID },
      attributes: [
        'PR_NAME',
        'PR_COMPANY',
        'PR_TAG',
        'PR_SALES',
        'PR_PARING',
        'PR_DES',
        'PR_ALC',
        'PR_NON',
        'PR_IMAGE',
        'PR_BACKGROUND',
        'PR_PRICE',
      ],
    }).then((result) => {
      return result
    })

    return res.status(200).json({ product })
  } else {
  }
  // const product = models.PRODUCT_TB.findAll({}).then((result) => {})
  // PRODUCT_TB
}
