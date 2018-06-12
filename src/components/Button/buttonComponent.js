import React from 'react';

export default class Quantity extends React.Component {
// constructor(props) {
//     super(props);

  //  const QuantityDummy = Math.floor(Math.random() * 10 + 1);

    handleEvent = (e) => {
        e.preventDefault();
       
  }

   render() {
       return (
           <button
           className=" btn-success"
            onClick={this.handleEvent}>Add to Cart</button>

       )
   }

}