class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(_req, res) {
    try {
      const listData = await this.entityService.getAllData();
      return res.status(200).json(listData);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const data = await this.entityService.getDataById(Number(id));
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createData(req, res) {
    const newData = req.body;
    try {
      await this.entityService.createData(newData);
      return res.status(201).json({ message: 'Sucessfully created!' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateById(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const isUpdated = await this.entityService.updateData(updatedData, Number(id));
      if (!isUpdated) {
        return res.status(400).json({ message: 'Update Failed!' });
      }
      return res.status(200).json({ message: 'Successfully updated!', updatedData });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await this.entityService.deleteData(Number(id));
      if (!isDeleted) {
        return res.status(400).json({ message: 'Delete Failed!' });
      }
      return res.status(200).json({ message: 'Successfully deleted!' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;
