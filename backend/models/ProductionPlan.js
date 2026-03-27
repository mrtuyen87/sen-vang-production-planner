const mongoose = require('mongoose');

const productionPlanSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    quantity: { type: Number, required: true },
    productionDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProductionPlan', productionPlanSchema);