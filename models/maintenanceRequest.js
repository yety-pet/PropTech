// const mongoose = require('mongoose');

// const maintenanceRequestSchema = new mongoose.Schema({
//     tenantId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     propertyId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Property',
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     images: [String], // Array of image URLs
//     status: {
//         type: String,
//         enum: ['Submitted', 'In Progress', 'Completed', 'Closed'],
//         default: 'Submitted'
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('MaintenanceRequest', maintenanceRequestSchema);
