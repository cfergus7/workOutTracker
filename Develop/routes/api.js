const router = require("express").Router()
const Workout = require("../models/workout")


router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router