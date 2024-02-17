import React from 'react'
import Count1 from './Ui/pages/Count1'
import { Provider } from 'react-redux'
import store from "./App/Store"
export default function ReduxMain() {
  return (
    <div>
<Provider store={store}>

      <Count1/>
</Provider>
    </div>
  )
}
