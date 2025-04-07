import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

// styles
import { styles } from './styles';
import { colors } from '../../../theme';

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  variants?: 'outline' | 'filled' | 'ghost' | 'white';
  style?: StyleProp<ViewStyle>;
  theme?: 'red' | 'blue' | "white";
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  variants = 'filled',
  style,
  theme = 'blue',
}) => {
  const [loading, setLoading] = useState(false);

  const handleButtonPress = () => {
    setLoading(true);
    try {
      onPress && onPress();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const themeColor = {
    red: '#FF0000',
    blue: colors.blueButton,
    white: colors.white
  };

  const variantStyles = {
    outline: [styles.outlined, { borderColor: themeColor[theme] }],
    filled: styles.container,
    ghost: styles.ghost,
    white: styles.white
  };

  const textVariantStyles = {
    outline: [styles.outlinedText, { color: themeColor[theme] }],
    filled: styles.text,
    ghost: styles.ghostText,
    white: styles.whiteText

  };

  const buttonStyle = [styles.container, variantStyles[variants], style];

  return (
    <TouchableOpacity onPress={handleButtonPress} style={buttonStyle}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[textVariantStyles[variants]]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
