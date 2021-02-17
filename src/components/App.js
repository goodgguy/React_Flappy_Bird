import React from 'react';
import Game from './Game';
import {Provider} from 'react-redux';

const App = ({store}) => {
    return (
        <div>
            <Provider store={store}>
            <Game/>
            </Provider>
        </div>
    )
}

export default App;