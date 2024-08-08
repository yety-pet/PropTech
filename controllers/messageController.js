const { sendWhatsAppMessage } = require('../utils/whatsappService');

exports.sendMessage = async (req, res) => {
    const { recipient, message } = req.body;

    try {
        const response = await sendWhatsAppMessage(recipient, message);
        res.status(200).json({ success: true, message: 'Message sent', response });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
