import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Point, AdjacencyMatrix } from './components';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleFieldClick = this.handleFieldClick.bind(this);
    this.handlePointClick = this.handlePointClick.bind(this);
  }

  handleFieldClick(e) {
    const { dispatch, mode } = this.props;

    if (mode === 'createPoint') {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; //x position within the element.
      var y = e.clientY - rect.top;  //y position within the element.
      const newPoint = {
        x, y
      }

      dispatch({type: 'newPoint', newPoint});
    }
  }

  handlePointClick(e) {
    e.stopPropagation();

    const { mode, dispatch } = this.props;

    if (mode === 'connectPoints') {
      dispatch({type: 'selectPoint', pointText: parseInt(e.target.getAttribute('data-text'))});
    }
  }

  drawLines(points, adjacencyMatrix){

    let connectedPointsPairs = [];

    adjacencyMatrix.forEach( (row, rowIndex) => {
      row.forEach( (col, colIndex) => {
        if (col === 1 && colIndex !== rowIndex) {
          connectedPointsPairs.push([points[colIndex], points[rowIndex]]);
        }
      })
    })

    return connectedPointsPairs.map( pair => (<line stroke="red"
                                                    stroke-width="2"
                                                    x1={pair[0].x}
                                                    y1={pair[0].y}
                                                    x2={pair[1].x}
                                                    y2={pair[1].y}/>))
  }

  render() {
    console.log('suka');
    const { mode, dispatch, points, adjacencyMatrix } = this.props;
    return (
      <div className="App">

        <div className="App__mods-panel">
          <Button title='Создать точку'
                  onClick={() => dispatch({type: 'changeMode', mode: 'createPoint'})}
                  className={mode === 'createPoint' ? 'button_active' : ''}/>
          <Button title='Построить маршрут'
                  onClick={() => dispatch({type: 'changeMode', mode: 'createPath'})}
                  className={mode === 'createPath' ? 'button_active' : ''}/>
          <Button title='Соединить точки'
                  onClick={() => dispatch({type: 'changeMode', mode: 'connectPoints'})}
                  className={mode === 'connectPoints' ? 'button_active' : ''}/>
        </div>

        <div className="App__row">

          <svg className="App__field" onClick={(e) => this.handleFieldClick(e)}>
            {points.map( (point, pointKey) => <Point key={pointKey} onClick={this.handlePointClick}
                                         point={point}/>)}

            {this.drawLines(points, adjacencyMatrix)}
          </svg>


          <AdjacencyMatrix matrix={adjacencyMatrix}/>

        </div>



      </div>
    );
  }
}


function mapStateToProps(state) {
  const { mode } = state.modsReducer;
  const { points, adjacencyMatrix } = state.pointsReducer;

  return {mode, points, adjacencyMatrix};
}

const connectedApp = connect(mapStateToProps, null)(App);

export { connectedApp as App };
