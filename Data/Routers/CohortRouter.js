const express = require("express");
const db = require("../dbConfig");
const router = express.Router();

// - `[POST] /api/cohorts` This route should save a new cohort to the database.
router.post("/", async (req, res) => {
  const { name } = req.body;
  if (name) {
    try {
      const { id, name } = await db("cohorts").insert(req.body);
      res
        .status(200)
        .send(`The ${name} cohort, with id number ${id}, has been created.`);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(404).send("A cohort needs a name.");
  }
});

// - `[GET] /api/cohorts` This route will return an array of all cohorts.
router.get("/", async (req, res) => {
  try {
    const cohorts = await db("cohorts");
    res.status(200).json(cohorts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// - `[GET] /api/cohorts/:id` This route will return the cohort with the matching `id`.
router.get("/:id", async (req, res) => {
  try {
    const cohort = await db("cohorts").where({ id: req.params.id });
    res.status(200).json(cohort);
  } catch (err) {
    res.status(500).json(err);
  }
});

// - `[GET] /api/cohorts/:id/students` returns all students for the cohort with the specified `id`.
router.get("/:id/students", async (req, res) => {
  const { id } = req.params;
  try {
    const students = await db("students").where({ cohort_id: id });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json(err);
  }
});

//- `[PUT] /api/cohorts/:id` This route will update the cohort with the matching `id` using information sent in the body of the request.
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const test = await db("cohorts")
      .where({ id: id })
      .update(req.body);

    if (test > 0) {
      const updatedCohort = await db("cohorts")
        .where({ id: id })
        .first();
      res.status(200).json(updatedCohort);
    } else {
      res.status(404).send("The requested cohort was not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//- `[DELETE] /api/cohorts/:id` This route should delete the specified cohort.
router.delete("/:id", async (req, res) => {
  try {
    const test = await db("cohorts")
      .where({ id: req.params.id })
      .del();
    if (test > 0) {
      res.status(200).send("Cohort deleted successfully");
    } else {
      res.status(404).send("Cohort records with that ID not found.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
