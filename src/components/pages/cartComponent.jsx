import React from 'react';
import Card from '../Cards/singleCardComponent';
//import API from '../../utils/API';
import Panel from '../Panel/panelComponent';
import Search from '../Search/searchBar.jsx';
import axios from 'axios';

class Cart extends React.Component {
    state = {
          result: {},
          search: ""
      
        };
        
      
      componenentWillMount() {
        this.searchCards("Abyssal Nightstalker");
      }
    
      searchCards() {
        const url = '../../../Cards.json';

        axios.get(url)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
            
      };

    handleUserInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    };
      
      // searchCards = query => {
      //   API.search(query)
      //     .then(res => this.setState({result: res.results}))
      //     .catch(err => console.log(err));
      // };
      
      //When form is submitted, search the api for the value of 'this.state.search'
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchCards(this.state.search)
      };

    render() {
        return (<div>

        <div className="jumbotron mx-auto">
        <Search 
    handleUserInput={this.handleUserInput}
    value={this.state.search}
    handleFormSubmit={this.handleFormSubmit}
  />
        </div>
        <div className=" d-flex flex-wrap ">

        <Panel 
          heading={this.state.result.productName || "Search for a Card"}
        >
          {this.state.result.productName
            ? <Card
            src={this.state.result.image}
            name={this.state.result.productName}
            />

            : <h3>No Results To Display</h3>}
          </Panel>
        
      
        </div>
    
    
          </div>);
    }
}


export default Cart;