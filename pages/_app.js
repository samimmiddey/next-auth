import { ThemeProvider, createTheme } from '@mui/material';
import '../styles/globals.css';
import store from '../src/Store/store';
import Navbar from '../src/components/Navigation/Navbar';
import { Provider } from 'react-redux';
import ErrorModal from '../src/components/Utils/ErrorModal';
import ProtectedRoute from '../src/components/Auth/ProtectedRoute/ProtectedRoute';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 480,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1400,
		},
	},
	palette: {
		primary: {
			main: 'rgb(90, 57, 161)',
		},
		secondary: {
			main: 'rgb(132, 76, 196)',
		},
		text: {
			primary: '#222',
			secondary: '#868395',
			disabled: '#a19fad',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			 @font-face {
				font-family: 'Inter';
				font-style: normal;
				font-weight: 400;
			 }
		  `,
		},
		MuiCard: {
			styleOverrides: {
				root: {
					border: 'none',
					borderRadius: '10px',
					boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px'
				}
			}
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			}
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			}
		}
	}
});

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Navbar />
				<ErrorModal />
				<ProtectedRoute>
					<Component {...pageProps} />
				</ProtectedRoute>
			</Provider>
		</ThemeProvider>
	);
};

export default MyApp;
