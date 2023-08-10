import { putReviews } from '../../Controllers/Reviews.controllers.js'

const putReviewsHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const { comment, rating } = req.body
    const data = await putReviews( id, comment, rating )
    return res.status(200).json({ data })
  } 
  catch (error) {
    next(error)
  }
}

export default putReviewsHandler