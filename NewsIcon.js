import React, { Component } from "react";
import { Alert, View, Text, ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Item,
  Footer,
  FooterTab,
  Icon
} from "native-base";

import NewsList from "./NewsList";

import { getArticles } from "./NewsData";

export default class NewsIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    };
  }

  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data
        });
      },
      error => {
        Alert.alert("Error", "Something went wrong!");
      }
    );
  }

  render() {
    let view = this.state.isLoading ? (
      <View style={{ marginTop: 30 }}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text>Loading...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <NewsList data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{view}
          </Content>
          <Footer>
            <FooterTab>
              <Button>
                <Icon name="home" />
              </Button>
              <Button active onPress={() => navigation.navigate('News')}>
                <Icon name="chatbox" />
              </Button>
              <Button >
                <Icon active name="location" />
              </Button>
              <Button>
                <Icon name="person" />
              </Button>
            </FooterTab>
          </Footer>

        {/* </Content> */}
      </Container>
    );
  }
}
