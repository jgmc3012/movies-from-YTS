import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from '../pages/HomeContainer'
import HomeMovie from '../pages/HomeMovie'

const App = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/Movie" component={HomeMovie} />
            {/* <Route component={}/> */}
        </Switch>
    </BrowserRouter>
)

export default App