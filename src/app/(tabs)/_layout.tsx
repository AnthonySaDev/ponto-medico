
import { Menu } from '@/components/Menu';
import { theme } from '@/theme';
import { FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React, { useRef } from 'react';
import { View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Header } from '@/components/Header';
export default function TabLayout() {
  
  const bottomSheetRef = useRef<BottomSheet>(null);
  
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View style={{flex:1}}>
      <Header/>
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.white,
      tabBarInactiveTintColor: theme.colors.gray[600],
      tabBarStyle: {
        backgroundColor: theme.colors.pink,
        borderTopColor: theme.colors.black,
        height: 60
      }
      }} >
      <Tabs.Screen name="index"  options={{
        tabBarIcon: ({ size, color }) => <Foundation name="home" size={size} color={color} />
      }}/>
     
        <Tabs.Screen name="menu"  options={{
        tabBarIcon: ({ size, color }) => <FontAwesome5 name="plus" size={size} color={color} />
      }}
      listeners={() => ({
        tabPress: (e) => {
          e.preventDefault();
          handleBottomSheetOpen();
        }
      })}
      />

      <Tabs.Screen name="profile"  options={{
        tabBarIcon: ({ size, color }) => <Ionicons name="person" size={size} color={color} />
      }}/>

     
    </Tabs>
    <Menu ref={bottomSheetRef} onClose={()=>handleBottomSheetClose()}/>
    </View>
  );
}