import React, {Component} from 'react';
import { Link } from 'react-router';
import ThreeForm from './ThreeForm';
import FourForm from './FourForm'

class TrainingForm extends Component {
    render() {
        return (
            <div className='container-fluid'>
              <form className='form-horizontal'>
                <div className='col-sm-4' >
                <div style={{background:'yellow', padding: 5}}>
                  <h1>Workout A</h1>
                    <label>Chest</label>
                      <FourForm />
                    <label>Triceps</label>
                      <ThreeForm />
                        <button type='button' className='btn btn-default' style={{marginTop:10, marginBottom: 10}}>Submit Workout</button>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div style={{background:'green', padding: 5}}>
                  <h1>Workout B</h1>
                    <label>Back</label>
                      <FourForm />
                    <label>Biceps</label>
                      <ThreeForm />
                       <button type='button' className='btn btn-default' style={{marginTop:10, marginBottom: 10}}>Submit Workout</button>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div style={{background:'lightblue', padding: 5}}>
                  <h1>Workout C</h1>
                    <label>Leg</label>
                      <FourForm />
                        <label>Shoulder</label>
                      <ThreeForm />
                       <button type='button' className='btn btn-default' style={{marginTop:10, marginBottom: 10}}>Submit Workout</button>
                 </div>
                </div>
                    <div className='col-sm-12'>
                   <Link to='/' type='button' className='btn btn-lg btn-primary' style={{marginTop:20, marginBottom:20,}}>Return</Link>  
                    </div>
              </form>
            </div>    
        );
    }
}

export default TrainingForm;