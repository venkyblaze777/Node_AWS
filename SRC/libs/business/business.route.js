const BusinessController = require("./business.controller");

exports.businessRoutes = function (app) {

    app.post('/business', [BusinessController.insert]);
    app.get('/business/:businessId', [BusinessController.findBusinessById]);
    app.get('/business', [BusinessController.getAllBusiness]);
    app.put('/business/:businessId', [BusinessController.updateByBusinessId]);
    app.delete('/business/:businessId', [BusinessController.deleteBusinessById]);
};