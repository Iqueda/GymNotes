import React, {Component} from 'react';
import { Link } from 'react-router';

class UserDetails extends Component {
    render() {
        return (
            <div className='container'>
               <form className='form-horizontal'>
                  <div className='col-sm-6'>
                    <h1 className='text-center'>User Details</h1>
                      <label> User Name:</label>
                        <input type='text' className='form-control' placeholder='Tells us your Name'/>
                      <label> Heigth:</label>
                        <input type='text' className='form-control' placeholder='what is your heigth?'/>
                      <label> Weigth:</label>
                        <input type='text' className='form-control' placeholder='what is  your weigth?'/>
                    </div>
                    <div className='col-sm-3'>
                      <h1 className='text-center'>Measurements</h1>
                        <label> Chest:</label>
                          <input type='text' className='form-control' placeholder='Chest Measure'/>
                        <label> Shoulder:</label>
                          <input type='text' className='form-control' placeholder='Shoulder Measure'/>
                        <label> Legs:</label>
                     <div>
                       <input type='text' className='form-inline' placeholder='Rigth Leg Measure'/>
                       <input type='text' className='form-inline' placeholder='Left Leg Measure'/>
                     </div>
                       <label> Bicpes:</label>
                     <div>
                       <input type='text' className='form-inline' placeholder='Rigth Biceps'/>
                       <input type='text' className='form-inline' placeholder='Left Biceps'/>
                     </div>
                       <label> Triceps:</label>
                     <div>
                       <input type='text' className='form-inline' placeholder='Rigth Tricpes'/>
                       <input type='text' className='form-inline' placeholder='Left Triceps'/>
                      </div>
                    </div>
                  </form>  
                  <div className='col-sm-12'>
                    <Link to='/TrainingForm' type='button' className='btn btn-lg btn-success'>Submit your Details</Link>              
                    <Link to='/' type='button' className='btn btn-lg btn-primary' style={{marginLeft:'20'}}>Return</Link>              
                  </div>
            </div>
        );
    }
}

export default UserDetails;