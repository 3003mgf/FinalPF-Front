import { deleteSongById } from "../../Controllers/Songs.controllers.js";

const deleteSongsHandler = async (req, res, next) => {
 try {
   const { id } = req.params;
   //Verificación de Id
   const verifId = parseInt(id);
   if (isNaN(verifId))
     return res.status(400).send({ error: "No es un número de ID" });

   const songs = await deleteSongById(verifId);

   if (!songs.data) {
     return res.status(400).send({ error: songs });
   }
   return res.status(200).json(songs);
 } catch (error) {
   next(error);
 }
};

export default deleteSongsHandler;
