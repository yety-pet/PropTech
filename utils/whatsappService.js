const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendWhatsAppMessage = async (to, body) => {
    try {
        const message = await client.messages.create({
            body,
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: `whatsapp:${to}`
        });
        return message;
    } catch (error) {
        throw new Error(`Failed to send message: ${error.message}`);
    }
};
