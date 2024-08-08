// models/leaseModel.js
const mongoose = require('mongoose');

const leaseSchema = new mongoose.Schema({
    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    terms: {
        type: String,
        required: true,
    },
    rent: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const Lease = mongoose.model('Lease', leaseSchema);

module.exports = Lease;
