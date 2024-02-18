import { View, Text, Button, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import globalStyle from 'src/styles/GlobalStyles';

const ImagePick = ({imageData, setImageData}) => {

  useEffect(() => {
    console.log(imageData)
  }, [imageData])
  

  return (
    <View style={globalStyle().centerView}>
      {imageData.path && 
        <Image
        style={{width: 150, height: 150}}
        source={{
          uri: imageData?.path
        }}
        />
      }
      <Button title={"Pick Image"} onPress={() => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            // ImagePicker.clean()
            console.log(image);
            setImageData(image)
          });    
      }}/>
    </View>
  )
}

export default ImagePick