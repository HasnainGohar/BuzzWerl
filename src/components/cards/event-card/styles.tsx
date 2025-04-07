import {StyleSheet} from 'react-native';
import {commonStyles} from '../../../theme/common-styling';
import {colors} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    gap: 10,
    backgroundColor: colors.white,
  },
  row: {
    ...commonStyles.horizontalView,
    ...commonStyles.spaceBetween,
  },
});
