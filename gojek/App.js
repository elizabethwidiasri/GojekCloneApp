import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* search and promo bar  */}
        <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder="What do you want to eat?" style={{marginTop: 7, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
            <Image source={require('./assets/icon/search.png')} style={{position: 'absolute', top: 15, left: 12}} />
          </View>
          <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./assets/icon/promo.png')} />
          </View>
        </View>
        {/* gopay  */}
        <View style={{marginHorizontal: 17, marginTop: 8}} >
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 6, borderTopRightRadius: 6, padding: 14}}>
            <Image source={require('./assets/icon/gopay.png')} />
            <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Rp 50.000</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2E65BC', borderBottomLeftRadius: 6, borderBottomRightRadius: 6}}>
             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/pay.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Pay</Text>
            </View> 
             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/pay.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Nearby</Text>
            </View> 
             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/topup.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Top Up</Text>
            </View> 
             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/pay.png')} />
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>More</Text>
            </View> 
          </View>
        </View>
      </View>
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/home.png')} />
          <Text style={{fontSize: 10, color: '#545454'}}>Home</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/order.png')} />
          <Text style={{fontSize: 10, color: '#545454'}}>Orders</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/help-active.png')} />
          <Text style={{fontSize: 10, color: '#43AB4A'}}>Help</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/inbox.png')} />
          <Text style={{fontSize: 10, color: '#545454'}}>Inbox</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 26, height: 26}} source={require('./assets/icon/account.png')} />
          <Text style={{fontSize: 10, color: '#545454'}}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
