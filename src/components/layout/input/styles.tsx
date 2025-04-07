import {StyleSheet} from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    // borderColor: colors.lightGray,
    borderRadius: 10,
    padding:6
  },
  labelContainer: {
    position: 'absolute',
    top: -20,
    left: 10,
    backgroundColor: colors.bg,
    padding: 5,
  },
  label: {
    color: colors.gray,
    fontSize: 14,
    fontWeight:'400',
    marginVertical: 5,
  },
});
