// const MaintenanceRequest = require('../models/maintenanceRequest');

// // Submit a maintenance request
// exports.submitRequest = async (data) => {
//     try {
//         const request = new MaintenanceRequest(data);
//         return await request.save();
//     } catch (error) {
//         throw new Error(`Failed to submit request: ${error.message}`);
//     }
// };

// // Get all maintenance requests for a property or tenant
// exports.getRequests = async (filter) => {
//     try {
//         return await MaintenanceRequest.find(filter).populate('tenantId propertyId');
//     } catch (error) {
//         throw new Error(`Failed to get requests: ${error.message}`);
//     }
// };

// // Update the status of a maintenance request
// exports.updateRequest = async (requestId, updates) => {
//     try {
//         updates.updatedAt = Date.now(); // Update the timestamp
//         return await MaintenanceRequest.findByIdAndUpdate(requestId, updates, { new: true });
//     } catch (error) {
//         throw new Error(`Failed to update request: ${error.message}`);
//     }
// };
