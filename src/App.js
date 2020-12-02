import React, { Component } from "react";
import Header from "./component/header/header";
import Leftnav from "./component/left-nav/left-nav";
import {Row, Col} from "react-bootstrap";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Settings from './component/settings/settings';
import Dashboard from './component/dashboard/dashboard';
import All from './component/alltodos/alltodos';
import Account from './component/account/account'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { getTodos } from './component/todo-data';

class App extends Component {
	state = { 
		todos: getTodos()
	};
	render() {

		return (
			<Router>
			<div className="App">
				<Row>
					<Col xs={12}>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col xs={2}>
					<Leftnav/>
					</Col>
					<Col xs={10}className="mt-5" >
					
							
							<Route exact path="/alltodos" component={All}/>
							<Route exact path="/settings" component={Settings}/>
							<Route exact path="/account" component={Account}/>
							<Route 
							exact path="/dashboard"
							render={() => <Dashboard  todos ={this.state.todos}/>}
							/>
							
					</Col>
				</Row>
				
			</div></Router>
		);
	}
}
export default App;
