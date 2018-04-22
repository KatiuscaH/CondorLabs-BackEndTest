const Provider = require('../models/model.js');

// Create provider based in the Schema
exports.create = (req, res) => {
    let provider = new Provider()
    provider.firstName = req.body.firstName
    provider.lastName = req.body.lastName
    provider.middleName = req.body.middleName
    provider.email = req.body.email
    provider.employerId = req.body.employerId
    provider.providerType = req.body.providerType
    provider.staffStatus = req.body.staffStatus
    provider.assignedTo = req.body.assignedTo
    provider.status = req.body.status
    provider.createdBy = req.body.createdBy
    provider.updatedBy = req.body.updatedBy
    provider.projectedStartDate = req.body.projectedStartDate

    console.log(req.body)
    provider.save((err, providerStored) => {
        if(err) res.status(500).send({message: `Error to save: ${err}`})

        res.status(200).send({provider: providerStored})
    })
};

// List all providers from the database.
exports.findAll = (req, res) => {
    console.log("jj");

    Provider.find()
    .then(providers => {
       console.log("jj2"); res.send(providers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single provider with a Id
exports.findOne = (req, res) => {
   
    Provider.findById(req.params.providersId)
    .then(providers => {
        if(!providers) {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.providersId
            });            
        }
        res.send(providers);
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.providersId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving provider with id " + req.params.providersId
        });
    });
};

// Update a provider identified by the Id 
exports.update = (req, res) => {
    let providersId = req.params.providersId
    let update = req.body
    Provider.findByIdAndUpdate(providersId, update, (err, providerUpdate) => {
        if (err) res.status(500).send({message: "Error to update"})

        res.status(200).send({ provider: providerUpdate })
    })
};

// Delete a provider by the id
exports.delete = (req, res) => {
    Provider.findByIdAndRemove(req.params.providersId)
    .then(providers => {
        if(!providers) {
            return res.status(404).send({
                message: "Provider not found with id " + req.params.providersId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.providersId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.providersId
        });
    });

};