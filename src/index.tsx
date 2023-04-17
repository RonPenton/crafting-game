import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import UI from './UI';
import * as ReactDOMClient from 'react-dom/client';

const App: React.FC = () => {
    return (
        <div>
            <Game />
            <UI />
        </div>
    );
};



const root = ReactDOMClient.createRoot(document.getElementById('app')!);
root.render(<App />)
