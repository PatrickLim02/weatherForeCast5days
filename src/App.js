import React, { useEffect } from 'react';
import Navigation from './screen/Router'
import { Provider } from 'react-redux';
import store from './redux/store';


const ReduxProvider = (props) => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>

    )
}

export default ReduxProvider;