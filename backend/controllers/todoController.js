const fs = require('fs');
const Todo = require('../models/Todo');
const parseCSV = require('../utils/csvParser');

/**
 * Controller to import todos from a CSV file.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function importTodos(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const filePath = req.file.path;
    const rows = await parseCSV(filePath);

    const validStatuses = ['to do', 'in progress', 'done'];
    // Process and insert valid rows
    for (const row of rows) {
      const { title, content, status } = row;
      const normalizedStatus = status.toLowerCase();

      // Validate status field
      if (!validStatuses.includes(normalizedStatus)) {
        console.warn(`Skipping row with invalid status: ${status}`);
        continue;
      }

      await Todo.create({
        title,
        content,
        status: normalizedStatus,
      });
    }

    // Remove the uploaded file after processing
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting uploaded file:', err);
      }
    });

    return res.status(200).json({ message: 'CSV data imported successfully.' });
  } catch (error) {
    console.error('Error importing CSV data:', error);
    return res.status(500).json({ error: 'Error importing CSV data.' });
  }
}

module.exports = { importTodos };
