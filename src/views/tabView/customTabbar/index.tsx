import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {TabView, SceneMap, NavigationState} from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.scene]} />;

const SecondRoute = () => <View style={[styles.scene]} />;

const {width} = Dimensions.get('window');
const initialLayout = {width};

type State = NavigationState<{
  key: string;
  title: string;
}>;

export default function TabViewCustomTabbar() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props) => {
    const {position} = props;
    const len = props.navigationState.routes.length;
    const NAVWIDTH = width - 120;
    const itemWidth = NAVWIDTH / len;
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const left = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map((inputIndex) => inputIndex * itemWidth),
    });

    return (
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
        <View style={styles.nav}>
          <View
            style={{
              flexDirection: 'row',
              width: NAVWIDTH,
              justifyContent: 'center',
            }}>
            {props.navigationState.routes.map((route, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={[styles.tabItem, {width: itemWidth}]}
                  onPress={() => setIndex(i)}>
                  <Text
                    style={{
                      color: index === i ? '#333' : '#999',
                      fontSize: index === i ? 18 : 15,
                      fontWeight: '700',
                    }}>
                    {route.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <Animated.View
              style={{
                position: 'absolute',
                bottom: 0,
                left,
                width: itemWidth,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 36,
                  height: 3,
                  backgroundColor: 'blue',
                  borderRadius: 2,
                }}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    );
  };

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
  scene: {
    flex: 1,
  },
  container: {
    borderBottomWidth: 1.6,
    borderColor: '#eee',
  },
  nav: {
    width,
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: 44,
    justifyContent: 'center',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
