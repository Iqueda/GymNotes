import React from 'react'
import { Link } from 'react-router'

function Home () {
    return (
    	<div className="jumbotron col-sm-12 text-center" style= {{background: 'transparent'}}>
        <h1>Start Your Training</h1>
          <Link to='/UserDetails' type='button' className='btn btn-lg btn-primary'>Ready to Workout?</Link>        
      </div>
    )
  }

export default Home
