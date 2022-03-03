import React, {Component} from 'react';
import Title from './Title';
import Clock from './Clock';
import Footer from './Footer';

class App extends Component{
    render(){
        return(  
        <div>
            <Title title="Digital Clock"></Title>
            <Clock/>
            <Footer footer = "@samuelbwambale"/>

        </div>
        )
        
    }
}
export default App
