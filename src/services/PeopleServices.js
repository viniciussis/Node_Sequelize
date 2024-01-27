const Services = require('./Services.js');

class PeopleServices extends Services {
  constructor(){
    super('People');
  }
}

module.exports = PeopleServices;