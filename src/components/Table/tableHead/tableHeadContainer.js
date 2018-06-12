import React from 'react';

export default class TableHead extends React.Component {
    
    

    render() {
        return <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Quality</th>
            <th scope="col">Box Set</th>
            <th scope="col">Market Price</th>
            <th scope="col">Average Price</th>
            <th scope="col-3">Quantity</th>
          </tr>
        </thead>
        
    }

};