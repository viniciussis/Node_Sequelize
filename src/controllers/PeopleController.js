const Controller = require('../controllers/Controller.js');
const PeopleServices = require('../services/PersonServices.js');

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }

  async getAllPeople(req, res) {
    try {
      const people = await peopleServices.getPeopleByScope();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PeopleController;
