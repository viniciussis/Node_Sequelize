const Services = require('./Services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getPeopleByScope() {
    return await super.getDataByScope('allPeople');
  }
}

module.exports = PersonServices;
