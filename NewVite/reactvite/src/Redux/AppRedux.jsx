import React from 'react';
import Count from './Ui/count/Count';
import { Provider } from 'react-redux';
import store from'./redux/App/Store'

export default function AppRedux() {
  return (
    <div>
     <Provider store={store}>

        <Count/>
     </Provider>
    </div>
  )
}
