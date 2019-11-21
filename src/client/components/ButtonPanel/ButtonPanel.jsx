import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';

import './ButtonPanel.css';

const ButtonPanel = props => {
	const { handleSubmit, handleReset } = props;
	const useStyles = makeStyles(theme => ({
		button: {
			margin: theme.spacing(1),
		},
	}));
	const classes = useStyles();

	return (
		<div className="submit-area">
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				endIcon={<SendIcon />}
				onClick={handleSubmit}
			>
				View Results
			</Button>
			<Button
				variant="contained"
				color="secondary"
				className={classes.button}
				startIcon={<DeleteIcon />}
				onClick={handleReset}
			>
				Reset
			</Button>
		</div>
	);
};

export default ButtonPanel;
