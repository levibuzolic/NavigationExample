import * as React from 'react';
import {View, Text, Button, StyleSheet, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components",
]);

// Setting this to false fixes the issue
const PREVENT_ACCESSIBILITY_LABEL_BUBBLING = true;

// Setting this to true fixes the issue
const SHOW_NESTED_HEADER = false;

const RootNavigator = createStackNavigator();
const NestedNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator screenOptions={{headerShown: false}}>
        <RootNavigator.Screen name="Home" component={Screen} />
        <RootNavigator.Screen name="Nested" component={Nested} />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}

function Nested() {
  return (
    <NestedNavigator.Navigator
      screenOptions={{headerShown: SHOW_NESTED_HEADER}}>
      <NestedNavigator.Screen name="NestedScreen" component={Screen} />
    </NestedNavigator.Navigator>
  );
}

function PreventAccessibilityLabelBubbling(props: {
  flex: boolean;
  children: React.ReactNode;
}) {
  if (PREVENT_ACCESSIBILITY_LABEL_BUBBLING) {
    return (
      <View
        accessible={false}
        accessibilityLabel=""
        style={props.flex ? styles.flex : undefined}>
        {props.children}
      </View>
    );
  }

  return props.children as JSX.Element;
}

function Screen({route, navigation: {navigate}}: any) {
  return (
    <PreventAccessibilityLabelBubbling flex>
      <View style={{paddingTop: 20}}>
        <Text>Current screen: {route.name}</Text>
        <Button onPress={() => navigate('Home')} title="Home" />
        <Text>Nested Routes:</Text>
        <Button
          onPress={() => navigate('Nested', {screen: 'NestedScreen'})}
          title="NestedScreen"
        />
      </View>
    </PreventAccessibilityLabelBubbling>
  );
}

const styles = StyleSheet.create({flex: {flex: 1}});
