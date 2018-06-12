import React from 'react';
import Quantity from '../../Button/buttonComponent';


const number = Math.floor(Math.random() * 20 + 1);
const number1 = Math.floor(Math.random() * 20 + 1);
const number2 = Math.floor(Math.random() * 20 + 1);

class TableBody extends React.Component {

    render() {
        return  <tbody>
        <tr>
          <th scope="row">1</th>
          <td><img src="https://placeimg.com/30/45/any" alt="placeholder" /></td>
          <td>Jace</td>
          <td>Mint</td>
          <td>Masters 2018</td>
          <td>Mint</td>
          <td>Masters 2018</td>
          <td>
              <div class="input-group mb-3 col-auto">
                  <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-small" style={{width: '5%'}}/>
                  <div class="input-group-append">
                      <span class="input-group-text" id="inputGroup-sizing-default">of {number}</span>
                  </div>
              </div>
          </td>
          <td><Quantity /></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td><img src="https://placeimg.com/30/45/people" alt="placeholder" /></td>
          <td>Chthulu</td>
          <td>Worn</td>
          <td>Doom I dunno</td>
          <td>Mint</td>
          <td>Masters 2018</td>
          <td>
              <div class="input-group mb-3 col-auto">
                  <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-small" style={{width: '5%'}}/>
                  <div class="input-group-append">
                      <span class="input-group-text" id="inputGroup-sizing-default">of {number1}</span>
                  </div>
              </div>
          </td>
          <td><Quantity /></td>

        </tr>
        <tr>
          <th scope="row">3</th>
          <td><img src="https://placeimg.com/30/45/animals" alt="placeholder"/></td>
          <td>Ian</td>
          <td>Poor</td>
          <td>Reality</td>
          <td>Mint</td>
          <td>Masters 2018</td>
          <td>
              <div class="input-group mb-3 col-auto">
                  <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-small" style={{width: '5%'}}/>
                  <div class="input-group-append">
                      <span class="input-group-text" id="inputGroup-sizing-default">of {number2}</span>
                  </div>
              </div>
          </td>
          <td><Quantity /></td>

        </tr>
      </tbody>
    
    
;

    }
       
}

 export default TableBody ;