import React, { PropTypes } from 'react';
import { fetchData } from '../action';
import { connect } from "react-redux";

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // fetcheData: [],
        };
    }
  
    componentWillMount(){
        // this.props.fetchData();
    }

    render() {
        let details=this.props.dataObj;
        console.log(details);
        return (
            <div>
                Hello details...!!!!
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dataObj: state.landingDetails.responseArray
    };
}

export default connect(mapStateToProps, { fetchData })(Details);
 