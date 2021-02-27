import React from 'react';

import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => {
	return (
		<>
			<StatusBar
				barStyle='dark-content'
				backgroundColor='#ddd'
			/>
			<Routes />
		</>
	);
};

export default App;
