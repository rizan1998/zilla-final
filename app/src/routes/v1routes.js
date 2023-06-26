// test
const express = require("express");
const router = express.Router();
const roomCtrl = require("../controller/room");
const reservationCtrl = require("../controller/reservation");
const hotelCtrl = require("../controller/hotel");
const userCtrl = require("../controller/user");
const authCtrl = require("../controller/auth");
const verifyJWT = require("../middleware/verifyJWT");
const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/login", authCtrl.login);
router.use(verifyJWT);

router.post("/users", userCtrl.create);

router.get("/hotels/fetch", hotelCtrl.fetch);
router.post("/hotels/create", hotelCtrl.create);
router.get("/hotels/:id/detail", hotelCtrl.getOne);
router.put("/hotels/:id/update", hotelCtrl.update);
router.delete("/hotels/:id/delete", hotelCtrl.destroy);

router.get("/rooms/fetch", roomCtrl.fetch);
router.post("/rooms/create", roomCtrl.create);
router.get("/rooms/:id/detail", roomCtrl.getOne);
router.put("/rooms/:id/update", roomCtrl.update);
router.delete("/rooms/:id/delete", roomCtrl.destroy);

router.get("/reservations/user/:user_id", reservationCtrl.fetch);
router.post("/reservations", authenticateUser, reservationCtrl.create);
router.get("/reservations/:id/detail", reservationCtrl.getOne);
router.put("/reservations/:id/update", reservationCtrl.update);
router.put("/reservations/:id/pay", reservationCtrl.pay);
router.delete("/reservations/:id/delete", reservationCtrl.destroy);

module.exports = router;
