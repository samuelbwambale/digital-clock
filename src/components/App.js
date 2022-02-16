import React, {Component} from 'react';
import Title from './Title';
import Clock from './Clock';
class App extends Component{
    render(){
        return(  
        <div>
            <Title title="Digital Clock"></Title>
            <Clock/>
        </div>
        )
        
    }
}
export default App
