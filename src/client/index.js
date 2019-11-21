import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Layout from './components/Layout';
import FileReceiver from './components/FileReceiver';
import ButtonPanel from './components/ButtonPanel';
import Instruction from './components/Instruction';
import Results from './components/Results';
import './styles/global.css';

const App = () => {
	const [fileList, setFileList] = useState([]);
	const [results, setResults] = useState([]);
	const [fileFlag, setFileFlag] = useState(false);
	const [hintFlag, setHintFlag] = useState(false);

	const handleFileChange = value => {
		setFileList(value);
		if (value) {
			setFileFlag(true);
			setHintFlag(false);
		}
	};

	const onReadyCheck = () => {
		if (!fileFlag) {
			setHintFlag(true);
		}
	};

	const handleSubmit = () => {
		onReadyCheck();
		if (fileFlag) {
			const formData = new FormData();
			formData.append('file', fileList[0]);

			const options = {
				url: `http://localhost:5000/api/file-handler`,
				method: 'Post',
				data: formData,
				config: { headers: { 'Content-Type': 'multipart/form-data' } },
			};

			axios(options)
				.then(response => {
					setResults(response.data);
					// eslint-disable-next-line no-console
					console.log(response.data);
				})
				.catch(error =>
					// eslint-disable-next-line no-console
					console.log(error)
				);
		}
		return null;
	};

	const handleReset = () => {
		setFileList([]);
		setHintFlag(false);
		setResults([]);
		setFileFlag(false);
	};

	return (
		<div>
			<Layout>
				<Instruction />

				<FileReceiver
					fileList={fileList}
					handleFileChange={handleFileChange}
					showFileHint={hintFlag}
				/>
				<ButtonPanel handleSubmit={handleSubmit} handleReset={handleReset} />
				<Results results={results} />
			</Layout>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
