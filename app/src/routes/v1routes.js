const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/product");
const roomCtrl = require("../controller/room");
const reservationCtrl = require("../controller/reservation");

router.get("/products", productCtrl.fetch);
router.post("/products", productCtrl.create);
router.get("/products/:id", productCtrl.getOne);
router.put("/products/:id", productCtrl.update);
router.delete("/products/:id", productCtrl.destroy);

router.get("/rooms", roomCtrl.fetch);
router.post("/rooms", roomCtrl.create);
router.get("/rooms/:id", roomCtrl.getOne);
router.put("/rooms/:id", roomCtrl.update);
router.delete("/rooms/:id", roomCtrl.destroy);

router.get("/reservations", reservationCtrl.fetch);
router.post("/reservations", reservationCtrl.create);
router.get("/reservations/:id", reservationCtrl.getOne);
router.put("/reservations/:id", reservationCtrl.update);
router.delete("/reservations/:id", reservationCtrl.destroy);

module.exports = router;
