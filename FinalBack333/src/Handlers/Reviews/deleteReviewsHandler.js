import { deleteReviews } from '../../Controllers/Reviews.controllers.js'

const deleteReviewsHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await deleteReviews(id)
    return res.status(200).json({ data })
  } 
  catch (error) {
    next(error)
  }
}

export default deleteReviewsHandler