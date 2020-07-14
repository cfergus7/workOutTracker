const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => {
            return new Date()
        }
    },
    exercises: [{
        type: {
            "type": String,
            trim: true,
            required: "excersize type required"
        },
        name: {
            "type": String,
            trim: true,
            required: "excersize name required"
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        },
    }]
})
const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout