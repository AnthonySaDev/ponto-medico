import { colors } from '@/theme/colors';
import { fontFamily } from '@/theme/fontFamily';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   flexDirection: "row",
   justifyContent: "space-between",
   width: "90%",
   alignSelf: "center",
   alignItems: "center",
   paddingVertical: 10,
   paddingHorizontal: 5,
  },
  
  data:{
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: 15
  },
  local:{
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: 14,
    paddingHorizontal: 26
  }
});