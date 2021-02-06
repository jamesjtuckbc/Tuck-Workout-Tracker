const router = require('express').Router();
const Workout = require('../../models');

router.get('/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            },
        },
    ])
        .sort({ _id: -1 })
        .then((workouts) => {
            console.log(workouts);
            res.json(workouts)
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                },
            },
        },
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then((workouts) => {
            console.log(workouts);
            res.json(workouts)
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body
        }
    })
        .then((workouts) => {
            console.log(workouts);
            res.json(workouts)
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('/workouts', (req, res) => {
    Workout.create({})
        .then((workouts) => {
            console.log(workouts);
            res.json(workouts)
        })
        .catch((err) => {
            res.json(err);
        });;
});



module.exports = router;