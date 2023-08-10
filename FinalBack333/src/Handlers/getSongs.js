import Song from '../Models/Song.js'

const postSong = async (name, artists, audio, image) => {
    const newSong = await Song.create({name, artists, audio, image})

    return { data: newSong }
}

const getSong = async () => {
    const songs = await Song.findAll()

    return { data: songs }
}

export default {postSong, getSong};