class Controller {
  constructor(entityService){
    this.entityService = entityService;
  }

  async gelAll(req, res){
    try {
      const listData = await this.entityService.findAll();
      return res.status(200).json(listData);
    } catch (error) {
      //
    }
  }

  async updateById(req, res){
    const { id } = req.params;
    const updateData = req.body;
    try {
      const isUpdated = await this.entityService.updateData(updateData, Number(id));
    } catch (error) {
      //
    }
  }
}

module.exports = Controller;