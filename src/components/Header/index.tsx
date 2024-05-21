import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/theme';

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} width={10} height={10}/>
      <TouchableOpacity activeOpacity={0.5}>
      <Ionicons name='exit-outline' size={30} color={theme.colors.black}/>
      </TouchableOpacity>
    </View>

  );
}