import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {StyleSheet} from 'react-native'

import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Title,
  View,
  Text
} from "native-base";


// import { Text, View } from "react-native";
// import HomeScreen from "./Components/HomeScreen";
import NewsIcon from "./Components/NewsIcon";

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
return (
  <Container>
        <Content />

    <View style={styles.container}>
      <Text>You are welcome to my NewsApp</Text>
      <Text>This is Home View</Text>
    </View>
    <Footer>
      <FooterTab>
        <Button active>
          <Icon name="home" />
        </Button>
        <Button onPress={() => navigation.navigate('News')}>
          {/* <NewsIcon /> */}
          <Icon name="chatbox" />
        </Button>
        <Button >
          <Icon name="location" />
        </Button>
        <Button>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);
}


export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="News" component={NewsIcon} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
