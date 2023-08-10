import { postReviews } from '../../Controllers/Reviews.controllers.js'

const postReviewsHandler = async (req, res, next) => {
  try {
    const { comment, rating, userId, albumId } = req.body
    const data = await postReviews( comment, rating, userId, albumId )
    return res.status(200).json({ data })
  } 
  catch (error) {
    next(error)
  }
}

export default postReviewsHandler