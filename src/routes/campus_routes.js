const express = require("express")
const master_users = require("../controllers/master_users")


const router = express.Router()

router.get("/users",master_users.get_master_users)

module.exports = router;