import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import styles from '../Styles/Home';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarStrip from 'react-native-calendar-strip';
import TaskItem from '../Components/Items/TaskItem';
import {Modal, Button} from 'react-native-paper';
import {FAB, Provider, DefaultTheme, Portal} from 'react-native-paper';
import AddTask from './AddTask';
import TeamMember from '../Components/Teams/TeamMember';
import styles1 from '../Styles/TasklistStyle';
import ToastComponent from '../Components/Toast/toast';
import CircularProgressBar from '../Components/CircularProgressBar';
const handleSuccess = () => {
  ToastComponent({message: 'Task Updated Sucessfull'});
};

const handleBackendError = () => {
  ToastComponent({message: '⚠️ Please Try again later!'});
};
const currentDate = moment().format('MMMM DD, YYYY');

const TaskList = ({navigation, route}) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [memberTeam, setmemberTeam] = useState(false);
  const [formData, setFormData] = useState({
    editTitle: '',
    editDesc: '',
    endDate: '',
  });
  const [resultTeamMemberData, setresultTeamMemberData] = useState('');
  const [fetchTask, setfetchTask] = useState([]);
  const [teamMembers, setteamMembers] = useState('');
  const [taskId, settaskId] = useState('');
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({open: false});
  const [refreshing, setRefreshing] = useState(false);
  const onStateChange = ({open}) => setState({open});
  const {open} = state;
  const teamIdByItem = route.params.post; //id by teamItem
  const teamTitle = route.params.teamTitle; //id by teamItem

  const showModal = () => {
    console.log('preesed');
    setVisible(true);
  };
  const hideModal = () => setVisible(false);
  const containerMemberStyle = { backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10, borderRadius: 20, width: 330, marginLeft: 10, height: 600 };
  const containerStyle = { backgroundColor: 'white', padding: 30, borderRadius: 20, width: 340, marginLeft: 10 };
  const addtaskcontainerStyle = { backgroundColor: 'white',  borderRadius: 20, width: 340, marginLeft: 10, height: 450 };

  const handleSubmit = () => {
    hideModal();
    handleAddMember();
  };
  const handleEditClick = () => {
    setIsModalVisible(true);
  };

  const editTask = async (teamId, taskId) => {
    setIsModalVisible(false);
    fetch(`https://tsk-final-backend.vercel.app/api/task/${teamId}/updatetask/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskName: formData.editTitle,
        taskDesc: formData.editDesc,
        endDate: formData.endDate,
      }),
    })
      .then(ToastComponent({message: 'Task Edited sucessfully !'}))
      .catch(err => {
        console.log(err);
        handleBackendError();
      });
  };
  const fetchTasks = async () => {
    try {
      const response = await fetch(
        `https://tsk-final-backend.vercel.app/api/task/${teamIdByItem}/fetchtasks`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      setfetchTask(data.tasks);
      ToastComponent({message: 'Task Fetched !'});
      setTimeout(() => {
        setRefreshing(false);
        console.log('after', refreshing);
      }, 1200);
    } catch (error) {
      console.log(error);
      handleBackendError();
    }
  };
  const refreshfetchTasks = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(
        `https://tsk-final-backend.vercel.app/api/task/${teamIdByItem}/fetchtasks`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
        // .then( ToastComponent({ message: '' }) )
      );

      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      setfetchTask(data.tasks);
      console.log('Data', fetchTask);
      console.log('Before', refreshing);
      setTimeout(() => {
        setRefreshing(false);
        console.log('after', refreshing);
      }, 1200);
    } catch (error) {
      console.log(error);
      handleBackendError();
    }
  };

  const fetchMembers = async () => {
    // console.log("Hey")
    fetch('https://tsk-final-backend.vercel.app/api/members/getuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setresultTeamMemberData(data);
      })
      .then(ToastComponent({message: 'Members Fetched'}))
      .catch(err => {
        console.log(err);
        handleBackendError();
      });
  };
  const fetchTeamMembers = async () => {
    // console.log("Hey")
    fetch(`https://tsk-final-backend.vercel.app/api/team/${teamIdByItem}/getmembers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NDExNWE4OWM2YzBkNWVkM2NkZjk1In0sImlhdCI6MTY4NDUxMzMxNn0.jSfavFDUHDr0Kc4AB-nj6ySuuaB04b7tuQEgHKBo1og',
      },
    })
      .then(response => response.json())
      .then(data => {
        setteamMembers(data);
      })

      .then(ToastComponent({message: ' Team Members Fetched'}))
      .catch(err => {
        console.log(err);
        handleBackendError();
      });
  };

  const deleteTask = async (teamId, taskId) => {
    try {
      const response = await fetch(
        `https://tsk-final-backend.vercel.app/api/task/${teamId}/deletetask/${taskId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.ok) {
        console.log(`Team with ID ${teamId} deleted successfully`);
        fetchTasks();
        ToastComponent({message: 'Team Deleted successfully'});
      } else {
        console.log(`Error deleting team with ID ${teamId}`);
      }
    } catch (error) {
      console.log(error);
      handleBackendError();
    }
  };
  const handleAddMember = async () => {
    fetch(`https://tsk-final-backend.vercel.app/api/team/${teamIdByItem}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NDExNWE4OWM2YzBkNWVkM2NkZjk1In0sImlhdCI6MTY4NDUxMzMxNn0.jSfavFDUHDr0Kc4AB-nj6ySuuaB04b7tuQEgHKBo1og',
      },
      body: JSON.stringify({
        selectedIds: selectedIds,
      }),
    })
      .then(response => {
        console.log('Response status code:', response.status);
        return response.text();
      })
      .then(text => {
        console.log('Response body text:', text);
        try {
          const data = JSON.parse(text);
          console.log(data);
        } catch (err) {
          console.log('Error parsing JSON:', err.message);
        }
      })
      .then(ToastComponent({message: 'Members added sucessfully '}))
      .catch(err => {
        console.log('Error: ' + err.message);
        handleBackendError();
      });
  };
  // console.log(props.route)
  useEffect(() => {
    // fetchData()
    fetchMembers();
    fetchTasks();
  }, []);

  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(3, 'days'), // total 1 days enabled
    },
  ];
  // let datesBlacklist = [ moment().add(1, 'days') ]; // 1 day disabled
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <Provider theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, accent: 'transparent' } }}>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refreshfetchTasks}
        />
      }>

        {/* Edit Task Modal Starts */}
        <Portal>
          <Modal
            visible={isModalVisible}
            onDismiss={handleModalClose}
            contentContainerStyle={containerStyle}>
            <Text style={styles1.emaillabelStyle}>Edit Task Title</Text>
            <TextInput
              style={[
                styles1.Emailinput,
                {backgroundColor: 'transparent', height: 40},
              ]}
              placeholder="Team Name"
              placeholderTextColor="#8d98b0"
              value={formData.editTitle}
              onChangeText={value =>
                setFormData({...formData, editTitle: value})
              }
            />

            <Text style={styles1.emaillabelStyle}>Edit Task Description</Text>
            <TextInput
              style={[
                styles1.Emailinput,
                {backgroundColor: 'transparent', height: 40},
              ]}
              placeholder="Team Description"
              placeholderTextColor="#8d98b0"
              value={formData.editDesc}
              onChangeText={value =>
                setFormData({...formData, editDesc: value})
              }
            />
            <View>
              <Text style={styles1.emaillabelStyle}>Edit End Date</Text>
              <TextInput
                style={[
                  styles1.Emailinput,
                  {backgroundColor: 'transparent', height: 40},
                ]}
                placeholder="Team Enddate"
                placeholderTextColor="#8d98b0"
                value={formData.endDate}
                onChangeText={value =>
                  setFormData({...formData, endDate: value})
                }
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 290,
                marginLeft: 15,
              }}>
              <Button icon="close" mode="contained" onPress={handleModalClose}>
                Close
              </Button>
              <Button
                icon="check"
                mode="contained"
                onPress={() => editTask(teamIdByItem, taskId)}
                style={{marginLeft: 5}}>
                Done
              </Button>
            </View>
          </Modal>
        </Portal>
        {/* Edit Task Modal Ends */}
        {/* Listing to add team members starts */}
        <Portal>
          <Modal
            visible={memberTeam}
            onDismiss={() => setmemberTeam(false)}
            contentContainerStyle={containerMemberStyle}>
            <ScrollView>
              {resultTeamMemberData.length === 0 ? (
                <View
                  style={{
                    width: 360,
                    height: 500,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 20,
                      padding: 20,
                      marginTop: 140,
                      textAlign: 'center',
                      letterSpacing: 1.5,
                    }}>
                    You don't have Teams to Display
                  </Text>
                </View>
              ) : (
                resultTeamMemberData.map(items => (
                  <TeamMember
                    designation={items.designation}
                    id={items._id}
                    name={items.name}
                    selectedIds={selectedIds}
                    setSelectedIds={setSelectedIds}
                  />
                ))
              )}
            </ScrollView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: 290,
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Button
                icon="close"
                mode="contained"
                onPress={() => setmemberTeam(false)}
                style={{marginLeft: 25}}>
                Close
              </Button>
              <Button
                icon="check"
                mode="contained"
                onPress={handleSubmit}
                style={{marginLeft: 5}}>
                Add Member
              </Button>
            </View>
          </Modal>
        </Portal>
        {/* Listing to add team members end */}
        {/* Add task Modal start */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={addtaskcontainerStyle}>
            <AddTask hideAddModal={hideModal} teamIdByItem={teamIdByItem} />
          </Modal>
        </Portal>
        {/* Add task Modal end */}

        <ScrollView>
          <View style={[styles.fullscreen]}>
            <View style={styles.outer}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={styles.titleContainer}>
                  <Text style={[styles.titleText]}>{teamTitle}</Text>
                </View>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={fetchTeamMembers}>
                  <Text style={styles.addText}>View Team</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dayContainer}>
                <View style={styles.innerdayContainer}>
                  <Text style={[styles.dateText]}>{currentDate}</Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#ffff',
                    width: '50%',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 16,
                      fontStyle: 'Bold',
                      color: 'black',
                      textAlign: 'center',
                    }}>
                    Tasks Progress
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 34,
                      marginTop: 10,
                    }}>
                    <Icon name="square" color={'#336EFF'} size={14}></Icon>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        marginLeft: 5,
                        fontSize: 14,
                        color: 'black',
                      }}>
                      {' '}
                      Completed
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 34,
                      marginTop: 5,
                    }}>
                    <Icon name="square" color={'#D0D2D7'} size={14}></Icon>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        marginLeft: 5,
                        fontSize: 14,
                        color: 'black',
                      }}>
                      {' '}
                      Pending
                    </Text>
                  </View>
                </View>

                <View
                  style={[
                    styles1.pbView,
                    {width: '50%', justifyContent: 'center'},
                  ]}>
                  <View style={styles1.pbStyle}>
                    <CircularProgressBar
                      selectedValue={60}
                      maxValue={100}
                      radius={50}
                      activeStrokeColor="#0f4fff"
                      withGradient
                    />
                  </View>
                </View>
              </View>

              <CalendarStrip
                onDateSelected={date => console.log(date)}
                calendarAnimation={{type: 'sequence', duration: 30}}
                daySelectionAnimation={{
                  type: 'border',
                  duration: 200,
                  borderWidth: 1,
                  borderHighlightColor: 'black',
                }}
                style={styles.calenderStyle}
                calendarHeaderStyle={{color: 'black'}}
                // calendarColor={'#7743CE'}
                dateNumberStyle={{color: 'black'}}
                dateNameStyle={{color: '#8d98b0'}}
                highlightDateNumberStyle={{color: '#5a55ca'}}
                highlightDateNameStyle={{color: '#5a55ca'}}
                disabledDateNameStyle={{color: 'black'}}
                disabledDateNumberStyle={{color: 'black'}}
                datesWhitelist={datesWhitelist}
                // datesBlacklist={datesBlacklist}
                // iconLeft={require('./img/left-arrow.png')}
                // iconRight={require('./img/right-arrow.png')}
                iconContainer={{flex: 0.1}}
              />
            </View>
            {fetchTask.length === 0 ? (
              <View
                style={{
                  width: 360,
                  height: 500,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 20,
                    padding: 20,
                    marginTop: 100,
                    textAlign: 'center',
                    letterSpacing: 1.5,
                  }}>
                  You don't have Tasks to Display
                </Text>
                <Button
                  icon="plus"
                  mode="contained"
                  onPress={() => showModal()}
                  style={{width: 150}}>
                  Add Task
                </Button>
              </View>
            ) : (
              fetchTask.map(items => {
                return (
                  <TaskItem
                    status={items.status}
                    handleEditClick={handleEditClick}
                    settaskId={settaskId}
                    setIsModalVisible={setIsModalVisible}
                    setFormData={setFormData}
                    id={items._id}
                    title={items.taskName}
                    desc={items.taskDesc}
                    time={items.endDate}
                    teamIdByItem={teamIdByItem}
                    deleteTask={deleteTask}
                    taskI
                  />
                );
              })
            )}
          </View>
        </ScrollView>
        <Portal>
          <FAB.Group
            open={open}
            fabStyle={styles.fab}
            visible
            icon={open ? 'chevron-down' : 'plus'}
            actions={[
              {
                icon: 'plus',
                label: 'Add Task',
                onPress: () => showModal(),
              },
              {
                icon: 'plus',
                label: 'Add Team Members',
                onPress: () => setmemberTeam(true),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
            overlayColor="transparent"
          />
        </Portal>
      </ScrollView>
    </Provider>
  );
};

export default TaskList;
