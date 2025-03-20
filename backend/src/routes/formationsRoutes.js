const express = require('express');
const router = express.Router();
const formationsModel = require('../models/formationsModel'); 

// Add a new formation
router.post('/add', (req, res) => {
  const { name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info } = req.body;
  formationsModel.addFormation(name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding formation', error: err });
    }
    return res.status(201).json({ message: 'Formation added successfully', formationId: results.insertId });
  });
});

// Get a formation by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  formationsModel.getFormationById(id, (err, formation) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving formation', error: err });
    }
    if (!formation) {
      return res.status(404).json({ message: 'Formation not found' });
    }
    return res.status(200).json(formation);
  });
});

// Get all formations
router.get('/', (req, res) => {
  formationsModel.getAllFormations((err, formations) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving formations', error: err });
    }
    return res.status(200).json(formations); // Returns all formations as a JSON array
  });
});

// Update a formation
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info } = req.body;
  formationsModel.updateFormation(id, name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating formation', error: err });
    }
    return res.status(200).json({ message: 'Formation updated successfully' });
  });
});

// Delete a formation
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  formationsModel.deleteFormation(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting formation', error: err });
    }
    return res.status(200).json({ message: 'Formation deleted successfully' });
  });
});

module.exports = router;
