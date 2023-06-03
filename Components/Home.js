import { View,Text,StyleSheet, Image} from "react-native"
import HULU from '../assets/HuluLogo.png'
import React from 'react';
import { Ionicons } from '@expo/vector-icons'
// import { HeroIcon } from 'react-native-heroicons';
import tw from 'tailwind-react-native-classnames'
// import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from 'react-native-heroicons/outline';

function Home() {
    return (
    //   <View className='flex flex-col items-center sm:flex-row m-5'>
        <View  style={styles.column} >
      <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>
        <View className=" flex flex-col items-center cursor-pointer w-12 sm:w-20 text-blue-800" >
        <Ionicons name="ios-home-sharp" size={24} color="white" />
        <Text className="tracking-wider">Home</Text>
        </View>

        </View>
    );
  }
  
  const styles = StyleSheet.create({

    column:{
        width:"30%",
        overflow:"scroll",
        flexDirection:"row",
        // justifyContent:"space-around",
    }
  });

  export default Home;