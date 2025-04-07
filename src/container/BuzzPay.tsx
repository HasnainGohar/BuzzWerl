import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const BuzzPay = () => {
  return (
    <View style={{ flex: 1, padding: 20, gap: 20 }}>
      <Text>Simplify your transactions with BuzzPay. Seamlessly transfer funds, link and manage your NFC devices.</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>QR code</Text>
        <MaterialIcons name='copy-all' color='blue' size={30} />
      </View>

      
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>BuzzWerl NFC</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>Total Balance: </Text>
        <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>JMD 0.00 </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'blue', borderRadius: 10, padding: 10 }}>
          <Text style={{ fontWeight: '400', fontSize: 14, color: '#57636c' }}>Transaction History </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'blue', borderRadius: 10, padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>NFC Charge</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Click here to tie NFC to your profile</Text>
        <Image style={{ height: 50, width: 50, resizeMode: 'contain' }} source={require('../assets/imgs/tie_nfc.png')} />
      </View>
      <Text style={{ fontSize: 11, color: '#57636c' }}>You can top up your tickets here or give them to another user. Transfering funds to another NFC device you own has no charge!</Text>
    </View>
  )
}

export default BuzzPay