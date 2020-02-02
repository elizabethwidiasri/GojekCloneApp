import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <Text>clone Gojek App</Text>
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
