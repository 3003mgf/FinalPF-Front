import { updateUserPlaylist } from "../../../Controllers/Playlists.controllers.js";


export const updateUserPlaylistHandler = async(req, res)=>{
  try{
    const {data} = await updateUserPlaylist(req.body);

    if(data === "Playlist not found" || data === "You already have a playlist with that name"){
      res.status(500).json(data);
    }else{
      res.status(200).json(data);
    }
  }catch(error){
    console.log(error);
  }
};