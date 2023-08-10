import { putSongById } from "../../Controllers/Songs.controllers.js";
import { validUrl } from "../../Util/validUrl.js";

//***FUNCION: Modificar un registro de Song
const putSongsHandler = async (req, res, next) => {
const { id } = req.params;
const verifId = parseInt(id);
if (isNaN(verifId))
  return res.status(400).json({ error: "No es un número de ID" });

try {
  const { name, artists, audioFull, audioPreview, image } = req.body;

  //VALIDA el formato de URL del Audio
  const checkUrlAudio = validUrl(audio);
  if (checkUrlAudio === false)
    return res.status(400).json({ error: "invalid URL del Audio" });

  //VALIDA el formato de URL de la image
  const checkUrlImage = validUrl(image);
  if (checkUrlImage === false)
    return res.status(400).json({ error: "invalid URL de la Imagen" });

  //Llama al Controller para modificar un registro
  const putSong = await putSongById(
    name,
    artists,
    audioFull,
    audioPreview,
    image
  );
  if (!putSong.data) return res.status(400).json({ error: putSong });
  return res.status(200).json(putSong);
} catch (error) {
  next(error);
}
};

export default putSongsHandler;
