import React from 'react';
import Card from './Card';
import './Placeholder.css';

class Placeholder extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      jdata: []
    }
  }

  componentDidMount () {
    this.setState({isLoading: true})
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          this.setState({ jdata: data });
        }
      )
    }
    catch (e) {
      console.log(`Error: ${e}`)
    }
    finally {
      this.setState({isLoading: false})
    }
  }

  render () {
    return(
      <div>
        <div>
          { this.state.isLoading && 
            "Loading"
          }
        </div>

        {this.state.jdata.map((row, i) => 
          <div className="outercard">
            <Card key={i} data={row}/>
          </div>
        )}
      </div>
    );
  }

}


export default Placeholder;