import React, {useState, useEffect} from 'react';

import {GameScreen, WebViewScreen} from 'screens';

import remoteConfig from '@react-native-firebase/remote-config';

import {IDFA} from 'react-native-idfa';

import appsFlyer from 'react-native-appsflyer';

import {
	appsflyerDevKey,
	bundleName,
} from './src/constants';


const App = () => {
	//get appsflyer unique device id
	const [appsflyer_id, setAppsflyer_id] = useState('');

	useEffect(() => {
		appsFlyer.getAppsFlyerUID((err, appsflyerUID) => {
			if (err) {
				console.error(err);
			} else {
				// console.log('on getAppsFlyerUID: ' + appsflyerUID);
				setAppsflyer_id(appsflyerUID);
			}
		});
	}, []);

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
			// if (fetchedRemotely) {
			// 	console.log('Configs were retrieved from the backend and activated. \n');
			// } else {
			// 	console.log(
			// 		'No configs were fetched from the backend, and the local configs were already activated \n',
			// 	);
			// }
		})
		.catch(er => console.error(er));
	}, []);

	//get google advertising id and set local (state) advertising_id value
	const [advertising_id, setAdvertising_id] = useState('');

	useEffect(() => {
		IDFA.getIDFA().then(idfa => {
			setAdvertising_id(idfa);
		})
		.catch(er => console.error(er));
	}, []);

	//set remote config dependent final URL
	const [remoteConfigFinalUrl, setRemoteConfigFinalUrl] = useState('');

	useEffect(() => {
		if (remoteConfigUrl && bundleName && appsflyerDevKey && advertising_id) {
			setRemoteConfigFinalUrl(`${remoteConfigUrl}?app_id=${bundleName}&authentication=${appsflyerDevKey}&appsflyer_id=${appsflyer_id}&advertising_id=${advertising_id}`);
		};
	}, [remoteConfigUrl, bundleName, appsflyerDevKey, appsflyer_id, advertising_id]);

	//set render component
	const [shouldRenderWebView, setShouldRenderWebView] = useState(false);

	useEffect(() => {
		if (depend_on === 'remote_config'
			&& remoteConfigUrl && bundleName && appsflyerDevKey && advertising_id) {
			setShouldRenderWebView(true);
		}
	}, [remoteConfigFinalUrl, depend_on]);

	return (
		<>
			{shouldRenderWebView && (
				<WebViewScreen url={remoteConfigFinalUrl} />
			)}
			{!shouldRenderWebView && (
				<GameScreen />
			)}
		</>
	);
};

export default App;
