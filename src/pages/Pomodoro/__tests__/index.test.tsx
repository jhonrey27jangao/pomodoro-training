import React from 'react'
import IndexPage from '../index'
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Formik, Form} from 'formik';
import {render, cleanup, fireEvent} from '@testing-library/react';

describe('Test for Index', () => {
    const mockStore = configureStore();
    let initialState: any;
    let store: any;
    beforeEach(() => {
        initialState=[]
    })

    afterEach(() => {
        cleanup();
    });

    it('Renders the index', async() => {
        const {container} = render (
        <Formik
            initialValues={initialState}
            onSubmit={() => {}}
            render={() => (
                <Form>
                    <Provider store={store}>
                        <IndexPage/>
                    </Provider>
                </Form>)}
                />,             
            )

        expect(container.firstChild).toMatchSnapshot();
    })
})