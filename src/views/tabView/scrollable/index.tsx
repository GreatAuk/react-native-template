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
const ThridRoute = () => <View style={[styles.scene]} />;
const FourthRoute = () => <View style={[styles.scene]} />;
const FifthRoute = () => <View style={[styles.scene]} />;
const SixRoute = () => <View style={[styles.scene]} />;
const SevenRoute = () => <View style={[styles.scene]} />;

const initialLayout = {width: Dimensions.get('window').width};

type State = NavigationState<{
  key: string;
  title: string;
}>;

export default function TabViewScrollable() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'Thrid', title: 'Thrid'},
    {key: 'Fourth', title: 'Fourth'},
    {key: 'Fifth', title: 'Fifth'},
    {key: 'Sixth', title: 'Sixth'},
    {key: 'Seventh', title: 'Seventh111111111'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    Thrid: ThridRoute,
    Fourth: FourthRoute,
    Fifth: FifthRoute,
    Sixth: SixRoute,
    Seventh: SevenRoute,
  });

  const renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <TabBar
      {...props}
      scrollEnabled
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
    width: 'auto',
  },
  scene: {
    flex: 1,
  },
});
