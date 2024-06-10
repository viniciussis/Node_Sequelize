const { Router } = require('express');
const CoursesController = require('../controllers/CoursesController.js');

const coursesController = new CoursesController();
const router = Router();

router.get('/courses', (req, res) => coursesController.getAll(req, res));
router.get('/courses/:id', (req, res) => coursesController.getById(req, res));
router.post('/courses', (req, res) => coursesController.createData(req, res));
router.put('/courses/:id', (req, res) => coursesController.updateById(req, res));
router.delete('/courses/:id', (req, res) => coursesController.deleteById(req, res));

module.exports = router;
