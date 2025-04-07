import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {AppButton} from '../../layout/button';
import {styles} from './styles';

interface EventCardProps {
  title: string;
  catogory: string;
  isScanner?: boolean;
  onPress?: () => void;
  onScanNowPress?: () => void;
  onSellNowPress?: () => void;
  onPressBookingList?: () => void;
  onPressEmailCode?: () => void;
}

export const EventCard = ({
  title,
  catogory,
  isScanner = false,
  onPress,
  onScanNowPress,
  onSellNowPress,
  onPressBookingList,
  onPressEmailCode,
}: EventCardProps) => {
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
        <AppButton
          title="Booking List"
          variants="ghost"
          onPress={onPressBookingList}
        />
        <AppButton
          title="Email code"
          variants="ghost"
          onPress={onPressEmailCode}
        />
      </View>
      {isScanner ? (
        <AppButton
          title="Scan Now"
          variants="outline"
          onPress={onScanNowPress}
        />
      ) : (
        <View style={{gap: 10}}>
          <AppButton
            title="Sell Now"
            variants="outline"
            onPress={onSellNowPress}
          />
          <AppButton
            title="Scan Now"
            variants="outline"
            theme="red"
            onPress={onScanNowPress}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};
