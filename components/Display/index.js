import React from 'react'

import { value as valueClass, header as headerClass} from './Display.css'

export class Display extends React.Component {

	render () {
		const {
			value,
			header
		} = this.props

		return (
			<div className="row">
				<div className="col-md-6">
					<div className={ headerClass }>
						<h1>{ header }</h1>
						
					</div>

				</div>
				<div className="col-md-6">
					<div className={ valueClass }><h2> { value }</h2></div>
				</div>
			</div>
		)
	}
}