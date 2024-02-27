import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ContainerMenu } from '../components/ContainerMenu'
import { Button } from '../components/Button'
import { Text } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../context'
import { Styles } from '../styles'
import { Details, MusicListing } from '../pages/Music'
import { Playlist } from '../pages/Playlist'
import { Profile } from '../pages/Profile'
import { Home } from '../pages/Home'

const Drawer = createDrawerNavigator()

const AuthenticateRoutes = () => {
  const { logout } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <ContainerMenu>
              <Text>Menu</Text>
              <Button
                title="Home"
                onPress={() => props.navigation.navigate('Home')}
              ></Button>
              <Button
                title="Músicas"
                onPress={() => props.navigation.navigate('Music')}
              ></Button>
              <Button
                title="Playlists"
                onPress={() => props.navigation.navigate('Playlist')}
              ></Button>
              <Button
                title="Meu perfil"
                onPress={() => props.navigation.navigate('Profile')}
              ></Button>
              <Button title="Sair" onPress={() => logout()}></Button>
            </ContainerMenu>
          )
        }}
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: Styles.color.white,
          },
          headerStyle: {
            backgroundColor: Styles.color.secondary,
          },
        })}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: 'Home',
            headerTitle: 'Home',
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Music"
          options={{
            drawerLabel: 'Músicas',
            headerTitle: 'Músicas',
          }}
          component={MusicListing}
        />
        <Drawer.Screen
          name="Playlist"
          options={{ drawerLabel: 'Playlists', headerTitle: 'Playlists' }}
          component={Playlist}
        />
        <Drawer.Screen
          name="Profile"
          options={{ drawerLabel: 'Meu perfil', headerTitle: 'Meu perfil' }}
          component={Profile}
        />
        <Drawer.Screen
          name="Details"
          options={{ drawerLabel: 'Detalhes', headerTitle: 'Detalhes' }}
          component={Details as any}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AuthenticateRoutes
