import axios from "axios";
import Albums from "../Models/Albums.js";
import Playlists from "../Models/Playlists.js";
import Songs from "../Models/Songs.js";

export const albumsToDb = async() =>{
  try {
    
    const response = await axios.get("https://spotify-api.up.railway.app/albums");

    response.data.map(el => {
      Albums.create({
        type:"album",
        name: el.name,
        albumId: el.id,
        artists: el.artists,
        image: el.image,
        tracks: el.tracks,
        price: Math.floor(Math.random() * 20) * 3
      })
    });

    return console.log(response);
  }catch(error){
    console.log(error);
  }
};


export const playlistsToDb = async() =>{
  try{
    const response = await axios.get("https://spotify-api.up.railway.app/playlist");

    response.data.map(el => {
      Playlists.create({
        type:"playlist",
        name: el.name,
        playlistId: el.id || el.name,
        artists: el.artists,
        owner: el.owner,
        image: el.image || el.images,
        tracks: el.tracks,
        price: 23
      })
    });

    
    return console.log("Success");
  }catch(error){
    console.log(error);
  }
};



export const getSongsToDb = async (req, res) => {
 
  try {
    const URL_SONG = "https://spotify-api.up.railway.app/songs";
    const songsApi = (await axios.get(URL_SONG)).data;

    if (!songsApi) return res.status(400).send("Api Songs no tiene Data");
 
    songsApi.map(async (el) => {
     const findSong =  await Songs.findAll({
        where: { name: `${el.trackName}` },
      });
      if (!findSong || !findSong.length) {
        Songs.create({
            name: el.name,
            songId: el.songId,
            artists: el.artists,
            audioPreview: el.audioPreview,
            audioFull: el.audioFull,
            image: el.image,
            popularity: el.popularity,
            explicit: el.explicit
        });
      }
        
 });

    return res.status(200).send("Se cargó Songs");
    
  } catch (error) {
    return res.status(401).json(error.message);
  }
   /*  const res = await fetch("https://spotify-api.up.railway.app/songs");
    const data = await res.json();

    let noRepeatData = [];
    (async () => {
      let x = await data.map((el) => {
        const findSong = noRepeatData.find(
          (song) => song.trackName === el.trackName
        );
        if (!findSong) {
          noRepeatData.push(el);
        }
      });
  })(); */
  
    //return noRepeatData
   
};


   

