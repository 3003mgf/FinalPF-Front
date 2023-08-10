import Genre from '../Models/Genre.js'

const postGenre = async (name) => {
    const newGenre = await Genre.create({name})

    return { data: newGenre }
}

const getGenre = async () => {
    const genres = await Genre.findAll()

    return { data: genres }
}

export default {postGenre, getGenre};