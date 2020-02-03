import React, { useState, useEffect} from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font'

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFont = async () => {
    await Font.loadAsync({
      'maison' : require('./assets/maisonneuebold.ttf')
    })
    setFontLoaded(true)
  }

  useEffect(() => {
    loadFont()
  }, [])

  if (fontLoaded) {
    return (
      <View style={{flex: 1, marginTop: StatusBar.currentHeight }}>
        {/* upper */}
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* search and promo bar  */}
          <View style={{marginHorizontal: 17, flexDirection: 'row', marginBottom: 8, marginTop: 2}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="What do you want to eat?" style={{marginTop: 7, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18}} />
              <Image source={require('./assets/icon/search.png')} style={{position: 'absolute', top: 15, left: 12}} />
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/promo.png')} />
            </View>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false}>
          {/* gopay  */}
          <View style={{marginHorizontal: 17}} >
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, paddingTop: 14, paddingBottom: 9, paddingHorizontal: 14}}>
              <Image style={{width: 72, height: 15}} source={require('./assets/images/gopay.png')} />
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Rp 50.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 9, backgroundColor: '#2E65BC', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 30, height: 30}} source={require('./assets/images/pay.png')} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 10}}>Pay</Text>
              </View> 
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 30, height: 30}}  source={require('./assets/images/promo.png')} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 10}}>Promo</Text>
              </View> 
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 30, height: 30}} source={require('./assets/images/topup.png')} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 10}}>Top Up</Text>
              </View> 
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 30, height: 30}} source={require('./assets/images/more.png')} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 10}}>More</Text>
              </View> 
            </View>
          </View>
          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginVertical: 13}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 10}}>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/goride.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GoRide</Text> 
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/gocar.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GoCar</Text> 
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/gofood.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GoFood</Text> 
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/gobluebird.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GoBlueBird</Text> 
              </View>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 10}}>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/gosend.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GoSend</Text> 
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/gopulsa.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GoPulsa</Text> 
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/godeals.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>GoPoints</Text> 
              </View>
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 58, height: 58, justifyContent: 'center', alignItems: 'center'}}>
                  <Image style={{width: 40, height: 40}} source={require('./assets/images/more-1.png')} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center'}}>More</Text> 
              </View>
            </View>
          </View>
          {/* strip  */}
          {/* <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: -15}}></View> */}
          {/* news  */}
          <View style={{paddingTop: 16, paddingHorizontal: 16, backgroundColor: 'white'}}>
            <View style={{position: 'relative'}}>
              <Image source={require('./assets/images/banner01.png')} style={{height: 170, width: '100%', borderRadius: 6}} />
              {/* <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View> */}
              {/* <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View> */}

            </View>
            <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', letterSpacing: 1, fontFamily: 'maison' }}>Be worry-free on Pay Day!</Text>
              <Text style={{fontSize: 13, color: '#7A7A7A', marginBottom: 11, width: '70%', fontFamily: 'maison' }}>Because GoPay Pay Day is back with up to 60% CASHBACK in hundreds of participating merchants!</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{fontWeight: 'bold', fontSize: 13, color: 'white'}}>I'M IN</Text>
              </TouchableOpacity>

            </View>
          </View>
          {/* profile connection */}
          {/* <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{height: 15, width: 60, marginLeft: -4}}>
              <Image source={require('./assets/logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20}}>Complete your profile</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 16}}>
                <Image source={require('./assets/dummy/facebook-connect.png')} />
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A', marginBottom: 5}}>Connect with Facebook</Text>
                <Text style={{width: '50%', fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', marginBottom: 5}}>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4}}>
              <Text style={{fontWeight: 'bold', fontSize: 13, color: 'white'}}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{paddingHorizontal: 16, paddingBottom: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}} ></View>

          </View> */}
          {/* gofood banner  */}
          <View style={{paddingTop: 16, paddingHorizontal: 16, paddingBottom: 16}} >
            <View style={{position: 'relative'}}>
            <Image source={require('./assets/dummy/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
            <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6}}></View>
            <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
              <Image source={require('./assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 16, paddingBottom: 16}}>
              <View>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 2, marginRight: 15}}>Free GO-FOOD voucher</Text>
                <Text style={{fontSize: 17, color: 'white', fontWeight: '400'}}>Quick, before they run out!</Text>
              </View>
              <View style={{flex: 1, paddingLeft: 50}}>
                <TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 4}}>
                  <Text style={{fontWeight: 'bold', fontSize: 13, color: 'white'}}>GET VOUCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            <View style={{paddingHorizontal: 16, paddingBottom: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}} ></View>


          </View>
          {/* nearby restaurant */}
          <View>
            <View style={{height: 15, width: 60, marginLeft: 16}}>
              <Image source={require('./assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', fontFamily: 'maison'}}>Nearby Restaurant</Text>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756', fontFamily: 'maison'}}>See All</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', paddingLeft: 16}}>
              <View style={{marginRight: 16}}>
                <View>
                  <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 12}}>
                    <Image source={require('./assets/dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 6}} />
                  </View>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Martabak Orins</Text>
                </View>
              </View>
              <View style={{marginRight: 16}}>
                <View>
                <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 12}}>
                  <Image source={require('./assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 6}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>KFC Aeon Mall</Text>
                </View>
              </View>
              <View style={{marginRight: 16}}>
                <View>
                <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 12}}>
                  <Image source={require('./assets/dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 6}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Bakmi GM</Text>
                </View>
              </View>
              <View style={{marginRight: 16}}>
                <View>
                <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 12}}>
                  <Image source={require('./assets/dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 6}} />
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Martabak Bangka</Text>
                </View>
              </View>
              <View style={{marginRight: 16}}>
              <View>
              <View style={{width: 150, height: 150, borderRadius: 10, marginBottom: 12}}>
                <Image source={require('./assets/dummy/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 6}} />
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>Ayam Bakar Pak Boss</Text>
              </View>
            </View>
            </ScrollView>
            <View style={{paddingHorizontal: 16, paddingBottom: 16, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20, marginHorizontal: 16}} ></View>

          </View>
          </ScrollView>
        </View>
        
        {/* navigation bar */}
        <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width: 26, height: 26}} source={require('./assets/images/home.png')} />
            <Text style={{fontSize: 10, color: '#43AB4A', fontFamily: 'maison', marginTop: 5}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width: 26, height: 26}} source={require('./assets/images/orders-non.png')} />
            <Text style={{fontSize: 10, color: '#545454', fontFamily: 'maison', marginTop: 5}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width: 26, height: 26}} source={require('./assets/images/chat-non.png')} />
            <Text style={{fontSize: 10, color: '#545454', fontFamily: 'maison', marginTop: 5}}>Chat</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={{width: 26, height: 26}} source={require('./assets/images/inbox-non.png')} />
            <Text style={{fontSize: 10, color: '#545454', fontFamily: 'maison', marginTop: 5}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image  style={{width: 26, height: 32}} source={require('./assets/images/account-non.png')} />
            <Text style={{fontSize: 10, color: '#545454', fontFamily: 'maison', marginTop: 5}}>Account</Text>
          </View>
        </View>
        
      </View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
