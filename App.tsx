import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { Platform, StatusBar } from 'react-native';

import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';

import { OneSignal } from 'react-native-onesignal';
import { CartContextProvider } from './src/contexts/CartContext';

const oneSignalAppId = Platform.OS === 'ios'
  ? process.env.EXPO_PUBLIC_ONE_SIGNAL_APP_ID_IOS
  : process.env.EXPO_PUBLIC_ONE_SIGNAL_APP_ID_ANDROID;

OneSignal.initialize(oneSignalAppId)

OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
