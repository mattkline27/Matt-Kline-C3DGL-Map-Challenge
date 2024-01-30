const express = require('express');
const {validateNewLocation} = require("./locationValidators");
const crypto = require("crypto");
const {getAllLocations, createOneLocation} = require("./locationService");
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const locations = await getAllLocations()
        return res.send({locations})
    }
    catch (err) {
        return res.status(500).send({error: err})
    }
});

router.post('/',  validateNewLocation({latitude: 'location.lat', longitude: 'location.lng', name: 'location.name'}), async (req, res) => {
    try {
        const newLocation = {...req.body.location, id: crypto.randomUUID()}
        await createOneLocation(newLocation)
        return res.send({addedLocation: newLocation})
    }
    catch (err) {
        return res.status(500).send({error: err})
    }

});

module.exports = router;