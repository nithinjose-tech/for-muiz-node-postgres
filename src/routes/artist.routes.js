const router = require("express-promise-router")();
const artistController = require("../controllers/artist.controller");

//For adding new artists
router.post("/artists", artistController.createArtist);

//For finding specific artist based on id
router.get("/artists/:id", artistController.findArtistById);

//For fetching all artists .
router.get("/artists", artistController.listAllArtist);
//For updating a specific artist
router.put("/artists/:id", artistController.updateArtistById);
//For deleting a specific artist
router.delete("/artists/:id", artistController.deleteArtistById);

module.exports = router;
