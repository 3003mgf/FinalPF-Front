import { getSong, getSongByName } from "../../Controllers/Songs.controllers.js";

const getSongsHandler = async (req, res, next) => {
  try {
    const { name } = req.query;
    //Si hay datos en name, llama a getByName
    const result = name ? await getSongByName(name) : await getSong();

    if (!result.data) return res.status(400).json({ error: result });

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default getSongsHandler;
