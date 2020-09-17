import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

export default function First({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Image
          style={{marginLeft: Dimensions.get('window').width - 40}}
          source={require('../images/cross.png')}
        />
      </View>
      <View style={styles.body}>
        <Image source={require('../images/plus.png')} />
        <Text style={styles.label}>Добавьте первый подкаст</Text>
        <Text style={styles.content}>
          Добавляйте, редактируйте и делитесь{'\n'}подкастами вашего сообщества
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Добавить подкаст</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 56,
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: 'black',
    marginTop: 16,
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 20,
    color: '#818C99',
    marginTop: 8,
    letterSpacing: 0.1,
    textAlign: 'center',
  },
  button: {
    width: 166,
    height: 36,
    backgroundColor: '#4986CC',
    marginTop: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: 'white',
    letterSpacing: 0.2,
  },
});
