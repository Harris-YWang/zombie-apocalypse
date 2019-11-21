const express = require('express');

const router = express.Router();

const multer = require('../middleware/multer-config');

const fileController = require('../controllers/file-handler');

/* GET home page. */
router.get('/', (req, res) => {
	res.send('Hello World from Express');
});

router.post('/file-handler', multer, fileController.handleFile);

module.exports = router;
