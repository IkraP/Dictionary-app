import React from "react";
import Form from "./components/Form";
import Dictionary from "./components/Dictionary";
import Savedlogo from "../src/img/saved logo trans-1@2x.png";



class DictionaryApp extends React.Component {
  state = {
    word: null,
    phonetic: null,
    ADefinition: null,
    AExample: null,
    EDefinition: null,
    Eexample: null,
    NDefinition: null,
    Nexample: null,
    vDefinition: null,
    vexample: null,
    error: null
  }

  getWord = async (e) => {
    e.preventDefault();
    const word = e.target.elements.word.value;
    if(!word) {
       return this.setState({
        error: "Please enter a word"
    })}
    const api_call = await fetch(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${word}`)
    const data = await api_call.json();
    console.log(data);

      this.setState({
        word: data.word ? data.word : null,
        phonetic: data.phonetic,
        ADefinition: data.meaning.adjective ? data.meaning.adjective[0].definition : null,
        AExample: data.meaning.adjective ? data.meaning.adjective[0].example : null,
        EDefinition: data.meaning.exclamation ? data.meaning.exclamation[0].definition : null,
        Eexample: data.meaning.exclamation ? data.meaning.exclamation[0].example : null,
        NDefinition: data.meaning.noun ? data.meaning.noun[0].definition : null,
        Nexample: data.meaning.noun ? data.meaning.noun[0].example : null,
        vDefinition: data.meaning.verb ? data.meaning.verb[0].definition : null,
        vexample: data.meaning.verb ? data.meaning.verb[0].example : null
      })

    }

  render() {
    //any logic required for the app goes here!
  return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-12 col-xs-12 col-md-12 title-container">
                  <img className="savedlogo" src={Savedlogo} alt="saved logo" />
                  <Form  getWord = {this.getWord}/>
                </div>
                <div className="col-12 col-xs-12 col-md-12 form-container">
                  <Dictionary 
                    word = {this.state.word}
                    phonetic = {this.state.phonetic}
                    EDefinition = {this.state.EDefinition}
                    Eexample = {this.state.Eexample} 
                    ADefinition = {this.state.ADefinition}
                    AExample = {this.state.AExample}
                    NDefinition = {this.state.NDefinition}
                    Nexample = {this.state.Nexample}
                    vDefinition = {this.state.vDefinition}
                    vexample =  {this.state.vexample}
                    error = {this.state.error} />

                    
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
  }
}



export default DictionaryApp;


