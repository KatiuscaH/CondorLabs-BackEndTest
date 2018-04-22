//Create a Schema with the dates from database
const mongoose = require('mongoose')

const ProvidersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    employerId: Number,
    providerType: String,
    staffStatus: String,
    assignedTo: Number,
    status: String,
    createdBy: Number,
    updatedBy: Number,
    projectedStartDate: Date
})

module.exports = mongoose.model('Providers', ProvidersSchema)