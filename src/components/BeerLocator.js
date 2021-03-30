import React, { Component } from 'react';
import { Button, Label, Form, FormGroup, Input, Col, Row, FormFeedback } from 'reactstrap';

// export default class BeerLocator extends Component {
//     constructor(props) {
//         super(props)
//     }
    

//     // populateOptions(props) {
//     //     return this.populateOptions.map((option, index) => (
//     //         <option key={id} value={option}>{option}</option>
//     //     ));
//     // }

    
//     render() {
//         const styles = this.props.
//         console.log('heres props ' + this.props)
//         return (
//             <>
//                 <Form>
//                     <FormGroup>
//                         <Input
//                           type='select'
//                         />
//                     </FormGroup>
//                 </Form>
//             </>
//         )
//     }
// }



const BeerLocator = ({ item }) => {
    console.log('heres loc props:' + item);
    // console.log(item.style)
    // console.log(item.name);
    // console.log(item.labels);
  
        return (
          <div style={{width: '200px', display: 'inline-block'}}>
            
          </div>
        );
  
  };
  
  export default BeerLocator;