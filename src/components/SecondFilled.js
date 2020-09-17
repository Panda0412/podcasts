import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

export default function FirstScreen({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{margin: 20}} source={require('../images/arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Новый подкаст</Text>
      </View>
      <View style={styles.line1} />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.body1}>
          <Image style={styles.image} source={require('../images/dogs.png')} />
          <Text style={styles.textForm1}>Название</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.checkBoxText}>Подкаст прекрасных людей</Text>
          </TouchableOpacity>
          <Text style={styles.textForm2}>Описание подкаста</Text>
          <TouchableOpacity style={styles.multilineInput}>
            <Text style={styles.checkBoxText}>
              Подкаст, который рассказывает про то, как много в мире
              прекрасного!
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 28,
              height: 48,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{marginRight: 10}}
              source={require('../images/micro.png')}
            />
            <Text style={styles.checkBoxText}>My_podcast.mp3</Text>
            <Text style={styles.time}>59:16</Text>
          </View>
          <View style={{marginTop: 10, marginBottom: 19}}>
            <Text style={styles.note2}>
              Вы можете добавить таймкоды и скорректировать подкаст в режиме
              редактирования
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Edit');
            }}>
            <Text style={styles.buttonText}>Редактировать аудиозапись</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line2} />
        <View style={styles.body2}>
          <Image
            style={{marginTop: 14.4}}
            source={require('../images/check.png')}
          />
          <View style={{marginTop: -20, marginLeft: 34}}>
            <Text style={styles.checkBoxText}>Ненормативный контент</Text>
          </View>
          <Image
            style={{marginTop: 28}}
            source={require('../images/check.png')}
          />
          <View style={{marginTop: -20, marginLeft: 34}}>
            <Text style={styles.checkBoxText}>
              Исключить эпизод из экспорта
            </Text>
          </View>
          <Image
            style={{marginTop: 28}}
            source={require('../images/checked.png')}
          />
          <View style={{marginTop: -20, marginLeft: 34}}>
            <Text style={styles.checkBoxText}>Трейлер подкаста</Text>
          </View>
          <View style={{marginTop: 33}}>
            <Text style={styles.checkBoxText}>
              Кому доступен данный подкаст
            </Text>
          </View>
          <Text style={styles.note}>Всем пользователям</Text>
          <Image
            style={{marginLeft: 316, marginTop: -31}}
            source={require('../images/forward.png')}
          />
          <View style={{marginTop: 16, marginBottom: 32}}>
            <Text style={styles.note2}>
              При публикации записи с эпизодом, он становится доступным для всех
              пользователей
            </Text>
          </View>
          <TouchableOpacity style={styles.blueButton}>
            <Text style={styles.blueButtonText}>Далее</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  line1: {
    height: 0.5,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#D7D8D9',
  },
  body1: {
    backgroundColor: 'white',
    marginRight: 16,
    marginLeft: 16,
  },
  image: {
    width: 72,
    height: 72,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textForm1: {
    position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 18,
    color: '#6D7885',
    marginTop: 15,
    marginLeft: 84,
    letterSpacing: 0.2,
  },
  input: {
    position: 'absolute',
    marginTop: 43,
    marginLeft: 84,
    width: Dimensions.get('window').width - 116,
    height: 44,
    backgroundColor: '#F2F3F5',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 8,
    padding: 12,
  },
  placeholder: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 20,
    color: '#818C99',
    letterSpacing: 0.1,
  },
  textForm2: {
    fontFamily: 'SF Pro Text',
    fontSize: 14,
    lineHeight: 18,
    color: '#6D7885',
    marginTop: 29,
    letterSpacing: -0.154,
  },
  multilineInput: {
    marginTop: 8,
    marginBottom: 12,
    height: 64,
    backgroundColor: '#F2F3F5',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 8,
    padding: 12,
  },
  center: {
    height: 196,
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
    height: 42,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#3F8AE0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: '#3F8AE0',
    letterSpacing: 0.1,
  },
  line2: {
    height: 0.5,
    marginLeft: 4.5,
    marginRight: 4.5,
    backgroundColor: '#D7D8D9',
  },
  body2: {
    backgroundColor: 'white',
    marginRight: 12,
    marginLeft: 12,
  },
  checkBoxText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 20,
    color: 'black',
    letterSpacing: 0.1,
  },
  note: {
    fontFamily: 'Roboto',
    fontSize: 11,
    lineHeight: 14,
    color: '#818C99',
    letterSpacing: 0.3,
    marginTop: 4,
  },
  note2: {
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 16,
    color: '#818C99',
    letterSpacing: 0.2,
  },
  blueButton: {
    width: Dimensions.get('window').width - 32,
    height: 44,
    backgroundColor: '#4986CC',
    borderRadius: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueButtonText: {
    fontFamily: 'SF Pro Text',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    color: 'white',
    letterSpacing: -0.408,
  },
  time: {
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 16,
    color: '#99A2AD',
    letterSpacing: 0.2,
    marginLeft: Dimensions.get('window').width - 252,
  },
});
