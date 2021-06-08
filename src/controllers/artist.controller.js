const db = require("../config/database");

//Controller for fetching all artist
exports.listAllArtist = async (req, res) => {
  const response = await db.query("SELECT * FROM artist ORDER BY name ASC");
  res.status(200).send(response.rows);
};



//Controller for fetching a  specific artist
exports.findArtistById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM artist WHERE id = $1", [
    productId,
  ]);
  res.status(200).send(response.rows);
};

//Controller for creating a  new artist

exports.createArtist = async (req, res) => {
  const { name, films } = req.body;
  const {
    rows,
  } = await db.query("INSERT INTO artist (name, films) VALUES ($1, $2)", [
    name,
    films,
  ]);

  res.status(201).send({
    message: "Artist added successfully!",
    body: {
      result: { name, films },
    },
  });
};

//Controller for upadating an  existing artist

exports.updateArtistById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, films } = req.body;

  const response = await db.query(
    "UPDATE artist SET name = $1, films = $2 WHERE id = $3",
    [name, films, productId]
  );

  res.status(200).send({ message: "Artist Updated Successfully!" });
};

//Controller for deleting an  existing artist
exports.deleteArtistById = async (req, res) => {
  const productId = parseInt(req.params.id);
  await db.query("DELETE FROM artist WHERE id = $1", [productId]);

  res.status(200).send({ message: "Artist deleted successfully!", productId });
};
