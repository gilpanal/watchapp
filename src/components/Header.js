import React from 'react'
import { func } from 'prop-types'

const Header = ({ handleSearchMovie }) => {
  return (
    <div>
      <h2>Watch App</h2>
      <form onSubmit={handleSearchMovie}>
        <input
          type="text"
          name="search"
          className="field"
          placeholder="Type id imbd"
        />
        <button className="button">Search</button>
      </form>
      <br/>
    </div>
  )
}

Header.propTypes = {
  handleSearchMovie: func
}
export default Header
