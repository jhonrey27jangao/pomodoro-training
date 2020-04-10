import React from 'react'
import {render} from '@testing-library/react';
import {Layout} from './layout'

describe('Test for Layout Component', () => {
    it('should render Layout', () => {
        const {container} = render(
            <Layout/>
        )
        expect(container).toMatchSnapshot();
    })

})