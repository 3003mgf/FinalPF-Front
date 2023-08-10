import { getAllSongs} from "../../Controllers/Songs.controllers.js";

const getAllSongsHandler = async (req, res, next) => {
  try {
    const data = await getAllSongs()
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getAllSongsHandler;