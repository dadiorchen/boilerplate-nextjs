//@flow
import React from 'react'
import '../i18n.js'
import { Translation } from 'react-i18next'

export default class Index extends React.Component<{
	props		: any,
},{
	ln		: 'en' | 'zh',
}>{
	constructor(props : any){
		super(props)
		console.warn('this is props:', props)
		console.warn('this is query:', props.url.query)
		this.state		= {
			ln		: props.url.query.ln || 'en',
		}
	}

	render(){
		return (
		<Translation>
			{
				t =>
				<div>
					<h1>{t('welcome', {lng:this.state.ln})}</h1>
				</div>
			}
		</Translation>
		)
	}
}
