import { useState } from 'react'
import BuggyCounter from './BuggyCounter'
import ErrorBoundary from './ErrorBoundary'
import Color from './Color'

import './App.css'

function App() {

  return (
    <>
    {/*<BuggyCounter/>}  --> without boundary whole app crashes*/}
    {/* <ErrorBoundary> --> no crash, error ui
      <BuggyCounter/>
    </ErrorBoundary> */}
      <Color/>
    </>
  )
}

export default App
