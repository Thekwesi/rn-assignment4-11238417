import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, FlatList } from 'react-native';


const Stack= createStackNavigator();

function LoginScreen({navigation}) {
  const [query, setQuery] = useState('');
  const [txt, setTxt] = useState('');
 
  const handleSearch = text => {
    setQuery(text);
  };
  const searchHandle = text => {
    setTxt(text);
  };
  return (
    
    
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
      <View style={styles.jobizzContainer}>
          <Image source={require('./assets/Jobizz.jpg')} />
        </View>
        <View style={styles.group46Container}>
          <Image source={require('./assets/Group 46.jpg')} />
        </View>
        <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={handleSearch}
        placeholder=" Name"
      />
      </View>
      <View style={styles.searchContainer}>
      <TextInput
        style={styles.secondsearchInput}
        value={txt}
        onChangeText={searchHandle}
        placeholder="  Email"
      />
      </View>
      <Pressable style={styles.button} 
       onPress={() => navigation.navigate('homepage',{txt,query})}>
        <Text style={styles.text}>
          Log in</Text>
      </Pressable>
      <Text style={styles.orContinue}>
            Or continue with
            </Text>
      <View style={styles.group57Container}>
          <Image source={require('./assets/Group 57.jpg')} />
        </View>
        <View>
          <Text style={styles.Textalign}>
            Don't have an account? <Text style={{color:'blue', textDecorationLine:'underline'}}>
              Register
            </Text>
            </Text>
        </View>
      <StatusBar style="auto" />
      </View>
      </ScrollView>
    
    
  );
}
function RegisterScreen({route}) {
  const data = [
    { id: 1,
      name:"$180,00",
      title: "Accra,Ghana",
      position: 'Software Engineer',
      company: 'Facebook',
      image: require('./assets/facebook.png'),
      color:'#6495ED'
    },
    { id: 2,
      name:"$160,00",
      title: "Kumasi,Ghana",
      position: 'Front-End Developer',
      company: 'Google',
      image: require('./assets/bettergoogle.jpeg'),
      color: '#00308F'
    },  
    { id: 3,
      name:"$70,00",
      title: "Dansoman,Ghana",
      position: 'Sales Manager',
      company: 'Burger King',
      image: require('./assets/burger-king-4 1.jpg'),
      color: '#A1CAF1'
    },
      { id: 4,
      name:"$210,00",
      title: "Tema,Ghana",
      position: 'Software Engineer',
      company: 'Beats',
      image: require('./assets/image 8.jpg'),
      color: '#b90e08'
    },
    { id: 5,
      name:"$30,00",
      title: "Accra,Ghana",
      position: 'Sales person',
      company: 'Kentucky Fried Chicken',
      image: require('./assets/betterkfc.jpg'),
      color: 'black'
    },
    { id: 6,
      name:"$190,00",
      title: "Accra,Ghana",
      position: 'Back-End Developer',
      company: 'MTN Ghana',
      image: require('./assets/mtnlogo.jpeg'),
      color: '#F4C430'
    },
    { id: 7,
      name:"$210,00",
      title: "Accra,Ghana",
      position: 'App Developer',
      company: 'Bank of Ghana',
      image: require('./assets/bog-logo.png'),
      color: '#3B3C36',
    },
    { id: 8,
      name:"$230,00",
      title: "Accra,Ghana",
      position: 'UI/UX Designer',
      company: 'Tesla',
      image: require('./assets/Tesla-Logo.png'),
      color: '#E3242B'
    },
  ];
    const popularjobs = [
      {
        index:1,
        jobtitle: 'Jr Executive',
        workplace:'Burger King',
        pay:'$96,000/y',
        location: 'Los Angeles, US',
        image: require('./assets/burger-king-4 1.jpg')
      },
      {
        index:2,
        jobtitle: 'Product Manager',
        workplace:'Beats',
        pay:'$84,000/y',
        location: 'Florida, US',
        image: require('./assets/image 8.jpg')
      },
      {
        index:3,
        jobtitle: 'App Tester',
        workplace:'Facebook',
        pay:'$60,000/y',
        location: 'Atlanta, US',
        image: require('./assets/Vector.jpg')
        
      },
      {
        index:4,
        jobtitle: 'App Tester',
        workplace:'Apple',
        pay:'$86,000/y',
        location: 'Los Angeles, US',
        image: require('./assets/betterapple.jpeg')
      },
      {
        index:5,
        jobtitle: 'Office Manager',
        workplace:'Google',
        pay:'$72,000/y',
        location: 'Washington, US',
        image: require('./assets/bettergoogle.jpeg')
        },
        {
          index:6,
          jobtitle: 'Salesman',
          workplace:'KFC',
          pay:'$86,000/y',
          location: 'Dansoman, Ghana',
          image: require('./assets/betterkfc.jpg')
        },
        {
          index:7,
          jobtitle: 'Bank Consultant',
          workplace:'Bank of Ghana',
          pay:'$10,000/y',
          location: 'Accra, Ghana',
          image: require('./assets/bog-logo.png')  
        },
        {
          index:8,
          jobtitle: 'Product Manager',
          workplace:'Tesla',
          pay:'$100,000/y',
          location: 'Miami, US',
          image: require('./assets/Tesla-Logo.png')
          
        },
    ];
    
  const [letter,setLetter]= useState('');

  const jobSearchbar = text => {
    setLetter(text);
  };
  
  const {txt,query } = route.params;
  return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.container2}>
    <View >
        <Image source={require('./assets/profilepic.png')}
        style={styles.personContainer}
        />
      </View>
    <Text style={styles.welcomeMessage}>{query}</Text>
      <Text style={styles.emailMessage}>{txt}</Text>
    <View style={styles.jobSearchContainer}>
      <TextInput
        style={styles.jobSearchInput}
        value={letter}
        onChangeText={jobSearchbar}
        placeholder= " Search a job or position"
        />
        </View>
        <View >
        <Image source={require('./assets/Rectangle 10.png')}
        style={styles.rectangleContainer}
        />
      </View>
      <View >
        <Image source={require('./assets/filter.5.png')}
        style={styles.filterContainer}
        />
      </View>
    <Text style={styles.textformat2}>See All</Text>
    <Text style={styles.textformat}>Featured Jobs</Text>
    <FlatList
        horizontal={true}
        data={data}
        renderItem={({item})=>(<View style={[styles.item, {backgroundColor:item.color}]}><Image source={item.image} style={styles.companyIcons} />
          <Text style={styles.price}>{item.name}</Text> 
          <Text style={styles.Letters}>{item.title}</Text>
          <Text style={styles.post}>{item.position}</Text>
          <Text style={styles.companyContainer}>{item.company}</Text>
          </View>)}
           
        />
        <Text style={styles.textformat2}>See All</Text>
        <Text style={styles.textformat}>Popular jobs</Text>
         <FlatList
    horizontal={false}
    data={popularjobs}
    renderItem={({item})=>(<View style={styles.second}><Image source={item.image} style={styles.burgerKingIcon} />
    <Text style={styles.popularJob1}>{item.jobtitle}</Text>
    <Text style={styles.popularJobPlace}>{item.workplace}</Text>
    <Text style={styles.popularJobPay}>{item.pay}</Text>
    <Text style={styles.popularJoblocation}>{item.location}</Text>
    </View>)}
    />
    </View>
    </ScrollView>
   
    
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="homepage" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  ScrollView:{
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:-100,
   
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jobizzContainer: {
    top: 220,
    alignItems: 'flex-start',
   left: 25,
  },
  group46Container: {
    top: 230,
    alignItems: 'flex-start',
   left: 25,
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 60,
    top:250,
    borderWidth: 1,
    borderColor: 'ash',
    borderRadius:20,
    left:10,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    left: 10,
  },
  secondsearchInput: {
    flex: 1,
    fontSize: 14,
    left:10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#356899',
    top: 250,
    width:350,
    left: 20,
    marginVertical: 20
  },
  group57Container: {
    top: 300,
    alignItems: 'center',
  },
  Textalign: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top:310
  },
  Textaligned: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top:200,
    
  },
  item: {
     marginVertical: 15,
    marginHorizontal:10,
      backgroundColor:'#6495ED',
      borderWidth: 1,
      borderColor: '#f0e2d3',
      overflow: 'hidden',
      borderRadius:24,
      margin:20,
      alignSelf:'center',
    left: 15,
    width: 280,
    height:186
  },
  Letters: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    top:82,
  right:20,
  fontSize:16,
  color: 'white'
  },
price: {
  alignSelf: 'flex-start',
  justifyContent: 'center',
  top:100,
left:20,
fontSize:16,
color: 'white'
},
post: {
  top:-50,
  left:90,
fontSize:16,
color: 'white',
fontWeight: 'bold'
},
companyContainer:{
  top:-50,
  left:90,
fontSize:16,
color: 'white',
marginVertical: 10
},
companyIcons: {
  width: 40, 
  height: 40, 
  resizeMode:'contain',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  flexDirection:'row',
  top: 29,
  left: 40,
  borderRadius: 7
},
second: {
  marginVertical: 15,
  marginHorizontal:10,
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    borderColor: '#f0e2d3',
    overflow: 'hidden',
    borderRadius:24,
    margin:20,
    alignSelf:'center',
  right:1,
  width: 350,
  height: 100,
},
textformat: {
  fontWeight:'bold',
  marginVertical: 20,
  fontSize:16,
   left: 25
},
textformat2: {
  color:'grey',
  fontSize:16,
  alignSelf:'flex-end',
  top: 40,
  right: 10
},
popularJob1: {
fontSize:18,
color: 'black',
left: 95,
top: -20
},
popularJobPlace: {
  justifyContent: 'center',
fontSize:16,
color: 'grey',
left: 95,
top: -20,
marginVertical: 15
},
popularJobPay: {
  alignSelf: 'flex-end',
  justifyContent: 'center',
fontSize:16,
color: 'black',
right: 14,
top: -85,
},
popularJoblocation: {
  alignSelf: 'flex-end',
  justifyContent: 'center',
fontSize:15,
color: 'grey',
left: -14,
top: -70,
},
burgerKingIcon: {
  width: 40, 
  height: 40, 
  resizeMode:'contain',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  flexDirection:'row',
  top: 29,
  left: 40,
  borderRadius: 60
},
jobSearchInput: {
      fontSize: 14,
    left:10,
},
jobSearchContainer: {
  backgroundColor: '#F2F2F3',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:20,
    left:10,
    flex: 1,
    marginTop:50,
    marginBottom: -10
},
orContinue: {
  alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top: 270
},
welcomeMessage: {
fontSize: 30,
fontWeight: 'bold',
left: 20,
marginTop: 50

},
emailMessage: {
  fontSize: 20,
left: 20,
color: 'grey',
},
personContainer: {
  width: 50, 
  maxHeight:50 , 
  borderRadius: 7,
  justifyContent: 'center',
  alignSelf: 'flex-end',
  marginBottom: -3000,
  top: 50,
  right: 10
},
rectangleContainer: {
  alignSelf: 'flex-end',
  top:-37,
  right: 10
  
},
filterContainer: {
  alignSelf: 'flex-end',
  top:-75,
  right:20
}
});