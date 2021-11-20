const mongoose = require('mongoose')

const topupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    transaksi: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Top-up', topupSchema, 'topup')