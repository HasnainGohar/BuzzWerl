import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {commonStyles} from '../../../theme/common-styling';

interface Props {
  title: string;
  goBack?: () => void;
  onRightPress?: () => void;
}

const AppHeader = ({title, goBack}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleBackPress = () => {
    console.log('Back button pressed');
    navigation.goBack();
    goBack && goBack();
  };
  return (
    <View style={styles.container}>
      <View style={{...commonStyles.horizontalView, gap: 20}}>
        <TouchableOpacity activeOpacity={1} onPress={handleBackPress}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default AppHeader;
