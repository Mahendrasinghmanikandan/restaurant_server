const Tables = require("../models/tables.models");

const createTable = async (req, res) => {
  try {
    await Tables.create(req.body);
    return res.status(200).send({ message: "Table Successfully Added" });
  } catch (err) {
    return res.status(500).send({ message: "something went wrong" });
  }
};

const getTable = async (req, res) => {
  try {
    let types = JSON.parse(req.params.data);
    let where;

    if (types.types === "All") {
      where = {};
    } else {
      where = { status: types.types };
    }

    const data = await Tables.find(where);
    return res.status(200).send({ data: data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "something went wrong" });
  }
};

module.exports = { createTable, getTable };
