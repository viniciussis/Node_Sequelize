const dataSource = require('../models');

class Services {
  constructor(modelName){
    this.model = modelName;
  }

  async getData(){
    return dataSource[this.model].findAll();
  }

  async updateData(updateData, id){
    const dataUpdatedList = dataSource[this.model].update(updateData, {});
  }
}

module.exports = Services;