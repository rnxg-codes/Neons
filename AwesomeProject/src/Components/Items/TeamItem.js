import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../Styles/Teamlist';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
const TeamItem = props => {
    const appFun = (id,teamTitle) => {
        console.log(id)
        props.setteamId(id)
        props.navigation.navigate("TaskList",{
             post: id ,
             teamTitle:teamTitle
          });
    }
    const deleteId = (id) => {
        console.log(id)
        props.setteamId(id)
       props.deleteTeam(id)
    }
    const handleModal=(title,desc,id)=>{
        props.setteamId(id)
        props.handleEditClick()
        props.setFormData({ editTitle: title ,editDesc:desc});
    }
    // props.setFormData({ fieldName: "existingValue" });
    // const [statusColor, setStatusColor] = useState("");
    status = props.status;
    return (
        <View style={styles.teamFlex}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            </View>
            <View style={styles.mainSecondFlex}>
                <View style={styles.secondflex}>
                    <View style={styles.secondSubFlex}>
                        <Text style={styles.teamBigText}>{props.title}</Text>
                        <TouchableOpacity>
                            <Icon name='md-arrow-forward-circle-sharp' onPress={() => appFun(props.items._id,props.title)} size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.taskText}>{props.desc}</Text>
                </View>
                <View style={styles.flexIcon}>

                    {/* <View style={styles.iconStyle}> */}
                        <View style={{flexDirection:"row"}}>
                        <TouchableOpacity>
                            <Icon name="people" size={18} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.personText}>{props.person} Persons</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>handleModal(props.title,props.desc,props.items._id)}>

                            <Icon name="md-pencil-outline" size={20} style={{color:'black',marginRight:15}} />
                        </TouchableOpacity>
                           <TouchableOpacity onPress={() => deleteId(props.items._id)}>

                            <Icon name='md-trash' size={20} style={{color:'black'}} icon="delete" />
                           </TouchableOpacity>
                        </View>
                    {/* </View> */}
                </View>
            </View>
        </View>
    );
};

export default TeamItem;