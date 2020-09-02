import React, { Component } from "react";

import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    const slickSettings = {
      autoplay: true,
      dots: true,
      speed: 500
    };

    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Container>
            <Menu borderless inverted size="massive">
              <Menu.Item header as="a">
                Project Test
              </Menu.Item>
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Action</Dropdown.Item>
                  <Dropdown.Item as="a">Another action</Dropdown.Item>
                  <Dropdown.Item as="a">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                  <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Container>
        </Grid>
        <Grid className="mobile only">
          <Menu inverted borderless size="huge" fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic
                  inverted
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              inverted
              fluid
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Action</Dropdown.Item>
                  <Dropdown.Item as="a">Another action</Dropdown.Item>
                  <Dropdown.Item as="a">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                  <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Menu>
        </Grid>
        <Container>
          <h1>新宿御苑</h1>
          <Segment vertical>
            <Grid stackable>
            <Grid.Column width={6}>
                <Image src="/static/images/wireframe/park1.jpg" />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                {" "}
                  <span className="sub">ピクニック</span>
                </Header>
                <p>
                春は満開の桜を見ながらお弁当を食べたり、ピクニックをしながら花見を楽しむことができます。
                新宿駅から徒歩圏内であるにもかかわらず広い敷地なので、家族でおでかけするにはとても良い公園です。
                オムツ替えができる場所は園内に14か所あり、赤ちゃん連れのお母さんにも安心。
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src=".../static/images/wireframe/park2.jpg" />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                 <span className="sub">植物園</span>
                </Header>
                <p>
                園内にある植物園。
                ガラス貼りの建物のなかは寒い季節でも暖かく、日本で野生には育たない温室植物を見ることができる。
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                <span className="sub">園内マップ</span>
                </Header>
                <p>
                広い園内はベビーカーで散歩をすることも可能。専用駐車場があり、車でも行きやすい。親子のための遊び場もある。
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="/static/images/wireframe/park3.jpg" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid columns={2}>
              <Grid.Column>
                &copy; 2017 Company, Inc. · <a href="#root">Privacy</a> ·{" "}
                <a href="#root">Terms</a>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <a href="#root">Back to top</a>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;