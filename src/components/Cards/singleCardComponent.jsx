import React from 'react';

const Card = props => {
  
    // constructor(props) {
    //     super(props); 
    //     this.state = { name: ''};

    //     this.handleUserInput = this.handleUserInput.bind(this);
    // }

    // handleUserInput = (e) => {
    //     const value = e.target.value;
    //    // const name = e.target.name;
    //     this.setState({
    //         name: value
    //     });
    // };

        const style= {
            width: '18rem',
            justifyContent: 'center',
            alignItems: 'center'
        };

      
      return(
            <div className="card mx-auto shadow-sm p-3 mb-5 rounded" style={style}>
                <div className="card-body text-center">
                    <img 
                    src={props.src} alt={props.name} />
                    <h4>{props.name}</h4>
                {/* <p>{props.boxset}</p>
                    <p>{props.condition}</p> */}
                    <div className="input-group mb-3 col-auto">
                        <input type="number" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-small" style={{width: '5%'}}/>
                            <div className="input-group-append">
                              <span className="input-group-text" id="inputGroup-sizing-default">of 4</span>
                            </div>
                    </div>

                {/* This is dummy data, fix later */}
                    <p><strong>~$2.61</strong></p>
                </div>
            </div>
      );


        
    }

    export default Card;