// import LoginScreen from '../Components/LoginScreen'
import RegisterScreen from '../components/RegisterScreen';
// import HomeScreenLogged from '../Components/HomeScreenLogged';
// import ElderlyRegisterScreen from '../Components/ElderlyRegisterScreen';
import HomeScreen from '../components/HomeScreen';
// // import App from '../App';

const Routes = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            header: false
        }),

    },
    // Login: {
    //     screen: LoginScreen,
    //     navigationOptions: ({ navigation }) => ({
    //         header: false
    //     }),

    // },
    Register: {
        screen: RegisterScreen,
        navigationOptions: ({ navigation }) => ({
            header: false
        }),
    },
    
}


export default Routes