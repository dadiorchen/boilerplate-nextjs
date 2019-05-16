//@flow
import {shallow} from 'enzyme'
import React from 'react'

import Index from './pages/index.js' 

describe('test', () => {
	it('test', () => {
		const props		= {
			url		: {
				query		: {
					ln		: 'zh',
				}
			},
		}
		const index		= shallow(
			//$FlowFixMe
			<Index {...props} />
		)
		console.log(index.debug())
	})
})
