import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import Form from "../screens/Form";

const AppNavigator = createStackNavigator({
    Inicio: {
      screen: HomeScreen,
    },
    Formulario: {
      screen: Form
    }
  });

  export default createAppContainer(AppNavigator);