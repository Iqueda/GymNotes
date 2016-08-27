import React from 'react'

function ThreeForm () {
    return (
         <div className='row'>
           <div className='col-xs-6'>
             <input type='text' className='form-control' placeholder='exercise 1'></input>
           </div>
           <div className='col-xs-3'>
             <input type='number' className='form-control' placeholder='repetitions'></input>
           </div>
           <div className='col-xs-3'>
             <input type='number' className='form-control' placeholder='weigth'></input>
           </div>
           <div className='col-xs-6'>
             <input type='text' className='form-control' placeholder='exercise 2'></input>
           </div>
           <div className='col-xs-3'>
             <input type='number' className='form-control' placeholder='repetitions'></input>
           </div>
           <div className='col-xs-3'>
             <input type='number' className='form-control' placeholder='weigth'></input>
           </div>
           <div className='col-xs-6'>
             <input type='text' className='form-control' placeholder='exercise 3'></input>
           </div>
           <div className='col-xs-3'>
             <input type='number' className='form-control' placeholder='repetitions'></input>
           </div>
           <div className='col-xs-3'>
             <input type='number' className='form-control' placeholder='weigth'></input>
           </div>
         </div>
    )
}

export default ThreeForm