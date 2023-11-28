import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import { Groups } from './src/screens/Groups';
import theme from './src/theme';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontload] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle='light-content'
      translucent
      backgroundColor='transparent'
      />
      {fontload ? <Groups /> : <Loading/>}
         
      </ThemeProvider>
  );
}