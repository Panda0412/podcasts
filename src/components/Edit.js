import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

export default function FirstScreen({navigation}) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{margin: 20}} source={require('../images/arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Редактирование</Text>
      </View>
      <View style={styles.line} />
      <View
        style={{
          backgroundColor: 'white',
          height: Dimensions.get('window').height,
        }}>
        {!focused && (
          <View style={styles.body}>
            <View style={styles.card}>
              <Image
                style={{height: 26, width: '100%'}}
                source={require('../images/scale.png')}
              />
              <TouchableOpacity
                style={{
                  height: 96,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setFocused(true)}>
                <Image source={require('../images/music.png')} />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  style={{marginLeft: 8}}
                  source={require('../images/play.png')}
                />
                <Image
                  style={{marginLeft: 18, opacity: 0.4}}
                  source={require('../images/shear.png')}
                />
                <Image
                  style={{opacity: 0.4}}
                  source={require('../images/cancel.png')}
                />
                <Image
                  style={{marginLeft: 18}}
                  source={require('../images/note.png')}
                />
                <Image source={require('../images/increase.png')} />
                <Image
                  style={{marginRight: 8}}
                  source={require('../images/decrease.png')}
                />
              </View>
            </View>
          </View>
        )}
        {focused && (
          <View style={styles.body}>
            <View style={styles.card}>
              <Image
                style={{height: 26, width: '100%'}}
                source={require('../images/scale.png')}
              />
              <TouchableOpacity
                style={{
                  height: 96,
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => setFocused(false)}>
                <Image
                  style={{opacity: 0.4, alignSelf: 'center'}}
                  source={require('../images/music.png')}
                />
              </TouchableOpacity>
              <Image
                style={{marginTop: -63, marginLeft: 14}}
                source={require('../images/frame.png')}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  style={{marginLeft: 8}}
                  source={require('../images/play.png')}
                />
                <Image
                  style={{marginLeft: 18}}
                  source={require('../images/shear.png')}
                />
                <Image source={require('../images/cancel.png')} />
                <Image
                  style={{marginLeft: 18}}
                  source={require('../images/note.png')}
                />
                <Image source={require('../images/increase.png')} />
                <Image
                  style={{marginRight: 8}}
                  source={require('../images/decrease.png')}
                />
              </View>
            </View>
          </View>
        )}
        <View style={styles.body}>
          <Text style={styles.text1}>Таймкоды</Text>
          <Image
            style={{marginTop: 19}}
            source={require('../images/bluePlus.png')}
          />
          <Text style={styles.blueText}>Добавить таймкод</Text>
          <Text style={styles.text2}>
            Отметки времени с названием темы. Позволяют слушателям легче
            путешествовать по подкасту.
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    color: 'black',
    marginLeft: 7,
  },
  line: {
    height: 0.5,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#D7D8D9',
  },
  body: {
    backgroundColor: 'white',
    marginRight: 16,
    marginLeft: 16,
  },
  card: {
    height: 182,
    marginTop: 24,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#D7D8D9',
    borderRadius: 8,
  },
  blueText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 20,
    color: '#3F8AE0',
    letterSpacing: 0.1,
    marginTop: -25,
    marginLeft: 44,
  },
  text1: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
    color: '#818C99',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    marginTop: 27,
  },
  text2: {
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 16,
    color: '#818C99',
    letterSpacing: 0.2,
    marginTop: 18,
  },
});
