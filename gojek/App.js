import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
   
    <View style={{flex: 1, marginTop: StatusBar.currentHeight }}>
      {/* upper */}
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* search and promo bar  */}
        <View style={{marginHorizontal: 17, flexDirection: 'row', marginBottom: 8}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput placeholder="What do you want to eat?" style={{marginTop: 7, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
            <Image source={require('./assets/icon/search.png')} style={{position: 'absolute', top: 15, left: 12}} />
          </View>
          <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./assets/icon/promo.png')} />
          </View>
        </View>
        <ScrollView>
        {/* gopay  */}
        <View style={{marginHorizontal: 17}} >
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
        {/* main feature */}
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginVertical: 18}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>GoRide</Text> 
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-car.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>GoCar</Text> 
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>GoFood</Text> 
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>GoBlueBird</Text> 
            </View>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>GoSend</Text> 
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>GoPulsa</Text> 
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-deals.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>GoPoints</Text> 
            </View>
            <View style={{width: `${100/4}%`, alignItems: 'center'}}>
              <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6, }}>More</Text> 
            </View>
          </View>
        </View>
        {/* strip  */}
        <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: -15}}></View>
        {/* news  */}
        <View style={{paddingTop: 16, paddingHorizontal: 16, backgroundColor: 'white'}}>
          <View style={{position: 'relative'}}>
            <Image source={require('./assets/dummy/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
            <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
            <Image source={require('./assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>

          </View>
          <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', letterSpacing: 1 }}>GO-NEWS</Text>
            <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11 }}>Dimas drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontWeight: 'bold', fontSize: 13, color: 'white'}}>READ</Text>
            </TouchableOpacity>

          </View>
        </View>
        </ScrollView>
      </View>
      
      {/* navigation bar */}
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
