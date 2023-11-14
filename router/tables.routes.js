const { createTable, getTable } = require("../controller/tables.controller");

const router = require("express").Router();

router.post("/add_tables", createTable);
router.get("/get_tables/:data", getTable);

module.exports = router;
