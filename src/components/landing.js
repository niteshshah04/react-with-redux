import React, { PropTypes } from 'react';
import { fetchData } from './action';
import { connect } from "react-redux";
import Details from './testComponent/details';
import { Card, ListGroup, Form, Button } from 'react-bootstrap';

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetchedData: [],
            data: [
                { id: '1', name: 'TOM' },
                { id: '2', name: 'DAVID' }
            ]
        };
    }

    componentWillMount() {
        this.props.fetchData(this.state.data);
    }

    handleChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        // let details=this.props.fetchedData.data;
        return (
            <div>
                <Card style={{ width: '25rem', margin: 'auto', padding: '1%' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={this.handleChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </Card>
                <Details />

                <div class="card">
                    <div class="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fetchedData: state.responseArray
    };
}

export default connect(mapStateToProps, { fetchData })(Landing);
