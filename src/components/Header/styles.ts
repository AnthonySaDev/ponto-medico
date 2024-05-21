import { colors } from '@/theme/colors';
import { fontFamily } from '@/theme/fontFamily';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: .5,
    borderColor: colors.gray[600],
    backgroundColor: colors.white
  },
  text:{
    color: colors.black,
    fontSize: 20,
    fontFamily: fontFamily.bold,
  }
});