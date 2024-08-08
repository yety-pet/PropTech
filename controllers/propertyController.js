const Property = require('../models/propertyModel');

// Create Property
exports.createProperty = async (req, res) => {
    const { location, size, description, amenities, images, terms, price, status, condition } = req.body;

    try {
        const property = new Property({
            owner: req.user._id,
            location,
            size,
            description,
            amenities,
            images,
            terms,
            price,
            status,
            condition,
        });

        await property.save();

        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Properties
exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate('owner', 'name email');
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Property
exports.updateProperty = async (req, res) => {
    const { id } = req.params;
    const { location, size, description, amenities, images, terms, price, status, condition } = req.body;

    try {
        const property = await Property.findById(id);

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        if (property.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        property.location = location || property.location;
        property.size = size || property.size;
        property.description = description || property.description;
        property.amenities = amenities || property.amenities;
        property.images = images || property.images;
        property.terms = terms || property.terms;
        property.price = price || property.price;
        property.status = status || property.status;
        property.condition = condition || property.condition;

        await property.save();

        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Property
exports.deleteProperty = async (req, res) => {
    const { id } = req.params;

    try {
        const property = await Property.findById(id);

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        if (property.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'User not authorized' });
        }

        await property.remove();

        res.status(200).json({ message: 'Property removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
