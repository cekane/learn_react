import React from 'react'

import { button } from './Button.css'

export class Button extends React.Component {

	render () {
		const {
			onClick,
			children: text
		} = this.props

		return (
			<div className={ button } onClick={ onClick }><h1>{ text }</h1></div>
		)
	}
}