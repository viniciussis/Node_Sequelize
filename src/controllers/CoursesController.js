const Controller = require('./Controller.js');
const CoursesServices = require('../services/CourseServices.js');

const coursesServices = new CoursesServices();

class CoursesController extends Controller {
  constructor() {
    super(coursesServices);
  }
}

module.exports = CoursesController;
