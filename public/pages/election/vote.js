import React, { Component } from "react";
import {
  Grid,
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Sidebar,
  Container,
  Card,
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";

class VotingList extends Component {
  state = {
    numCand: "",
    election_address: Cookies.get("address"),
    election_name: "",
    election_description: "",
    candidates: [],
    cand_name: "",
    cand_desc: "",
    buffer: "",
    ipfsHash: null,
    loading: false,
  };
  GridExampleGrid = () => <Grid>{columns}</Grid>;
  SidebarExampleVisible = () => (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
        style={{ backgroundColor: "white", borderWidth: "10px" }}
      >
        <Menu.Item as="a" style={{ color: "grey" }}>
          <h2>MENU</h2>
          <hr />
        </Menu.Item>
        <Menu.Item as="a" style={{ color: "grey" }}>
          <Icon name="dashboard" />
          Dashboard
        </Menu.Item>
        <hr />
        <Button onClick={this.signOut} style={{ backgroundColor: "white" }}>
          <Menu.Item as="a" style={{ color: "grey" }}>
            <Icon name="sign out" />
            Sign Out
          </Menu.Item>
        </Button>
      </Sidebar>
    </Sidebar.Pushable>
  );

  signOut() {
    Cookies.remove("address");
    Cookies.remove("voter_email");
    alert("Logging out.");
  }

  getElectionDetails = () => {
    const { election_name, election_description } = this.state;

    return (
      <div style={{ marginLeft: "45%", marginBottom: "2%", marginTop: "2%" }}>
        <Header as="h2">
          <Icon name="address card" />
          <Header.Content>
            {election_name}
            <Header.Subheader>{election_description}</Header.Subheader>
          </Header.Content>
        </Header>
      </div>
    );
  };

  renderTable = () => {
    return <Card.Group items={this.state.item} />;
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Vote</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../../static/logo3.png"
          />
        </Helmet>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>{this.SidebarExampleVisible()}</Grid.Column>
            <Layout>
              {this.getElectionDetails()}
              <Grid.Column style={{ minHeight: "77vh", marginLeft: "10%" }}>
                <Container>{this.renderTable()}</Container>
              </Grid.Column>
            </Layout>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default VotingList;
