import { StyleSheet, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { TextInput, Card, Button, Divider, Text } from 'react-native-paper';
import globalStyle from 'src/styles/GlobalStyles';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker'
import TouchButton from 'src/components/TouchButton';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({
        fname: '',
        lname: '',
        address: '',
        gender: '',
        birthday: '',
        profileImage: '',
    })
    
    
    const userData = useSelector(state => state.user)
    const [user, setUser] = useState(userData?.data?.id ? true : false)

    const dropdownOptions = [
        {label: "male" , value: "male"},
        {label: "female" , value: "female"},
        {label: "prefer not to say" , value: "prefer not to say"},
    ]
    const [dropdownFocus, setDropdownFocus] = useState(false)


    const [date, setDate] = useState(new Date())
    const [dateOpen, setDateOpen] = useState(false)
    
    
    useEffect(() => {
        setUser(userData?.data?.id ? true : false)
        console.log(userData)
      }, [userData])

    return (
        <Card flex={1}>
            {/* <Card.Title title="Create Profile information" subtitle="" icon="folder" /> */}
            {/* <Card.Cover style={globalStyle(15).container} source={{ uri: 'https://picsum.photos/700' }} /> */}
            <Card.Content>
                <TextInput
                    label="First Name"
                    value={userInfo.fname}
                    onChangeText={text => setUserInfo(prevState => ({...prevState, fname: text}))}
                />
                <TextInput
                    label="Last Name"
                    value={userInfo.lname}
                    onChangeText={text => setUserInfo(prevState => ({...prevState, lname: text}))}
                />
                <TextInput
                    label="Address"
                    value={userInfo.address}
                    onChangeText={text => setUserInfo(prevState => ({...prevState, address: text}))}
                />
                <Dropdown 
                    style={[styles.dropdown, dropdownFocus && { borderColor: 'blue', backgroundColor: 'rgba( 191,148,228, 0.2)' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dropdownOptions}
                    // search
                    // searchPlaceholder="Search..."
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!dropdownFocus ? 'Select item' : '...'}
                    onFocus={() => setDropdownFocus(true)}
                    onBlur={() => setDropdownFocus(false)}
                    value={userInfo.gender}
                    onChange={item => {
                        setUserInfo(prevState => ({...prevState, gender: item.value}))
                        setDropdownFocus(false);
                    }}
                />
                <Divider></Divider>
                <View style={globalStyle().inline}>
                    <Text>Birth Date:</Text>
                    <Button onPress={() => setDateOpen(true)} >{userInfo.birthday ? userInfo.birthday:"Set Birthdate"}</Button>
                </View>
                <DatePicker
                    modal
                    mode="date"
                    open={dateOpen}
                    date={date}
                    onConfirm={(date) => {
                        setDateOpen(false)
                        setUserInfo(prevState => ({...prevState, birthday: JSON.stringify(date).slice(1,11)}))
                        // setDate(date)
                    }}
                    onCancel={() => {
                        setDateOpen(false)
                    }}
                />
            </Card.Content>
            <Card.Actions>
                {/* <Button>Cancel</Button> */}
                <Button onPress={() => {console.log(userInfo)}}>Update</Button>
            </Card.Actions>
        </Card>
    );
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'rgba( 191,148,228, 0.2)',
        padding: 16,
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        paddingHorizontal: 8,
        backgroundColor: 'rgba( 191,148,228, 0.2)' 
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 22,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
        paddingHorizontal: 10,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})