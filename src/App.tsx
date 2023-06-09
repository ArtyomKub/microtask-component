import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import Body from "./site/Body";

function App() {
    return (
        <div>
            <Header titleForHeader={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
        </div>
    );
}

export default App;
