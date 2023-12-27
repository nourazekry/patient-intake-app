const patients = require('../models/heart_failure_tool/patients');
const patient = require('../models/heart_failure_tool/patient');
const form = require('../models/heart_failure_tool/form');

exports.getHeartFailurePatients = async (req, res) => {
  try {
    const data = await patients.getHeartFailurePatients();
    res.json({ data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; 

exports.getHeartFailurePatientById = async (req, res) => {
    const { id } = req.params;
    console.log('req', req.params);
    try {
      const data = await patient.getHeartFailurePatientById(id);
      res.json({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }; 

  exports.getHeartFailureFormFields = async (req, res) => {
    const { page } = req.params;
    try {
      const data = await form.getHeartFailureFormFields(page);
      res.json({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }; 