const mongoose = require('mongoose');
const CarouselDataSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
}
);

module.exports = mongoose.model('carouselData', CarouselDataSchema);