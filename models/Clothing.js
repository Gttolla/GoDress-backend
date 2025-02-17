const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    catId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cat'
    }],
    image: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    tissue: {
        type: String,
    },
    fav: {
        type: Boolean
    },
    dirty: {
        type: Boolean
    }
}, { timestamps: true });

const Clothing = mongoose.model('Clothing', clothingSchema)

module.exports = {
    Clothing,
    clothingSchema,
};