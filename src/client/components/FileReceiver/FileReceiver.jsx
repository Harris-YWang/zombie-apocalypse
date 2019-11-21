import React from 'react';
import { Upload, Icon } from 'antd';
import './FileReceiver.css';

const FileReceiver = props => {
	const { Dragger } = Upload;
	const { fileList, handleFileChange, showFileHint } = props;

	const handleChange = info => {
		if (info.file.status === 'removed') return null;
		let newfileList = [...fileList, info.file];
		// 1. Limit the number of uploaded files
		// Only to show one recent uploaded files, and old ones will be replaced by the new
		newfileList = newfileList.slice(-1);

		// 2. Read from response and show file link
		newfileList = newfileList.map(file => {
			if (file.response) {
				// Component will show file.url as link
				// eslint-disable-next-line no-param-reassign
				file.url = file.response.url;
			}
			return file;
		});
		handleFileChange(newfileList);
		return null;
	};

	const handleBeforeUpload = file => {
		const newFileList = [...fileList, file];
		handleFileChange(newFileList);
		return false;
	};

	const handleRemove = () => {
		const newFileList = [];
		handleFileChange(newFileList);
	};

	return (
		<div className="dragger-container">
			<Dragger
				fileList={fileList}
				name="file"
				multiple={false}
				accept=".txt"
				onChange={handleChange}
				beforeUpload={handleBeforeUpload}
				onRemove={handleRemove}
			>
				<p className="ant-upload-drag-icon">
					<Icon type="inbox" />
				</p>
				<p className="ant-upload-text">Click or drag file to this area to upload</p>
				<p className="ant-upload-hint">Support for a single TXT file upload.</p>
			</Dragger>
			{showFileHint ? <p className="choice_hint">Please upload a TXT file...</p> : null}
		</div>
	);
};

export default FileReceiver;
