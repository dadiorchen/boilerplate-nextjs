//@flow
import {shallow} from 'enzyme'
import React from 'react'

import Index from './pages/index.js' 

describe('test', () => {
	it('test', () => {
		const index		= shallow(<Index/>)
		console.log(index.debug())
	})
})
