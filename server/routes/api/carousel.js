const express = require('express');
const router = express.Router();
const CarouselData = require('../../models/CarouselData');


// @route   GET api/carousel
// @desc    Get carousel data
// @access  private

router.get('/', async (req, res) => {
    try {
        const data = await CarouselData.find()

        if (!data) {
            return res.status(400).json({ msg: 'There is no match records' });
        }

        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;