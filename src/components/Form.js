import React from "react";




class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getWord}>
                <input className="search-word" type="text" name="word" placeholder="Search for a word" />
                <button className="search-button" ></button>
            </form>
        )
    }
}


export default Form;