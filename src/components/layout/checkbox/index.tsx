import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type AppCheckboxProps = {
  value: boolean;
  onToggle: (val: boolean) => void;
};

const AppCheckbox = ({ value, onToggle }: AppCheckboxProps) => {
  return (
    <TouchableOpacity style={styles.check} onPress={() => onToggle(!value)}>
      <CheckBox
        disabled={true}
        value={value}
        onValueChange={(newValue) => onToggle(newValue)}
        tintColors={{ true: '#516091', false: '#516091' }}
      />
    </TouchableOpacity>
  );
};

export default AppCheckbox;

const styles = StyleSheet.create({
  check: {
    padding: 4,
  },
});
