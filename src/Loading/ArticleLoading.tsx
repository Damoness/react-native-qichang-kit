import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class ArticleLoading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require('./assets/article_loading.gif')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
