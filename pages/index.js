//@flow
import React from 'react'

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
		<div>
			{this.state.ln === 'en' ?
				<div>Hi, I am Dadiorchen!</div>
			:
				<div>嗨, 我是陈征!</div>
			}
		</div>
		)
	}
}
