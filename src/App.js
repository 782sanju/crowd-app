import React from 'react'
import { Provider } from 'react-redux'
import PageContainer from './components/PageContainer'
import store from './redux/store'

import UsersContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UsersContainer />
        <PageContainer />
      </div>
    </Provider>
  )
}

export default App
