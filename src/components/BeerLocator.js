import React, { Component } from 'react';
import { Button, Label, Form, FormGroup, Input, Col, Row, FormFeedback } from 'reactstrap';

export default class BeerLocator extends Component {
    constructor(props) {
        super(props)
    }
    

    // populateOptions(props) {
    //     return this.populateOptions.map((option, index) => (
    //         <option key={id} value={option}>{option}</option>
    //     ));
    // }
    render() {
        console.log(this.props)
        return (
            <>
                <Form>
                    <FormGroup>
                        <Input
                          type='select'
                        />
                    </FormGroup>
                </Form>
            </>
        )
    }
}
