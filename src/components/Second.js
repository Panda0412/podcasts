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

export default function FirstScreen() {
  console.log('iug')
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Image style={{margin: 20}} source={require('../images/arrow.png')} />
        <Text style={styles.title}>Новый подкаст</Text>
      </View>
      <View style={styles.line1} />
      <ScrollView>
        <View style={styles.body1}>
          <TouchableOpacity style={styles.imageLoad}>
            <Image source={require('../images/gallery.png')} />
          </TouchableOpacity>
          <Text style={styles.textForm1}>Название</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.placeholder}>Введите название подкаста</Text>
          </TouchableOpacity>
          <Text style={styles.textForm2}>Описание подкаста</Text>
          <TouchableOpacity style={styles.multilineInput} />
          <View style={styles.center}>
            <Text style={styles.label}>Загрузите ваш подкаст</Text>
            <Text style={styles.content}>
              Выберите готовый аудиофайл из{'\n'}вашего телефона и добавьте его
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Загрузить файл</Text>
            </TouchableOpacity>
          </View>
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
          <Text style={styles.note2}>
            При публикации записи с эпизодом, он становится доступным для всех
            пользователей
          </Text>
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
  imageLoad: {
    width: 72,
    height: 72,
    marginTop: 15,
    backgroundColor: '#F2F3F5',
    borderWidth: 0.5,
    borderStyle: 'solid',
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
    width: 146,
    height: 36,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#3F8AE0',
    borderRadius: 8,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: '#3F8AE0',
    letterSpacing: 0.2,
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
    marginTop: 16,
    marginBottom: 32,
  },
  blueButton: {
    width: Dimensions.get('window').width - 32,
    height: 44,
    backgroundColor: '#4986CC',
    opacity: 0.4,
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
});
