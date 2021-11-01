const workout = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    qaulity: {
        type: Number
    },
    exerciseList: [workoutItem]
});

const workoutItem = new mongoose.Schema({
    exerciseName: {
        type: String
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    }
});