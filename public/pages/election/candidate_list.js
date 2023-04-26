import React, { Component } from "react";
import {
  Grid,
  Table,
  Button,
  Form,
  Image,
  Header,
  Icon,
  Menu,
  Modal,
  Sidebar,
  Container,
  Card,
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";
class VotingList extends Component {
  state = {
    election_address: Cookies.get("address"),
    election_name: "",
    election_description: "",
    candidates: [],
    cand_name: "",
    cand_desc: "",
    buffer: "",
    loading: false,
  };
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

  captureFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };

  convertToBuffer = async (reader) => {
    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    this.setState({ buffer });
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
        <Link route={`/election/${Cookies.get("address")}/company_dashboard`}>
          <a>
            <Menu.Item style={{ color: "grey" }}>
              <Icon name="dashboard" />
              Dashboard
            </Menu.Item>
          </a>
        </Link>
        <Link route={`/election/${Cookies.get("address")}/candidate_list`}>
          <a>
            <Menu.Item as="a" style={{ color: "grey" }}>
              <Icon name="user outline" />
              Candidate List
            </Menu.Item>
          </a>
        </Link>
        <Link route={`/election/${Cookies.get("address")}/voting_list`}>
          <a>
            <Menu.Item as="a" style={{ color: "grey" }}>
              <Icon name="list" />
              Voter List
            </Menu.Item>
          </a>
        </Link>
        <hr />
        <Button onClick={this.signOut} style={{ backgroundColor: "white" }}>
          <Menu.Item as="a" style={{ color: "grey" }}>
            <Icon name="sign out" />
            Sign Out
          </Menu.Item>
        </Button>
      </Sidebar>
    </Sidebar.Pushable>
  )
  signOut() {
    Cookies.remove("address");
    Cookies.remove("company_email");
    Cookies.remove("company_id");
    alert("Logging out.");
  }

  render() {
    const { Body, Row, HeaderCell, Header } = Table;
    return (
      <div>
        <Helmet>
          <title>Candidate list!</title>
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
              <br />
              <br />
              <Grid.Column width={14} style={{ minHeight: "630px" }}>
                <Grid.Column style={{ float: "left", width: "60%" }}>
                  <Header as="h2" color="black">
                    Candidate List
                  </Header>
                  <Container>
                    <table>{this.renderTable()}</table>
                  </Container>
                </Grid.Column>
                <Grid.Column style={{ float: "right", width: "30%" }}>
                  <Container style={{ marginLeft: "50px" }}>
                    <Header as="h2" color="black" textAlign="center">
                      Add Candidate
                    </Header>
                    <Card style={{ width: "100%" }}>
                      <Form.Group
                        size="large"
                        style={{ marginLeft: "15%", marginRight: "15%" }}
                      >
                        <br />
                        <Form.Input
                          fluid
                          label="Name:"
                          placeholder="Enter your name."
                          onChange={(event) =>
                            this.setState({ cand_name: event.target.value })
                          }
                          textAlign="center"
                        />
                        <p>Image:</p>

                        <div
                          class="ui fluid"
                          style={{ borderWidth: "0px", marginRight: "20%" }}
                        >
                          <input
                            type="file"
                            class="inputfile"
                            id="embedpollfileinput"
                            onChange={this.captureFile}
                            style={{
                              maxWidth: "0.1px",
                              maxHeight: "0.1px",
                              zIndex: "-1",
                              overflow: "hidden",
                              position: "absolute",
                            }}
                          />
                          <label
                            for="embedpollfileinput"
                            class="ui huge blue right floated button"
                            style={{ fontSize: "15px", marginRight: "30%" }}
                          >
                            <i class="ui upload icon"></i>
                            Upload image
                          </label>
                        </div>
                        <br />
                        <br />
                        <br />
                        <p>Description:</p>
                        <Form.Input
                          as="TextArea"
                          fluid
                          label="Description:"
                          placeholder="Describe here."
                          style={{ width: "100%" }}
                          centered={true}
                          onChange={(event) =>
                            this.setState({ cand_desc: event.target.value })
                          }
                        />
                        <br />
                        <br />
                        <p>E-mail ID: </p>
                        <Form.Input
                          fluid
                          id="email"
                          placeholder="Enter your e-mail"
                        />
                        <br />
                        <Button
                          primary
                          onClick={this.onSubmit}
                          loading={this.state.loading}
                          style={{ Bottom: "10px", marginBottom: "10px" }}
                        >
                          Register
                        </Button>
                      </Form.Group>
                    </Card>
                  </Container>
                </Grid.Column>
              </Grid.Column>
            </Layout>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default VotingList;