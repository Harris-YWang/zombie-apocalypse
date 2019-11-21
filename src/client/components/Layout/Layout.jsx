import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from './Header';
import './Layout.css';

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			Copyright ©
			<Link color="inherit" href="https://github.com/Harris-YWang">
				Harris Wang
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	main: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
	},
	footer: {
		padding: theme.spacing(2),
		marginTop: 'auto',
		backgroundColor: 'white',
	},
}));

const Layout = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Header />
			<CssBaseline />
			<Container component="main" className={classes.main} maxWidth="sm">
				<Typography variant="h4" component="h2" className="title">
					Zombie Game
				</Typography>
			</Container>
			<Container>{children}</Container>
			<footer className={classes.footer}>
				<Container maxWidth="sm">
					<Copyright />
				</Container>
			</footer>
		</div>
	);
};

export default Layout;
