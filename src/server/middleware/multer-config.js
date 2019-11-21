const multer = require('multer');

const storage = multer.memoryStorage();

module.exports = multer({
	storage,
	limit: { fileSize: 2 * 1024 * 1024 },
}).single('file');
