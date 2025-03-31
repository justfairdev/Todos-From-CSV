const express = require('express');
const multer = require('multer');
const { importTodos } = require('../controllers/todoController');

const router = express.Router();

// Configure multer to store uploaded files in the "uploads/" directory.
const upload = multer({ dest: 'uploads/' });

// POST /todos/import - Endpoint to import CSV data
router.post('/import', upload.single('file'), importTodos);

module.exports = router;
