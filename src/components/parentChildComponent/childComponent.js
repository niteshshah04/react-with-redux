import React, { PropTypes } from 'react';


export default class ChildComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log(this);
        return (
            <div></div>
        )
    }

}

ChildComponent.contextTypes = {
    company: PropTypes.object
}