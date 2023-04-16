import React, { Component } from 'react';
import { Grid, Step, Icon, Menu, Sidebar, Container, Modal, Card, Header, Button, Item } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';

var b = 0;
let cand = [];
let graphEmail = [];
let graphVotes = [];

const options = {
	maintainAspectRatio: true,
	responsive: true,
	scales: {
		yAxes: [
			{
				height: '500px',
				stacked: true,
				gridLines: {
					display: true,
					color: 'rgba(255,99,132,0.2)',
				},
			},
		],
		xAxes: [
			{
				width: '500px',
				gridLines: {
					display: false,
				},
			},
		],
	},
};

const data = {
	labels: graphEmail,
	datasets: [
		{
			label: 'Vote Counts',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			borderWidth: 2,
			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			hoverBorderColor: 'rgba(255,99,132,1)',
			data: graphVotes,
		},
	],
};

class ContainerExampleContainer extends Component {
	state = {
		election_address: Cookies.get('address'),
		election_name: '',
		election_desc: '',
		voters: 0,
		candidates: 0,
		visible: false,
		loading: false,
		b: 0,
	};
	

	getElectionDetails = () => {
		const { election_name, election_desc } = this.state;

		return (
			<div style={{ marginLeft: '43%', marginBottom: '2%', marginTop: '2%', float: 'left' }}>
				<Header as="h2">
					<Icon name="address card" />
					<Header.Content>
						{election_name}
						<Header.Subheader>{election_desc}</Header.Subheader>
					</Header.Content>
				</Header>
			</div>
		);
	};
	CardExampleGroupProps = () => <Card.Group></Card.Group>;
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
				style={{ backgroundColor: 'white', borderWidth: '10px' }}
			>
				<Menu.Item as="a" style={{ color: 'grey' }}>
					<h2>MENU</h2>
					<hr />
				</Menu.Item>
				<Link route={`/election/${Cookies.get('address')}/company_dashboard`}>
					<a>
						<Menu.Item style={{ color: 'grey', fontColor: 'grey' }}>
							<Icon name="dashboard" />
							Dashboard
						</Menu.Item>
					</a>
				</Link>
				<Link route={`/election/${Cookies.get('address')}/candidate_list`}>
					<a>
						<Menu.Item as="a" style={{ color: 'grey' }}>
							<Icon name="user outline" />
							Candidate List
						</Menu.Item>
					</a>
				</Link>
				<Link route={`/election/${Cookies.get('address')}/voting_list`}>
					<a>
						<Menu.Item as="a" style={{ color: 'grey' }}>
							<Icon name="list" />
							Voter List
						</Menu.Item>
					</a>
				</Link>
				<hr />
				<Button onClick={this.signOut} style={{ backgroundColor: 'white' }}>
					<Menu.Item as="a" style={{ color: 'grey' }}>
						<Icon name="sign out" />
						Sign Out
					</Menu.Item>
				</Button>
			</Sidebar>
		</Sidebar.Pushable>
	);
	signOut() {
		Cookies.remove('address');
		Cookies.remove('company_email');
		Cookies.remove('company_id');
		alert('Logging out.');
		
	}
	endElection = async event => {
		let candidate = 0;
	};

	returnModal = () => <h1>I won the election</h1>;

	returnGraph = () => <Bar data={data} width={120} height={50} options={options} />;

	render() {
		return (
			<div>
				<Helmet>
					<title>Dashboard</title>
					<link rel="shortcut icon" type="image/x-icon" href="../../static/logo3.png" />
				</Helmet>
				<Grid>
					<Grid.Row>
						<Grid.Column width={2}>{this.SidebarExampleVisible()}</Grid.Column>

						<Layout>
							<Grid.Column width={16}>
								{this.getElectionDetails()}
								<Button
									negative
									style={{ float: 'right', marginTop: '2%' }}
									onClick={this.endElection}
									loading={this.state.loading}
								>
									End election
								</Button>
								<Step.Group style={{ minWidth: 1130, minHeight: 90 }}>
									<Step icon="users" title="Voters" description={this.state.b} />
									<Step icon="user outline" title="Candidates" description={this.state.candidates} />
									<Step
										icon="chart bar outline"
										title="Total Votes"
										description={this.state.voters}
									/>
								</Step.Group>
								{this.CardExampleGroupProps()}

								<Grid.Column>
									<br />
									<div className="he">
										<style jsx>{`
											.he {
												height: 50%;
												max-width: 100%;
											}
										`}</style>
										{this.returnGraph()}
									</div>
								</Grid.Column>
							</Grid.Column>
						</Layout>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default ContainerExampleContainer;
