import Genres from '../Models/Genres.js'

export const getAllGenres = async () => {
    const genres = await Genres.findAll({
        where: { deleted: false },
      })
  return { data: genres }
}

export const getGenreById = async (id) => {
  const genres = await Genres.findByPk(id)

  if (!genres) {
    return { message: `No se encontraron géneros con el ID ${id}` }
  }

  return genres
}
export const deleteGenreById = async (id) => {
    const genres = await Genres.findByPk(id)

    if (!genres) {
      return null
    }
  
    genres.deleted = true
    await genres.save()
  
    return genres
}
export const createGenre = async (id, name) => {
  const newGenre = await Genres.create({
    id,
    name,
  })

  return newGenre
}
