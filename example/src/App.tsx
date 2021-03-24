import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  Avatar,
  DropdownArrow,
  ErrorComponent,
  Loading,
  // ArticleLoading,
  // LoadingComponent,
  NavigationBackComponent,
  NavigationBar,
  ThemedLineView,
  ThemedText,
} from '@damoness/react-native-qichang-kit';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// const data = Array.from({ length: 6 }).map((item, index) => ({
//   id: index,
//   imageUrl: 'https://static.cnbetacdn.com/article/2020/10/749acf2189b964f.jpg',
//   title: 'title' + index,
//   subTitle: 'subTitle' + index,
// }));

const imageUrl =
  'https://static.cnbetacdn.com/article/2020/10/749acf2189b964f.jpg';

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <NavigationBackComponent theme="light" />
        <NavigationBackComponent theme="dark" />
        <Avatar url={imageUrl} size={40} />
        <Avatar url={imageUrl} size={100} />
        <Avatar url={imageUrl} size={200} />
        <Avatar url={imageUrl} size={300} />
        <ErrorComponent errorInfo={'111'} />
        <ErrorComponent errorInfo={'222'} />
        <DropdownArrow />
        <DropdownArrow theme="dark" />
        <DropdownArrow />
        <DropdownArrow />
        <Loading />
        {/* <LoadingComponent  /> */}
        <ThemedLineView style={{ marginVertical: 10 }} />
        {/* <ArticleLoading /> */}
        <NavigationBar />
        <ThemedLineView style={{ marginVertical: 10 }} />
        <ThemedText>{'111'}</ThemedText>
        <ThemedLineView style={{ marginVertical: 10 }} />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    //alignItems: 'center',
    marginTop: 50,
  },
});
