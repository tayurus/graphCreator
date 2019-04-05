import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from './components';
import './App.css';

class App extends Component {

  render() {

    const { mode, dispatch } = this.props;

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

      </div>
    );
  }
}


function mapStateToProps(state) {
  const { mode } = state.modsReducer;
  return {mode};
}

const connectedApp = connect(mapStateToProps, null)(App);

export { connectedApp as App };
