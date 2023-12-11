const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/heart_failure_tool', dataController.getHeartFailurePatients);
router.get('/heart_failure_tool/edit/:id', dataController.getHeartFailurePatientById);

module.exports = router;