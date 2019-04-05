import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Point } from './components';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleFieldClick = this.handleFieldClick.bind(this);
  }

  handleFieldClick(e) {
    const { dispatch } = this.props;

    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    const newPoint = {
      x, y
    }

    dispatch({type: 'newPoint', newPoint});
  }

  render() {

    const { mode, dispatch, points } = this.props;
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

        <svg className="App__field" onClickCapture ={(e) => this.handleFieldClick(e)}>

          {points.map( point => <Point  point={point}/>)}

        </svg>

      </div>
    );
  }
}


function mapStateToProps(state) {
  const { mode } = state.modsReducer;
  const { points } = state.pointsReducer;
  return {mode, points};
}

const connectedApp = connect(mapStateToProps, null)(App);

export { connectedApp as App };
