import React, {Component} from 'react';
import { Link } from 'react-router';
import ThreeForm from './ThreeForm';
import FourForm from './FourForm'

class TrainingForm extends Component {
    render() {
        return (
            <div className='container-fluid'>
              <form className='form-horizontal'>
                <div className='col-sm-4' style={{background:'yellow'}}>
                  <h1>Workout A</h1>
                    <label>Chest</label>
                      <FourForm />
                    <label>Triceps</label>
                      <ThreeForm />
                        <button type='button' className='btn btn-default' style={{marginTop:10}}>Submit Workout</button>
                </div>
                <div className='col-sm-4' style={{background:'green'}}>
                  <h1>Workout B</h1>
                    <label>Back</label>
                      <FourForm />
                    <label>Biceps</label>
                      <ThreeForm />
                       <button type='button' className='btn btn-default' style={{marginTop:10}}>Submit Workout</button>
                </div>
                <div className='col-sm-4' style={{background:'gray'}}>
                  <h1>Workout C</h1>
                    <label>Leg</label>
                      <FourForm />
                        <label>Shoulder</label>
                      <ThreeForm />
                       <button type='button' className='btn btn-default' style={{marginTop:10}}>Submit Workout</button>
                </div>
              </form>
                <Link to='/' type='button' className='btn btn-lg btn-primary' style={{marginTop:20}}>Return</Link>  
            </div>    
        );
    }
}

export default TrainingForm;