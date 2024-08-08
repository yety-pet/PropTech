// const { submitRequest, getRequests, updateRequest } = require('../utils/maintenanceRequestService');

// // Submit a maintenance request
// exports.createRequest = async (req, res) => {
//     try {
//         const data = {
//             tenantId: req.user._id,
//             propertyId: req.body.propertyId,
//             description: req.body.description,
//             images: req.body.images
//         };
//         const request = await submitRequest(data);
//         res.status(201).json(request);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get all maintenance requests (can be filtered by tenantId or propertyId)
// exports.getRequests = async (req, res) => {
//     try {
//         const filter = {};
//         if (req.user.role === 'tenant') {
//             filter.tenantId = req.user._id;
//         } else if (req.user.role === 'property manager') {
//             filter.propertyId = req.params.propertyId;
//         }
//         const requests = await getRequests(filter);
//         res.status(200).json(requests);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Update the status of a maintenance request
// exports.updateRequest = async (req, res) => {
//     try {
//         const { requestId } = req.params;
//         const { status } = req.body;
//         const request = await updateRequest(requestId, { status });
//         res.status(200).json(request);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const { sendNotification } = require('../utils/emailService');

