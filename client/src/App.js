import './css/app.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';
import Flash from './components/Flash';

function App() {
	const { loading, theme, flash } = useSelector(state => {
		return {
			loading: state.dataReducer.loading,
			theme: state.dataReducer.theme,
			flash: state.dataReducer.flash
		}
	});

	const lightTheme = createTheme({
		palette: {
			mode: theme,
		},
	});

	return (
		<>
			{
				flash && <Flash flash={flash} />
			}
			<ThemeProvider theme={lightTheme}>
				<Menu />
				{
					(loading)
						?
						<Loading loading />
						:
						<div className="container mt-5">
							<Routes>
								<Route path='/' element={<Home />} />
							</Routes>
						</div>
				}
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
