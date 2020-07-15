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
            required: "Please enter a valid exercise"
        },
        name: {
            "type": String,
            trim: true,
            required: "Please enter the name of your exercise"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Please enter a duration of workout"
        },
        weight: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        sets: {
            type: Number,
            trim: true
        },
        distance: {
            type: Number,
            trim: true
        }
    }
]
},
{
toJSON:{virtuals: true}
}
);

workoutSchema.virtual("totalDuration").get( function() {
return this.exercises.reduce((total, exercise) => {
    return total+exercise.duration;
}, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;