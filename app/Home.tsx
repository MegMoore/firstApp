import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Person from './components/person';
import * as ImagePicker from 'expo-image-picker';

const Home = () => {
    const [image, setImage] = useState<any>(null);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

  return (
    <View style={styles.container}>
      
      <Text>Hello Home React!</Text>
      <TextInput style={{backgroundColor: '#cfcfcf', width: 200 }}></TextInput>
      <Button title='Click Me' onPress={() => alert('Button Clicked')} />
      
     <Button title="Pick an image from camera roll" onPress={pickImage} />
     {image && <Image source={{ uri: image }} style={{ width: 200, height: 200}} />}
      

     {/* <ScrollView>
        {[...Array(30).keys()].map((_, i) => (
            <Person key={i} name={`Person ${i}`} />
        ))}
        </ScrollView>*/}
      
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Home