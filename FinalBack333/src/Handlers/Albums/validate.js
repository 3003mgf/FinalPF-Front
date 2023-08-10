const requiredProperties = [
  "name",
  "artists",
  "genres",
  "launchDate",
  "totalSongs",
  "image",
  "price",
  "stock",
];

export const validateAlbum = (req, res, next) => {
  const requestData = req.body;

  const missingProperties = requiredProperties.filter(
    (prop) => !(prop in requestData)
  );

  if (missingProperties.length > 0) {
    const missingPropertiesList = missingProperties.join(", ");
    return res.status(400).json({
      error: `Faltan las siguientes propiedades: ${missingPropertiesList}`,
    });
  }

  next();
};
