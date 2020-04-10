import React from 'react'
import {render} from '@testing-library/react';
import Pomodoro from '../index'

describe('Test for Modal Component', () => {
    it('should render Modal', () => {
        const {container} = render(
            <Pomodoro/>
        )
        expect(container).toMatchSnapshot();
    })

})