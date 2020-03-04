const BusinessModel = require('./business.model');
const crypto = require('crypto');
const fs = require('fs');

exports.insert = (req, resp) => {
    BusinessModel.createBusiness(req.body).then((result) => {
        resp.status(201).send(result);
    }, err => {
        resp.status(406).send(err);
    });
};

exports.findBusinessById = (req, resp) => {
    BusinessModel.findBusinessById(req.params.businessId).then((result) => {
        resp.status(200).send(result);
    }, err => {
        resp.status(err.status).send(err.message);
    });
};

exports.updateByBusinessId = (req, resp) => {
    BusinessModel.updateByBusinessId(req.body, req.params.businessId).then((result) => {
        resp.status(201).send(result);
    }, err => {
        resp.status(err.status).send(err.message);
    });
};

exports.deleteBusinessById = (req, resp) => {
    let id = req.params.businessId;
    BusinessModel.deleteBusinessById(id).then((result) => {
        resp.status(201).send(result);
    }, err => {
        resp.status(err.status).send(err.message);
    });
};
exports.getAllBusiness = (req, resp) => {
    BusinessModel.getAllBusiness().then((result) => {
        resp.status(201).send(result);
    }, err => {
        resp.status(err.status).send(err.message);
    });
};

