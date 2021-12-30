import React from 'react'
import _uniqueId from 'lodash/uniqueId';


function Meaning(props) {
    return <React.Fragment>
        {props.meaning.map((item) => {
            return (
                <div key={_uniqueId('prefix-')} >
                    <div style={{ display: "flex", paddingLeft: "0.5rem" }} >
                        <p style={{ fontWeight: "bold", paddingRight: "1rem" }} >Word:</p>
                        <p >{item.word}</p>
                    </div>
                    <div style={{ display: "flex", paddingLeft: "0.5rem" }} >
                        <p style={{ fontWeight: "bold", paddingRight: "1rem" }} >Origin:</p>
                        <p >{item.origin}</p>
                    </div>
                    <hr></hr>
                    <ul>
                        {item.meanings.map((meaning) => {
                            return (
                                <div key={_uniqueId('prefix-')}>
                                    <li key={_uniqueId('prefix-')} >
                                        <div style={{ display: "flex" }} >
                                            <p style={{ paddingRight: "0.4rem", fontWeight: "bold" }} > Type:</p>
                                            <p  >{meaning.partOfSpeech}</p>
                                        </div>
                                        <span>{meaning.definitions.map((defs) => {
                                            return (
                                                <ul key={_uniqueId('prefix-')}>
                                                    <li>
                                                        <p>{defs.definition}</p>
                                                        <p>{defs.example}</p>
                                                    </li>
                                                </ul>
                                            );
                                        })} </span>
                                    </li>
                                    <hr></hr>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            );
        })}
    </React.Fragment >
}

export default Meaning
