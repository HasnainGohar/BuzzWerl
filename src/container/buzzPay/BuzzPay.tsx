import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../theme';
import AppCheckbox from '../../components/layout/checkbox';

const BuzzPay = () => {

  const cardData = [
    {
      id: 1,
      title: 'Transfer',
      src: require('../../assets/imgs/nfc-square.png'),
    },
    {
      id: 2,
      title: 'Topup',
      src: require('../../assets/imgs/topup-payment.png'),
    },
    {
      id: 3,
      title: 'Earning',
      src: require('../../assets/imgs/withdraw.png'),
    },
    {
      id: 4,
      title: 'History',
      src: require('../../assets/imgs/analyze.png'),
    },
  ];

  const [validate, setValidate] = useState(false);
  const [blockNfc, setBlockNfc] = useState(false);


  return (
    <View style={{ flex: 1, padding: 20, gap: 20 }}>
      <Text>
        Simplify your transactions with BuzzPay. Seamlessly transfer funds, link
        and manage your NFC devices.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>QR code</Text>
        <MaterialIcons name="copy-all" color="blue" size={30} />
      </View>

      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>BuzzWerl NFC</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>
          Total Balance:{' '}
        </Text>
        <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>
          JMD 0.00{' '}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'blue',
            borderRadius: 10,
            padding: 10,
          }}>
          <Text style={{ fontWeight: '400', fontSize: 14, color: '#57636c' }}>
            Transaction History{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', borderRadius: 10, padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>
            NFC Charge
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
          Click here to tie NFC to your profile
        </Text>
        <Image
          style={{ height: 50, width: 50, resizeMode: 'contain' }}
          source={require('../../assets/imgs/tie_nfc.png')}
        />
      </View>
      <Text style={{ fontSize: 11, color: '#57636c' }}>
        You can top up your tickets here or give them to another user.
        Transfering funds to another NFC device you own has no charge!
      </Text>
      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          gap: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>wristband name</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <MaterialCommunityIcons name="bell" size={30} color={'blue'} />
            <MaterialCommunityIcons name="pencil" size={30} color={colors.lightGray} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>

            <Text style={{ fontWeight: '700', fontSize: 14, color: 'gray' }}>
              JMD 0.00{' '}
            </Text>
            <Text style={{ fontWeight: '700', fontSize: 14, color: 'gray' }}>
              Sunday,March 30
            </Text>
          </View>
          <Text>
            2025-03-30 10:00
          </Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: 'space-between', width: '100%' }}
          data={cardData}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 30, width: 30, resizeMode: 'contain' }} source={item.src} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.title}</Text>
            </View>
          )}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ fontSize: 12, fontWeight: '400' }}>
              Pre Validate Transactions
            </Text>
            <AppCheckbox value={validate} onToggle={setValidate} />

          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ fontSize: 12, fontWeight: '400' }}>
              Block NFC
            </Text>
            <AppCheckbox value={blockNfc} onToggle={setBlockNfc} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BuzzPay;