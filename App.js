import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculadoraScreen from './screens/CalculadoraScreen';
import { Layout } from './components';
import {Button} from 'react-native-web';

export default function App() {
  return (
    <Layout title="Contacto">
      <Button 
      title='Agregar'
      color="#c88383ff" />
    </Layout>

  );
}

//const styles = StyleSheet.create({
  //container: {
   // flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});
