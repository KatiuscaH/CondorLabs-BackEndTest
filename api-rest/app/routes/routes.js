module.exports = (app) => {
    const prov = require('../controllers/controller.js');

    
    // Create a new provider
    app.post('/providers', prov.create);

    // List all provider
    app.get('/providers', prov.findAll);

    // List a single provider by id
    app.get('/providers/:providersId', prov.findOne);

    // Update a provider bt id
    app.put('/providers/:providersId', prov.update);

    // Delete a provider with id
    app.delete('/providers/:providersId', prov.delete);



}