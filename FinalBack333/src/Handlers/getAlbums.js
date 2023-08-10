import Album  from '../Models/Album.js'


const getAlbums = async () => {
    const albums = await Album.findAll()

    return { data: albums }

}

export default  getAlbums;