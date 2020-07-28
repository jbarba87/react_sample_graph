import React, { Component } from 'react';
import './Grafico.css';
import {Line, Bar} from 'react-chartjs-2';

class Grafico extends Component {
  constructor(props){
    super(props);
    this.state = { x: []};
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      fetch('http://127.0.0.1:4000')
      .then(res => res.json())
      .then(result => {
        this.setState({x:result})
        console.log(result);
      });
    }, 1000);
  }

  render() {
    return (
      <div className="Grafico">
        <div id="graph-div">
          <Line
            data = {{
              labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
              datasets:[
                {
                label: 'Data',
                backgroundColor: 'rgba(75,192,192,0.3)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.5,
                data: this.state.x,
                },
              ]
            }}

            options={{
              title:{
                display:true,
                text:'Random data from server',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
              scales : {
                yAxes: [{
                  ticks: {
                     min: 0,
                     max: 120,
                  }
               }]
              }
            }}
          />
        </div>
      </div> // Grafico div
    );
  }
}

export default Grafico;
