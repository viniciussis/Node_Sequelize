const dataSource = require('../db/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllData() {
    return dataSource[this.model].findAll();
  }

  async getDataById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createData(newData) {
    return dataSource[this.model].create(newData);
  }

  async updateData(updatedData, id) {
    const updatedDataList = dataSource[this.model].update(updatedData, {
      where: {
        id: id
      }
    });
    if (updatedDataList[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteData(id) {
    const rowsDeleted = dataSource[this.model].destroy({
      where: { id: id }
    });
    if (rowsDeleted === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;
