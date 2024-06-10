const Controller = require('./Controller.js');
const CategoriesServices = require('../services/CategoryServices.js');

const categoriesServices = new CategoriesServices();

class CategoriesController extends Controller {
  constructor() {
    super(categoriesServices);
  }
}

module.exports = CategoriesController;
