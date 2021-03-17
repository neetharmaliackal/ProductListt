import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import HomeStackNavigator from "./src/Navigations/Navigator"
import { createStackNavigator } from '@react-navigation/stack'
import {Home,Privacy,Contacts,Explore} from './src/Screens'
export default function App() {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <>
            
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Privacy" component={Privacy}/>
            <Stack.Screen name="Contacts" component={Contacts}/>
            <Stack.Screen name="Explore" component={Explore}/>
          </>
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}
// export default App;
// -----
// const Stack = createStackNavigator();

// export default function App() {

//   const [loading, setLoading] = useState(true)
//   const [user, setUser] = useState(null)

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* { user ? (
//           <Stack.Screen name="Home">
//             {props => <HomeScreen {...props} extraData={user} />}
//           </Stack.Screen> */}
//         {/* ) : ( */}
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Registration" component={RegistrationScreen} />
//             <Stack.Screen name="HomeScreen" component={HomeScreen}/>
//             <Stack.Screen name="AboutScreen" component={AboutScreen}/>
//           </>
//         {/* )} */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }