import React from "react";

const Dictionary = props => (
<div>
    {
        props.word && <p className="dictionary__title">Word: 
            <span className="dictionary__result"> {props.word}</span>
        </p>
    }

    {
        props.phonetic && <p className="dictionary__title">Phonetic: 
            <span className="dictionary__result"> {props.phonetic}</span>
        </p>
    }

    {
        props.ADefinition && props.AExample && <p className="dictionary__title">Adjective: 
            <span className="dictionary__result"> {props.ADefinition} {props.AExample}</span>
        </p> 
    }

    {
        props.EDefinition && props.Eexample && <p className="dictionary__title">Exclamation: 
            <span className="dictionary__result"> {props.EDefinition} {props.Eexample}</span>
        </p>
        
    }



    {
        props.NDefinition && props.Nexample && <p className="dictionary__title">Noun: 
            <span className="dictionary__result"> {props.NDefinition} {props.Nexample}</span>
        </p>
    }

    {
        props.vDefinition && props.vexample && <p className="dictionary__title">Verb: 
            <span className="dictionary__result"> {props.vDefinition} {props.vexample}</span>
        </p>
    }

    {
        props.error && <p className="dictionary__title">
            <span className="dictionary__error"> {props.error}</span>
        </p>
    }


</div>

);







export default Dictionary 