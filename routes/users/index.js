const express = require("express");
const router = express.Router();

const {
  userRegistration,
  getAllUsers,
  editUser,
  deleteUser,
} = require("./controller");
router.post("/", userRegistration);
router.get("/", getAllUsers);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
