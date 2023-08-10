import { getSongById } from "../../Controllers/Songs.controllers.js";

const getSongByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const verifId = parseInt(id);
    if (isNaN(verifId))
      return res.status(400).json({ error: "No es un número de ID" });

    const song = await getSongById(verifId);

    if (!song.data) {
      return res.status(400).json({ error: song });
    }
    return res.status(200).json(song);
  } catch (error) {
    next(error);
  }
  
};

export default getSongByIdHandler;
