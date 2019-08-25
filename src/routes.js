import React from 'react'
import { Image } from 'react-native'
import { createAppContainer,createStackNavigator } from 'react-navigation'
import Feed from './pages/Feed'
import logo from './assets/instagram.png'

const RootRouter = createStackNavigator(
{
    Feed
},
{
    headerLayoutPreset: 'center',
    defaultNavigationOptions:
    {
        headerTitle: <Image source={logo} />,
        headerStyle: 
        {
            backgroundColor: '#f5f5f5'
        }
    }
})


const Routes = createAppContainer(RootRouter)
export default Routes