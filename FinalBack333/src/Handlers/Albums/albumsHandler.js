
import {
  getAllAlbums,
  getAlbums,
  searchAlbums,
  getAlbumById,
  deleteAlbumById,
  createAlbum,
  modifyAlbum,
} from "../../Controllers/Albums.controllers.js";
// T

const getAlbumsHandler = async (req, res, next) => {
  const { name } = req.query;

  try {
    const results = name ? await searchAlbums(name) : await getAlbums();
    if (!results.data) {
       res.status(200).json({error: results});
    }
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

const getAllAlbumsHandler = async (req, res, next) => {
  try {
    const data = await getAllAlbums();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};



const getAlbumsByIdHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const album = await getAlbumById(id);
    res.status(200).json(album);
  } catch (error) {
    next(error);
  }
};

const deleteAlbumsHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedAlbum = await deleteAlbumById(id);

    if (!deletedAlbum) {
      return res
        .status(404)
        .json({ error: `No se encontró el álbum con el ID ${id}` });
    }

    res.status(200).json({
      error: `El álbum con el ID ${id} ha sido eliminado correctamente`,
    });
  } catch (error) {
    next(error);
  }
};

const postAlbumsHandler = async (req, res, next) => {
  
  const newAlbum = await createAlbum(req.body);
  try {
    if (!newAlbum.data)
      res.status(401).json({ error: "No se actualizó Album" });
    
    res.status(201).json({ data: newAlbum });

  } catch (error) {
    next(error);
  }
};

const putAlbumsHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { id, name, artists, tracks, image, price, stock, deleted } =
      req.body;

    const updatedAlbum = await modifyAlbum(
      id,
      name,
      artists,
      tracks,
      image,
      price,
      stock,
      deleted
    );
    if(!updatedAlbum.data) return res.status(401).json({ error: updatedAlbum });
    res.status(200).json({ data: updatedAlbum });
    
  } catch (error) {
    next(error);
  }
};

export {
  getAlbumsByIdHandler,
  getAlbumsHandler,
  getAllAlbumsHandler,
  deleteAlbumsHandler,
  postAlbumsHandler,
  putAlbumsHandler,
};
