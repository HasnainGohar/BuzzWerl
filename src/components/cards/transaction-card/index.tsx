import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {AppButton} from '../../layout/button';
import {styles} from './styles';

interface EventCardProps {
  title: string;
  catogory: string;
  isScanner?: boolean;
  onPress?: () => void;
}

export default function TransactionCard({
  title,
  catogory,
  isScanner = false,
  onPress,
}: EventCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}>
      <View>
        <Text>Event name : {title}</Text>
        <View>
          <Text>Event catogory : {catogory}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <AppButton title="Booking List" variants="ghost" />
        <AppButton title="Email code" variants="ghost" />
      </View>
      {isScanner ? (
        <AppButton title="Scan Now" />
      ) : (
        <View style={{gap: 10}}>
          <AppButton title="Sell Now" variants="outline" />
          <AppButton title="Scan Now" variants="outline" theme="red" />
        </View>
      )}
    </TouchableOpacity>
  );
}
