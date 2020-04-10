import React from 'react'
import {render} from '@testing-library/react';
import {Button} from './button'

describe('Test for Button Component', () => {
    it('should render Button', () => {
        const {container} = render(
            <Button/>
        )
        expect(container).toMatchSnapshot();
    })

})