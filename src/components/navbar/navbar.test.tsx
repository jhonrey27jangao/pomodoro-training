import React from 'react'
import {render} from '@testing-library/react';
import {Navbar} from './navbar'

describe('Test for Navbar Component', () => {
    it('should render Navbar', () => {
        const {container} = render(
            <Navbar/>
        )
        expect(container).toMatchSnapshot();
    })

})