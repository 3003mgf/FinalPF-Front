import Reviews from '../Models/Reviews.js'
import Albums from '../Models/Albums.js'

export const getReviews = async () => {
  const data = await Reviews.findAll({
    where: {
      deleted: false
    }
  })
  return data
}

export const postReviews = async (comment, rating, userId, albumId) => {
  if( 
    typeof(comment) !== 'string' || comment.length < 1 ||
    typeof(rating) !== 'number' || rating.length < 1 ||
    typeof(userId) !== 'string' || comment.length < 1 ||
    typeof(albumId) !== 'number' || albumId.length < 1
    ) throw Error('Campos obligatorios sin completar')
  const data = await Reviews.create({ comment, rating, userId, albumId })
  
  return data
}

export const putReviews = async (id, comment, rating) => {
  const review = await Reviews.findOne({where: { id }})
  review.comment = comment
  review.rating = rating
  await review.save()
  
  return review
}

export const deleteReviews = async (id) => {
  const review = await Reviews.findOne({where: { id }})
  review.deleted = true
  await review.save()

  return review
}

export const getReviewsById = async (id) => {
  const data = await Reviews.findOne({
    where: {
      deleted: false,
      id
    }
  })
  return data
}

