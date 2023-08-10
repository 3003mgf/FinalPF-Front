import Albums from "../Models/Albums.js";
import Genres from "../Models/Genres.js";
import Song from "../Models/Songs.js";
import { Op } from "sequelize";

//***FUNCION: Delete Song By Id
export const deleteSongById = async (id) => {
  const song = await Song.findByPk(id);
  if (!song) {
    return `No se encontraron canciones con el ID ${id}`;
  }
  song.deleted = true;
  await song.save();

  return { data: song };
};

//***FUNCION: Get Song by ID
export const getSongById = async (id) => {
  const song = await Song.findByPk(id);
  if (!song) {
    return `No se encontraron canciones con el Id ${id}`;
  }
  return { data: song };
};

//***FUNCION: Get Songs
export const getSong = async () => {
  const songs = await Song.findAll({
    where: { deleted: false },
   
  });

  if(!songs.length){
    return "No hay songs";
  } 
  return {data: songs};
};

//***FUNCION: Get Songs by name
export const getSongByName = async (name) => {
  const songs = await Song.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  if (!songs || !songs.length) {
    return "No existe Song con el name: " + name;
  }
  return { data: songs };
};

//***FUNCION: POST - Crea un Song
export const postSong = async (name, artists, audioFull, image, type, songId, popularity, explicit) => {

  //CREA una nueva Song. Si existe el nombre no lo crea
  const newSong = await Song.findOrCreate({
    where: { name: `${name}` },
    defaults: {
      popularity: `${popularity}`,
      explicit: `${explicit}`,
      type: `${type}`,
      songId: `${songId}`,
      artists: `${artists}`,
      audioFull: `${audioFull}`,
      audioPreview: `${audioPreview}`,
      image: `${image}`,
    },
  });
  //VERIFICAR si se creó un nuevo registro
  const createdNewSong = newSong[1];
  if (createdNewSong) return { data: newSong };
  return "Se encontró un registro existente con el mismo nombre.";
};

//***FUNCION: Put Song - Modificar un campo de Song
export const putSongById = async (
  name,
  artists,
  audioFull,
  audioPreview,
  image,
  type,
  explicit,
  popularity,
  songId
) => {
  //BUSCA Song y Modifica
  const song = await Song.findByPk(+id);

  if (!song) {
    return `There is no song with by ID : ${id}`;
  }

  if (name) song.name = name;
  if (artists) song.artists = artists;
  //URL verificado en el Handler
  if (audioFull) song.audioFull = audioFull;
  if (audioPreview) song.audioPreview = audioPreview;
  if (image) song.image = image;
  if (popularity) song.popularity = popularity;
  if (songId) song.songId = songId;
  if (explicit) song.explicit = explicit;
  if (type) song.type = type;
  if (deleted === true || deleted === false) song.deleted = deleted;

  await song.save();

  if (song) return { data: song };
  return "No se guardó los cambios";
};

export const getAllSongs = async () => {
  const data = await Song.findAll();
  let totalExplicit = 0
  let desactivados = 0

  for(let value of data){
    if(value.explicit === true) totalExplicit ++;
    if(value.deleted === true) desactivados ++;
  };
  return {
    total: data.length,
    totalExplicit,
    desactivados,
    data
  }
}