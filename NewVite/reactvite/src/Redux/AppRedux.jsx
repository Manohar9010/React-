import React from 'react';
import Count from './Ui/count/Count';
import { Provider } from 'react-redux';
import store from'./redux/App/Store'
import Amount from './Ui/Amount/Amount';
import Pointer from './Ui/Pointer/Pointer';

export default function AppRedux() {
  return (
    <div>
     <Provider store={store}>

        <Count/>
        <Amount/>
        <Pointer/>
     </Provider>
    </div>
  )
}
