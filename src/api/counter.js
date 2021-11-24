import React, {Component} from "react";



class Counter extends Component{
    constructor(props){
        super(props);
        this.state= {
            count: 0 
            ,count1: 0
            ,count2:0
        }

    }
    
    decrement = () =>{
        if(this.state.count == 0){
            this.setState({
                count:0
            });
        }else{
            this.setState({
                count:this.state.count - 1
            });
        }
    }
    increment = () =>{
        this.setState({count: this.state.count + 1});
    }

    Less = () =>{
        if(this.state.count1 == 0){
            this.setState({
                count1:0
            });
        }else{
            this.setState({
                count1:this.state.count1 - 1
            });
        }
    }
    Add = () =>{
        this.setState({count1: this.state.count1 + 1});
    }

    Less2 = () =>{
        if(this.state.count2 == 0){
            this.setState({
                count2:0
            });
        }else{
            this.setState({
                count2:this.state.count2 - 1
            });
        }
    }
    Add2 = () =>{
        this.setState({count2: this.state.count2 + 1});
    }
    render() {
        return(
            <div className="move">
            <div className="columns2">
                <div className="qty">
                    <button onClick={this.Less}>-</button>
                    <h2>{this.state.count1}</h2>
                    <button onClick={this.Add} className="plus">+</button>
                </div>

                <div className="qty2">
                    <button onClick={this.decrement}>-</button>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.increment} className="plus">+</button>
                </div>

                <div className="qty3">
                    <button onClick={this.Less2}>-</button>
                    <h2>{this.state.count2}</h2>
                    <button onClick={this.Add2} className="plus">+</button>
                </div>



            
            </div>
            </div>
            
        );
    }
}

export default Counter