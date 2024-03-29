import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrement} =this.props;
        return (
        <div>
            <buttom 
            onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</buttom>
            { counters.map(counter =>(
                 <Counter
                  key={counter.id}
                  onDelete={onDelete} 
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  counter={counter}/>
            
                 ))}
        </div>
        );
    }
}
 
export default Counters ;