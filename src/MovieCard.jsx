import React, {Component} from "react";
import Card from "./Cards";

class MovieCard extends Component {
    constructor(props){
        super(props);
        // this.setState({
        //     value : props.passValues
        // })
        this.state = {
            value : props.values
        }
    }

    updateValue = () => {
        this.setState({
            value : this.props.passValues
        })
    }
    
    render(){
        return(
            <>
            <div>
                <Card values = {this.props.passValues.trim()}/>
            </div>
            </>
        )
    }
}




export default MovieCard;