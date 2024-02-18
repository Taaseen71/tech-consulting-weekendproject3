import { View, Text, Button } from 'react-native'
import React,{ useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from 'src/features/user/userSlice'
import { kApiLogOut } from 'src/config/WebService'
import { Drawer, Divider } from 'react-native-paper';

const HomeScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [active, setActive] = useState('');
  const [openMenu, setOpenMenu] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="☰" onPress={() => setOpenMenu(!openMenu)} />
      ),
    });
  }, [openMenu]);

  


  
  return (
    <View>
      {/* <Button title='Log Out' onPress={() => {
       dispatch(logOutUser({
          url: kApiLogOut, 
          // access_token: user?.data?.id
        })) 
      }}/> */}
      {/* <Button title='Fetch' onPress={() => {navigation.navigate('Fetch')}}/> */}
      {!!openMenu &&
        <View> 
          <Drawer.Section title="Menu">
            <Drawer.Item
              label="User Profile"
              active={active === 'first'}
              onPress={() => {
                setActive('first')
                navigation.navigate('UserProfile')
              }}
            />
            <Drawer.Item
              label="Fetch Page"
              active={active === 'second'}
              onPress={() => {
                setActive('second')
                navigation.navigate('Fetch')
              }}
            />
            <Drawer.Item
              label="Log Out"
              active={active === 'third'}
              onPress={() => {
                  setActive('second')
                  dispatch(logOutUser({
                  url: kApiLogOut, 
                  // access_token: user?.data?.id
                })) }
              }
            />
          </Drawer.Section>
        </View>
      }
      

  
    </View>
  )
}

export default HomeScreen