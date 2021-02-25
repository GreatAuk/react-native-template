import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  TabBar,
  NavigationState,
} from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.scene]} />;

const SecondRoute = () => <View style={[styles.scene]} />;

const initialLayout = {width: Dimensions.get('window').width};

type State = NavigationState<{
  key: string;
  title: string;
}>;

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <TabBar
      {...props}
      // scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: 'red',
    // width: 50,
  },
  label: {
    fontWeight: '400',
    color: '#000',
  },
  tabStyle: {
    // width: 'auto',
  },
  scene: {
    flex: 1,
  },
});
