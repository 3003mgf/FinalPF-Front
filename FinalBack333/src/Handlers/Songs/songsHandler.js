import {
  getAllSongs,
  getSongById,
  deleteSongById,
} from '../../Controllers/Songs.controllers.js'

const getSongsHandler = async (req, res, next) => {
  try {
    const songs = await getAllSongs()
    return res.status(200).json(songs)
  } catch (error) {
    next(error)
  }
}

const getSongsByIdHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    const song = await getSongById(id)
    res.status(200).json(song)
  } catch (error) {
    next(error)
  }
}
const deleteSongsHandler = async (req, res, next) => {
  const { id } = req.params

  try {
    const deletedSong = await deleteSongById(id)

    if (!deletedSong) {
      return res.json({ message: `No se encontró la canción con el ID ${id}` })
    }

    res.status(200).json({
      message: `La canción con el ID ${id} ha sido eliminada correctamente`,
    })
  } catch (error) {
    next(error)
  }
}

const postSongsHandler = async (req, res, next) => {
  try {
    const { id, name, artists, audioPreview, audioFull, popularity, explicit, image, type, songId } = req.body

    const newSong = await createSong(
        id,
      name,
      artists,
      audioPreview,
      image,
      type,
      songId,
      audioFull,
      popularity,
      explicit
    )

    res.status(201).json(newSong)
  } catch (error) {
    next(error)
  }
}

const putSongsHandler = async (req, res, next) => {
  return res.send('putSongsHandler')
}

export {
  getSongsByIdHandler,
  getSongsHandler,
  putSongsHandler,
  deleteSongsHandler,
  postSongsHandler,
}

