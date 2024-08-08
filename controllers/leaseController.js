const Lease = require('../models/leaseModel');
const User = require('../models/userModel');
const nodemailer = require('nodemailer');

// Setup email transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendLeaseRenewalAlerts = async (req, res) => {
    try {
        const now = new Date();
        const alertThreshold = new Date(now.setMonth(now.getMonth() + 1)); // 1 month from now

        const leases = await Lease.find({
            endDate: { $lte: alertThreshold },
        }).populate('tenant', 'email');

        for (const lease of leases) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: lease.tenant.email,
                subject: 'Lease Renewal Alert',
                text: `Your lease for property ${lease.property} is expiring soon. Please contact your property manager for renewal options.`,
            };

            await transporter.sendMail(mailOptions);
        }

        res.status(200).json({ message: 'Lease renewal alerts sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
