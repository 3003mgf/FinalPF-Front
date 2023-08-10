import { postSong } from "../../Controllers/Songs.controllers.js";
import { validUrl } from "../../Util/validUrl.js";

//CREA UNA NUEVA CANCIÓN
const postSongsHandler = async (req, res, next) => {
  try {
    const { name, artists, audioFull, audioPreview, image } = req.body;

    //VALIDA el formato de URL del Audio
    const checkUrlAudio = validUrl(audioFull);
    if (checkUrlAudio === false)
      return res.status(400).send({ error: "invalid URL del Audio" });

    //VALIDA el formato de URL de la image
    const checkUrlImage = validUrl(image);
    if (checkUrlImage === false)
      return res.status(400).send({ error: "invalid URL de la Imagen" });

    const createSong = await postSong(
      name,
      artists,
      audioFull,
      audioPreview,
      image
    );
    if (!createSong.data) return res.status(400).json({ error: createSong });
    return res.status(200).json(createSong);
  } catch (error) {
    next(error);
  }
};
export default postSongsHandler;
