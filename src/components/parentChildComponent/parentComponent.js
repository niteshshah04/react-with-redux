import React, { PropTypes } from 'react';


export default class ParentComponent extends React.Component {

    constructor() {
        super();
    }

    getChildContext() {//function name should be same(predefined)
        return { company: { "Sample": "Data" } }
    }

    render() {
        return (
            <div></div>
        )
    }

}

ParentComponent.childContextTypes = {
    company: PropTypes.object
}