import React, { Component } from "react";
import {
  Grid,
  Header,
  Button,
  Form,
  Input,
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
    election_address: Cookies.get('address'),
    election_name: '',
    election_description: '',
    emailArr: [],
    idArr: [],
    item: [],
}
  async componentDidMount() {
        let i = -1;
    const items = ia.map((ia) => {
      i++;
      return {
        header: email[i],
        description: (
          <div>
            <br />

            <Modal
              size={"tiny"}
              trigger={
                <Button basic id={ia} color="green">
                  Edit
                </Button>
              }
              closeIcon
            >
              <Modal.Header>Edit E-mail ID</Modal.Header>
              <center>
                <Modal.Content>
                  <Input
                    id={`EmailVal${ia}`}
                    placeholder="E-mail ID"
                    style={{ marginBottom: "5%", marginTop: "5%" }}
                  />
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    positive
                    icon="checkmark"
                    labelPosition="right"
                    content="Yes"
                    padding="30"
                    style={{ marginBottom: "10px" }}
                    onClick={this.updateEmail}
                    id={ia}
                  />
                  <Button negative>No</Button>
                </Modal.Actions>
              </center>
            </Modal>
            <Button
              negative
              basic
              id={ia}
              value={ia}
              onClick={this.deleteEmail}
            >
              Delete
            </Button>
          </div>
        ),
      };
    });
    this.setState({ item: items });
  }
  renderTable = () => {
    return <Card.Group items={this.state.item} />;
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
            <Menu.Item style={{ color: "grey", fontColor: "grey" }}>
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
    Cookies.remove('address');
    Cookies.remove('company_email');
    Cookies.remove('company_id');
    alert("Logging out.");
}
  render() {
    return (
      <div>
        <Helmet>
          <title>Voting list</title>
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
              <br />
              <br />
              <Grid.Column width={14} style={{ minHeight: "630px" }}>
                <Grid.Column style={{ float: "left", width: "60%" }}>
                  <Header as="h2" color="black">
                    Voter List
                  </Header>
                  <Container>
                    <table>{this.renderTable()}</table>
                  </Container>
                </Grid.Column>
                <Grid.Column style={{ float: "right", width: "30%" }}>
                  <Container style={{}}>
                    <Header as="h2" color="black">
                      Register Voter
                    </Header>
                    <Card style={{ width: "100%" }}>
                      <br />
                      <Form.Group
                        size="large"
                        style={{ marginLeft: "15%", marginRight: "15%" }}
                      >
                        <Form.Input
                          style={{ marginTop: "10px" }}
                          fluid
                          id="register_voter_email"
                          label="Email:"
                          placeholder="Enter your email."
                          textAlign="center"
                        />

                        <br />
                        <br />
                        <Button
                          primary
                          style={{ Bottom: "10px", marginBottom: "15px" }}
                          onClick={this.register}
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
