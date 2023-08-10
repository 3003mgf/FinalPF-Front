import Albums from '../Models/Albums.js'
import { Sequelize } from 'sequelize'


export const getAlbums = async () => {
  const albums = await Albums.findAll({
    where: { deleted: false },
  })
  if (!albums.length) {
     return "No se encontraron Albums";
  }
 
  return { total: albums.length, data: albums };
}

export const searchAlbums = async (name) => {
  const normalizedQuery = name.toLowerCase()
  const databaseAlbums = await Albums.findAll({
    where: Sequelize.where(
      Sequelize.fn('lower', Sequelize.col('name')),
      'LIKE',
      `%${normalizedQuery}%`
    ),
    limit: 15,
  })

  if (databaseAlbums.length === 0) {
    return 'No se encontraron albums.'
  }
  return { data: databaseAlbums };
}

export const getAlbumById = async (id) => {
  const album = await Albums.findByPk(id)

  if (!album) {
    return { message: `No se encontraron álbumes con el ID ${id}` }
  }

  return { data: album };
}

export const deleteAlbumById = async (id) => {
  const album = await Albums.findByPk(id)

  if (!album) {
    return null
  }

  album.deleted = true
  await album.save()

  return { data: album };
}

export const createAlbum = async (newAlbum) => {
   await Albums.create(newAlbum);
   return { data: createAlbum };
}
 

export const modifyAlbum = async (
  id,
  name,
  artists,
  tracks,
  image,
  price,
  stock,
  deleted,
) => {
  const album = await Albums.findByPk(id)

  if (!album) {
   return (`No se encontró el álbum con el ID ${id}`)
  }

  if (name) album.name = name
  if (artists) album.artists = artists
  if (tracks) album.artists = artists;
  if (image) album.image = image
  if (price) album.price = price
  if (stock) album.stock = stock
   if (deleted) album.deleted = deleted;

  await album.save()

  return { data: album }
}

export const getAllAlbums = async () => {
  const data = await Albums.findAll()
  let desactivados = 0
  let totalStock = 0
  if (!data.length) {
     return "No se encontraron Albums";
  }

  for(let value of data){
    if(value.deleted === true) desactivados ++;
    if(value.stock > 0) totalStock += Number(value.stock);
  }
 
  return { 
    totalStock,
    desactivados,
    total: data.length,
    data
  };
}