import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// import Swiper from '@damoness/react-native-qichang-kit';

// const data = Array.from({ length: 6 }).map((item, index) => ({
//   id: index,
//   imageUrl: 'https://static.cnbetacdn.com/article/2020/10/749acf2189b964f.jpg',
//   title: 'title' + index,
//   subTitle: 'subTitle' + index,
// }));

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Swiper data={data} onPressItem={() => {}} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: 100,
  },
});
