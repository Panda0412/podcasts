import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './Styles';

export default function FirstScreen() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Пожертвования</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            У Вас пока нет сборов.{'\n'}
            Начните доброе дело.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Создать сбор</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
