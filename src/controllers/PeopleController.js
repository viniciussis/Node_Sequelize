const Controller = require('../controllers/Controller.js');
const PeopleServices = require('../services/PersonServices.js');

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }
}

module.exports = PeopleController;
