const { Dimensions } = require("react-native");
const { white, blueGrey100 } = require("react-native-paper/lib/typescript/src/styles/themes/v2/colors");

const deviceHeight=Dimensions.get('window').height;
const deviceWidth=Dimensions.get('window').width;
module.exports = {
    fullscreen: {
        backgroundColor: '#f0f4fd',
        height:deviceHeight,
        widht:deviceWidth,
        flex: 1,
      },
      flexBox: {
        margin: 15,
        flexDirection: 'columns',
      },
      outer: {
        margin: 20
      },
      titleContainer: {
        height: 50,
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
      logo: {
        height: 35,
        width: 35,
        borderRadius: 1000,
      },
      fabContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
      }
      ,
      titleText: {
        width: '40%',
        height: 50,
        maxWidth: 300,
        fontSize: 23,
        borderRadius: 30,
        fontFamily: 'Poppins-ExtraBold',
        color: 'black',
      },
      teamtitleText: {
        width: '50%',
        height: 50,
        maxWidth: 300,
        fontSize: 27,
        borderRadius: 30,
        fontFamily: 'Poppins-SemiBold',
        color: '#5a55ca',
      },
      dayContainer: {
        height: 50,
        flexDirection: 'row',
      },
      innerdayContainer: {
        height: 50,
        width: '65%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      dateText: {
        fontFamily: 'Poppins-Medium',
        color: '#8d98b0',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
      countContainer: {
        alignItems: 'center',
        padding: 10,
      },
      addButton: {
        backgroundColor: '#f26950',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: 100,
        height: 40,
      },
      addText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
      },
      calenderStyle: {
        height: 100,
        paddingTop: 30,
        paddingBottom: 10,
        fontFamily: 'Poppins-Regular',
      },
      //TaskItem Styling Starts
    
      teamFlex: {
        width: 300,
        height: 130,
        flexDirection: 'column',
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginLeft: 30,
        marginBottom: 10,
      },
      taskFlex: {
        width: 300,
        height: 170,
        flexDirection: 'column',
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10,
      },
      hairline: {
        backgroundColor: '#A2A2A2',
        height: 1,
        width: 250,
        marginLeft: 10,
      },
      firstflex: {
        color: 'red',
        padding: 10,
      },
      taskText: {
        color: '#8d98b0',
      },
      personText: {
        color: '#8d98b0',
        marginLeft: 10
      },
      teamBigText: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
      },
      secondSubFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      mainSecondFlex: {
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'center',
        paddingBottom: 0,
      },
      timeSlot: {
        color: 'black',
      },
      secondflex: {
        flexDirection: 'column',
      },
      flexIcon: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      iconStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },
  Addfullscreen: {
    height:deviceHeight,
    widht:deviceWidth,
    flex: 1,
    backgroundColor: '#5a55ca',
  },
  flexBox: {
    flexDirection: 'columns',
  },
  Addsubscreen: {
    // flex: 1,
    height:deviceHeight/8,
    marginBottom: 20,
  },

  modalSecondScreen: {
    backgroundColor: 'white',
    // padding: 30,
    marginLeft: 21,
    marginRight: 21,
    marginTop:25,
    flexDirection: 'column',
  },
  addSecondScreen: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    // paddingTop: 7,
    flexDirection: 'column',
  },
  error:{
    color:"red"
  },
  AddtitleText: {
    height: 50,
    maxWidth: 300,
    fontSize: 22,
    borderRadius: 30,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  dateInput: {
    borderColor: '#8d98b0',
    width: '96%',
    borderBottomWidth: 1,
    color: 'black',
    paddingVertical: 0,
  },
  input: {
    borderColor: '#8d98b0',
    borderBottomWidth: 1,
    color: 'black',
    paddingVertical: 0,
    fontFamily: 'Poppins-Regular',
  },
  Emailinput: {
    borderColor: '#8d98b0',
    width: '94%',
    marginBottom: 10,
    borderBottomWidth: 1,
    color: 'black',
    paddingVertical: 0,
    fontFamily: 'Poppins-Regular',
  },
  passwordinput: {
    borderColor: '#8d98b0',
    width: '94%',
    borderBottomWidth: 1,
    color: 'black',
    paddingVertical: 0,
    height:32,
    fontFamily: 'Poppins-Regular',
  },
  labelStyle: {
    color: 'black',
    marginLeft: 4,
    color: '#8d98b0',
    fontFamily: 'Poppins-Medium',
    marginTop:10
  },

  commonPadding: {},
  avatarText: {
    color: '#c2c9d7',
    fontFamily: 'Poppins-Regular',
  },
  timeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 43,
  },
  timeInput: {
    borderColor: '#8d98b0',
    borderBottomWidth: 1,
    color: 'black',
    width: '100%',
    paddingVertical: 0,
  },
  // submitBtn: {
  //   width: '100%',
  //   marginTop: 20,
  //   backgroundColor: '#5a55ca',
  //   color: 'white',
  // },
  submitBtn1: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#5a55ca',
    color: 'white',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45
  },
  loginText:{
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  sendOtp: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#5a55ca',
    color: 'white',
    marginBottom: 315,
  },

  AddTeamsubscreen: {
    flex: 1,
    marginBottom: 20,
  },
  Loginsubscreen: {
    // flex: 1,
    height:deviceHeight/8,
    marginBottom: 20,
  },
  loginSecondScreen: {
    // height: '100%',
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    paddingTop: 67,
    flexDirection: 'column',
  },
  registerSecondScreen: {
    flex:1,
    height: deviceHeight/1.15,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    // marginTop:10,
    flexDirection: 'column',
  },
  AddTeamSecondScreen: {
    // height: '90%',
    flex: 2,
    // width: '100%',
    backgroundColor: '#f0f4fd',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    flexDirection: 'column',
  },
  emaillabelStyle: {
    color: 'black',
    marginLeft: 4,
    color: '#8d98b0',
    fontFamily: 'Poppins-Medium',
    marginTop:15
  },

  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    height: '45%',
    width: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalTital: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: 20,
  },
  modalSubtital: {
    paddingTop: 20,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    color: 'grey',
  },

  orText:{
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5

  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop:15
  },
  grayLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  orText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // confirmationModal:{
  //   background:'blueGrey100',
  //   backgroundColor: 'white',
  //   padding: 20,
  //   height: '100%',
  //   width: '100%',
  //   borderRadius: 18,
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   zindex : 50
  // },
  confirmationModal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    height:'40%',
    width:'100%',
    zindex : 70
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmButton: {
    width: 100,
  },
  cancelButton: {
    width: 100,
  },
  confomationtex:{
    color:'black',
    fontFamily: 'Poppins-Regular', 
  }
};
