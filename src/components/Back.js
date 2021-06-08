import React from 'react';
import { Link } from 'react-router-dom'

const Back = () => {
  return (
    <header>
      <div className="neon">
        <Link to="/">
          <span class="material-icons-outlined">
            chevron_left
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Back;