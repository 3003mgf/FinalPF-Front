import { getAllPlaylists } from "../../Controllers/Playlists.controllers.js";


const getPlaylistsHandler = async (req, res) => {
  try{
    const getPlaylists = await getAllPlaylists();

    res.status(200).json(getPlaylists)
  }catch(error){
    console.log(error);
  }
}

export default getPlaylistsHandler