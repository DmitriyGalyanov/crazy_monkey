/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import GameScreen from 'screens/GameScreen';
// import WebViewScreen from 'screens/WebViewScreen';

import remoteConfig from '@react-native-firebase/remote-config';
import { Text } from 'react-native';


const App = () => {
		//gather remote config value(s) and set appropriate local (state) values
		const [depend_on, setDepend_on] = useState('game');
		const [remoteConfigUrl, setRemoteConfigUrl] = useState('');
	
		useEffect(() => {
			remoteConfig()
			.setDefaults({
				'depend_on': 'game', //'game' || 'remote_config'
				'url': '',
			})
			.then(() => {
				return remoteConfig().setConfigSettings({
					minimumFetchIntervalMillis: 10000,
				})
			})
			.then(() => remoteConfig().fetchAndActivate())
			.then(fetchedRemotely => {
				setDepend_on(remoteConfig().getValue('depend_on').asString());
				setRemoteConfigUrl(remoteConfig().getValue('url').asString());
			})
			.catch(er => console.error(er));
		}, []);

	//set render component
	const [shouldRenderWebView, setShouldRenderWebView] = useState(false);

	useEffect(() => {
		console.log('Depend on:', depend_on, 'URL:', remoteConfigUrl)
		if (depend_on === 'remote_config') {
			setShouldRenderWebView(true);
		}
	}, [remoteConfigUrl, depend_on]);

	return (
		<>
			{shouldRenderWebView && (
				// <WebViewScreen url={remoteConfigUrl} />
				<Text>TEST</Text>
			)}
			{!shouldRenderWebView && (
				<GameScreen />
			)}
		</>
	);
};

export default App;