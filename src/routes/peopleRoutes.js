const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');

const peopleController = new PeopleController();
const router = Router();

router.get('/people', (req, res) => peopleController.getAll(req, res));
router.get('/people/all', (req, res) => peopleController.getAllPeople(req, res));
router.get('/people/:id', (req, res) => peopleController.getById(req, res));
router.post('/people', (req, res) => peopleController.createData(req, res));
router.put('/people/:id', (req, res) => peopleController.updateById(req, res));
router.delete('/people/:id', (req, res) => peopleController.deleteById(req, res));

module.exports = router;
