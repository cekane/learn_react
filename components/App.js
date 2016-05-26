import React from 'react';

import { Button } from './Button'
import { Display } from './Display'

export class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			number: 2,
			numbers: [1,2],
			mappedNumbers: [],
			filteredNumbers: [],
			reducedNumbers: 0
		}

		this.addToArray = this._addToArray.bind(this);
		this.clearArray = this._clearArray.bind(this);
	}



	_addToArray(){

		const index = this.state.number + 1;
		const newNumbers = this.state.numbers.concat([index]);
		this.setState({ number: index , numbers: newNumbers});
	}

	_clearArray(){
		const newNumbers = [1,2];
		const index = 2;
		this.setState({ number: index , numbers: newNumbers});
	}


	render() {
		return (
			<div>
				
				<div className="row">
					<div className="col-md-3">
						<Button onClick={this.addToArray}>Add to array </Button>
					</div>
					<div className="col-md-3">							
						<Button onClick={this.clearArray}>Clear array</Button>
					</div>
					<div className="col-md-6">
						<center>
							<h1>Array Value</h1>
							<h2 >[{ this.state.numbers.toString() }]</h2>
						</center>
					</div>	
				</div>

				<Display header="Count: " value={ this.state.numbers.toString() } ></Display>
				<Display header="Mapped Array: " value={ this.state.numbers.map(x => x * 2).toString() } ></Display>
				<Display header="Filtered Array: " value={ this.state.numbers.filter(function(value){return value>=4;}).toString() } ></Display>
				<Display header="Prev + Next from Array: " value={ this.state.numbers.reduce((prev, curr)=>(prev+curr)) } ></Display>


			</div>
		);
	}
}
