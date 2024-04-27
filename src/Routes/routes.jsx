import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../Layout/Layout';
import Tokenomics from '../Pages/Tokenomics';
import History from '../Pages/History';
import Elondao from '../Pages/Elondao';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'tokenomics',
				element: <Tokenomics />,
			},
			{
				path: 'history',
				element: <History />,
			},
			{
				path: 'elondao',
				element: <Elondao />,
			},
		],
	},
]);

export default router;
