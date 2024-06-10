const Controller = require('./Controller.js');
const RegistrationsServices = require('../services/RegistrationServices.js');

const registrationsServices = new RegistrationsServices();

class RegistrationsController extends Controller {
  constructor() {
    super(registrationsServices);
  }
}

module.exports = RegistrationsController;
