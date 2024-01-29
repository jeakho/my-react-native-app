/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TigerSvg from './assets/tiger.svg'
import GiraffeSvg from './assets/giraffe.svg'

import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FirstPage({ navigation }: any): React.JSX.Element {
  return (
    <ScrollView>
      <View
        style={{ width: 200, marginTop: 10, alignSelf: 'center' }}
      >
        <Button
          title="Go to Second page"
          onPress={() => navigation.navigate('Second')}
        />
      </View>
      <TigerSvg width={100} height={100}></TigerSvg>
      <GiraffeSvg  width={100} height={100}></GiraffeSvg>

      <MaskedView
        style={{height: 100, alignSelf: 'stretch'}}
        maskElement={ 
          <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Basic Mask
          </Text>
          </View>
        }>
        <LinearGradient
          colors={['#333333', '#dd1818']}
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          style={{flex: 1}}
        >
        </LinearGradient>
      </MaskedView>

      <Text>Raleway, 100, normal:</Text>
      <Text style={{fontFamily: 'Raleway', fontWeight: '100', fontSize: 60}}>
        Hello world!
      </Text>
      <Text>System, 100, normal:</Text>
      <Text style={{fontWeight: '100', fontSize: 60}}>Hello world!</Text>
      <Text>Raleway, 400, italic:</Text>
      <Text
        style={{
          fontFamily: 'Raleway',
          fontWeight: '400',
          fontSize: 60,
          fontStyle: 'italic',
        }}>
        Hello world!
      </Text>
      <Text>System, 400, italic:</Text>
      <Text style={{fontWeight: '400', fontStyle: 'italic', fontSize: 60}}>
        Hello world!
      </Text>
      <Text>Raleway, 900, normal:</Text>
      <Text
        style={{
          fontFamily: 'Raleway',
          fontWeight: '900',
          fontSize: 60,
        }}>
        Hello world!
      </Text>
      <Text>System, 900, normal:</Text>
      <Text style={{fontWeight: '900', fontSize: 60}}>Hello world!</Text>
      <Text>Raleway, 900, italic:</Text>
      <Text
        style={{
          fontFamily: 'Raleway',
          fontWeight: '900',
          fontSize: 60,
          fontStyle: 'italic',
        }}>
        Hello world!
      </Text>
      <Text>System, 900, italic:</Text>
      <Text style={{fontWeight: '900', fontSize: 60, fontStyle: 'italic'}}>
        Hello world!
      </Text>
    </ScrollView>
  )
}


function SecondPage({ navigation }: any): React.JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello second page!</Text>
      <View
        style={{ width: 200, marginTop: 10, alignSelf: 'center' }}
      >
        <Button
          title="Go to First page"
          onPress={() => navigation.navigate('First')}
        />
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name='First' component={FirstPage}></Stack.Screen>
        <Stack.Screen name='Second' component={SecondPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  maskedGradient: {
    alignSelf: 'stretch',
    height: 100
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
