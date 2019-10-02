import React, {Fragment} from 'react'
import './SearchInput'
import SearchInput from './SearchInput'

const NavBar =  (props) => (
<Fragment>
    <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">Netflix from YTS</h1>
        <form className="form-inline" method="get">
            <SearchInput
                idList='lista'
            />
        </form>
    </nav>
</Fragment>
)

export default NavBar