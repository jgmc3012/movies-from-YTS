import React, {Fragment} from 'react'
import './SearchInput'
import SearchInput from './SearchInput'
import './styles/NavBar.css'

const NavBar =  (props) => (
<Fragment>
    <nav className="navbar navbar-dark d-flex">
        <div>
            <h1 className="navbar-brand">Netflix from YTS</h1>
        </div>
        <div>
            <form className="" method="get">
                <SearchInput
                    idList='lista'
                />
            </form>
        </div>
    </nav>
</Fragment>
)

export default NavBar