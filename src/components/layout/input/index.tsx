import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../../theme';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../../../theme/common-styling';

interface AppInputProps {
  label?: string;
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?:
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'ascii-capable';
  onFocus?: () => void;
  onBlur?: () => void;
  error?: string;
  style?: object;
}

export const AppInput: React.FC<AppInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  onFocus,
  onBlur,
  error,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  const handleChange = (text: string) => {
    setInputValue(text);
    onChangeText(text);
  };

  const inputBorderColor = () => {
    if (isFocused) {
      return 'red';
    }
    if (error) {
      return 'red';
    }
    return colors.lightGray;
  };

  return (
    <>
      <View
        style={[
          styles.container,
          {
            borderColor: inputBorderColor(),
          },
        ]}>
        {/* <View style={styles.labelContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
      </View> */}
        <View
          style={{ ...commonStyles.horizontalView, ...commonStyles.spaceBetween }}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.gray}
            value={inputValue}
            onChangeText={handleChange}
            secureTextEntry={showPassword}
            keyboardType={keyboardType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ flex: 1 }}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={!showPassword ? 'eye-off' : 'eye'}
                size={24}
                color={colors.gray}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </>

  );
};
