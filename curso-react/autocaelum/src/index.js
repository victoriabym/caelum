import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
/* pages */
import HomePage from './pages/HomePage';
import ContatoPage from './pages/ContatoPage';
import SobrePage from './pages/SobrePage';
import VeiculosPage from './pages/VeiculosPage';

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={HomePage} exact/>
					<Route path="/sobre" component={SobrePage} />
					<Route path="/veiculos" component={VeiculosPage} />
					<Route path="/contato" component={ContatoPage} />
				</Switch>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
