import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  BackHandler
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Styles/EditTaskStyle';
import AvatarImage from '../Components/Avatar/Avatar';
import {RadioButton} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import {useState,useEffect} from 'react';
import { ToastAndroid } from 'react-native';
const showSuccessToast = () => {
  ToastAndroid.showWithGravity('Task Edited sucessfully ', ToastAndroid.SHORT, ToastAndroid.TOP);
};
const showBackendErrorToast = () => {
  { ToastAndroid.showWithGravity('⚠️ Please Try again later !', ToastAndroid.SHORT, ToastAndroid.TOP) }
};
const EditTask = () => {
  const [checked, setChecked] = useState('first');
  useEffect(() => {
    const handleBackPress = () => {
      navigation.goBack();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [navigation]);
  const handleEditTask = () => {
    // logic here 
    showSuccessToast()
  };
  return (
    <ScrollView>
      <View style={styles.Addfullscreen}>
        <View style={styles.Addsubscreen}>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: 20}}>
            <Icon name="chevron-back" size={30} color="white" />
            <Text style={styles.AddtitleText}>Edit Task</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addSecondScreen}>
          <View style={{marginTop: 10}}>
            <Text style={styles.labelStyle}>TASK NAME</Text>
            <TextInput
              style={styles.input} // Adding hint in TextInput using Placeholder option.
              placeholder=""
              // Making the Under line Transparent.
              placeholderTextColor="#8d98b0"
              //   underlineColorAndroid="transparent"
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.labelStyle}>TEAM MEMBER</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AvatarImage text="Hindavi" />
            <AvatarImage text="John" />
            <AvatarImage text="Atharva" />
            <AvatarImage text="Hindavi" />
            <TouchableOpacity onPress={()=>console.warn('Pressed')}>
              <Avatar.Text
                style={{
                  marginTop: 10,
                  backgroundColor: '#8d98b0',
                  color: 'black',
                }}
                size={55}
                label="+"
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <View style={{marginTop: 10}}>
              <Text style={styles.labelStyle}>DESCRIPTION</Text>
              <TextInput
                style={styles.input} // Adding hint in TextInput using Placeholder option.
                placeholder=""
                // Making the Under line Transparent.
                placeholderTextColor="#8d98b0"
                //   underlineColorAndroid="transparent"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.labelStyle}>STATUS</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginLeft: 45,
                marginTop: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: 187,
                }}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                  color="red"
                />
                <Pressable
                  onPress={() => setChecked('first')}
                  style={{width: '50%'}}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 15,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    URGENT
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: 195,
                }}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                  color="green"
                />
                <Pressable
                  onPress={() => setChecked('second')}
                  style={{width: '50%'}}>
                  <Text
                    style={{
                      color: 'green',
                      fontSize: 15,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    RUNNING
                  </Text>
                </Pressable>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('third')}
                  color="#8e8cdb"
                />
                <Pressable
                  onPress={() => setChecked('third')}
                  style={{width: '50%'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      color: '#8e8cdb',
                      fontFamily: 'Poppins-Medium',
                    }}>
                    ONGOING
                  </Text>
                </Pressable>
              </View>
            </View>
            <Button
              style={styles.submitBtn}
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Done
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditTask;
