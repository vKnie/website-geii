const db = require('../config/db'); // Import the database connection

// Add a new formation
const addFormation = (name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info, callback) => {
  const query = `
    INSERT INTO formations (name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info], (err, results) => {
    if (err) {
      console.error("❌ Error adding formation:", err);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

// Get a formation by ID
const getFormationById = (id, callback) => {
  const query = 'SELECT * FROM formations WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("❌ Error retrieving formation:", err);
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
};

// Get all formations
const getAllFormations = (callback) => {
  const query = 'SELECT * FROM formations';
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error retrieving formations:", err);
      return callback(err, null);
    }
    return callback(null, results); // Returns all formations as an array
  });
};

// Update a formation
const updateFormation = (id, name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info, callback) => {
  const query = `
    UPDATE formations
    SET name = ?, description = ?, curriculum = ?, objectives = ?, admission_requirements = ?, career_outcomes = ?, skills_acquired = ?, duration_and_structure = ?, further_studies = ?, contact_info = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
  db.query(query, [name, description, curriculum, objectives, admission_requirements, career_outcomes, skills_acquired, duration_and_structure, further_studies, contact_info, id], (err, results) => {
    if (err) {
      console.error("❌ Error updating formation:", err);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

// Delete a formation
const deleteFormation = (id, callback) => {
  const query = 'DELETE FROM formations WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("❌ Error deleting formation:", err);
      return callback(err, null);
    }
    return callback(null, results);
  });
};

module.exports = {
  addFormation,
  getFormationById,
  getAllFormations,
  updateFormation,
  deleteFormation
};
