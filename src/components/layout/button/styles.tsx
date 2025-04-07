import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueButton,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.bg,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  outlined: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  outlinedText: {
    color: colors.blueButton,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  ghostText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    color: colors.blueButton,
  },
  white: {
    backgroundColor: colors.white,
    borderWidth: 1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderColor:'gray'
  },
  whiteText: {
    color: colors.gray,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
