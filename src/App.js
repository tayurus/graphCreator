import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from './components';

import './App.css';

class App extends Component {


  render() {

    const { mode } = this.props;

    return (
      <div className="App">

        <div className="App__mods-panel">
          <Button title='Создать точку' className={mode === 'createPoint' ? 'button_active' : ''}/>
          <Button title='Построить маршрут' className={mode === 'createPath' ? 'button_active' : ''}/>
          <Button title='Соединить точки' className={mode === 'connectPoints' ? 'button_active' : ''}/>
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  // console.log(state);
  const { mode } = state.modsReducer;
  return {mode};
}

const connectedApp = connect(mapStateToProps, null)(App);

export { connectedApp as App };
