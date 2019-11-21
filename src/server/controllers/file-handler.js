const { calculate } = require('../utils/game-algorithm');

exports.handleFile = (req, res) => {
	const { file } = req;

	if (!file) {
		return res.status(400).json({ error: 'No file uploaded' });
	}
	try {
		const { buffer } = file;
		const inputs = buffer.toString('utf8');
		const results = calculate(inputs);
		return res.json({ ...results });
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return res.status(500).send(error);
	}
};
