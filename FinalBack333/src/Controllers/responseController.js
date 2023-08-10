import getAlbum from "../Handlers/getAlbums.js";
const getAlbums = getAlbum.getAlbums;
import getGenres from "../Handlers/getGenres.js";
const getGenre = getGenres.getGenre;
import getSongs from "../Handlers/getSongs.js";
const postSong = getSongs.postSong;
const getSong = getSongs.getSong;




const postSongController = async (req, res, next) => {
    const {name, artists, audio, image} = req.body

    try {
        const create = await postSong(name, artists, audio, image)

        res.status(200).json(create)
    } catch (error) {
        next(error)
    }
}

const getAlbumsController = async (req, res, next) => {
    try{
        const albums = await getAlbums();

        res.status(200).json(albums);

    } catch (error) {
        next(error)
    }
}

const getGenresController = async (req, res, next) => {
    try{
        const genres = await getGenre();

        res.status(200).json(genres);

    } catch (error) {
        next(error)
    }
}

const getSongsController = async (req, res, next) => {
    try{
        const songs = await getSong();

        res.status(200).json(songs);

    } catch (error) {
        next(error)
    }
}

export default {postSongController, getAlbumsController, getGenresController, getSongsController}
