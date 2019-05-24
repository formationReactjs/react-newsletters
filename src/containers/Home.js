import React, { Component, Fragment } from 'react';

const advices = [
    {
        label: "C'est facile",
        id: 1
    },
    {
        label: "C'est rapide",
        id: 2
    },
    {
        label: "C'est fun",
        id: 3
    }
];

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                </div>
                <ul>
                    {advices.map(monItem => {
                        return(
                            <li key={"key-" +monItem.id}>{monItem.label}</li>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}
