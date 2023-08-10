import {
  getAllGenres,
  getGenreById,
  deleteGenreById,
  createGenre,
} from '../../Controllers/Genres.controllers.js'

const getGenresHandler = async (req, res, next) => {
  try {
    const genres = await getAllGenres()
    return res.status(200).json(genres)
  } catch (error) {
    next(error)
  }
}

export default getGenresHandler

const getGenresByIdHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    const genre = await getGenreById(id)
    res.status(200).json(genre)
  } catch (error) {
    next(error)
  }
}

const deleteGenresHandler = async (req, res, next) => {
  const { id } = req.params

  try {
    const deletedGenre = await deleteGenreById(id)

    if (!deletedGenre) {
      return res.json({ message: `No se encontró el género con el ID ${id}` })
    }

    res.status(200).json({
      message: `El género con el ID ${id} ha sido eliminado correctamente`,
    })
  } catch (error) {
    next(error)
  }
}

const postGenresHandler = async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const newGenre = await createGenre(id, name);

    res.status(201).json(newGenre);
  } catch (error) {
    next(error);
  }
};


export {
  postGenresHandler,
  deleteGenresHandler,
  getGenresByIdHandler,
  getGenresHandler,
}
