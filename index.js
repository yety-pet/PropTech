const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const cron = require('../DSPM 2/cron/leaseAlert');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/payments', paymentRoutes);

const leaseRoutes = require('./routes/leaseRoutes');

app.use('/api/leases', leaseRoutes);

const messageRoutes = require('./routes/messageRoutes');

app.use('/api/messages', messageRoutes);

// const maintenanceRequestRoutes = require('./routes/maintenanceRequestRoutes');

// app.use('/api/maintenance-requests', maintenanceRequestRoutes);




// MongoDB connection
const db = process.env.db;
mongoose.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
