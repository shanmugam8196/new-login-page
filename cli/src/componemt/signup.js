import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { FaUserCircle,FaLock,FaLockOpen } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './signup.css'
import signup from './signup.jpeg'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Signup()
{

    const handlesubmit =(event)=>{
        
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config={headers:{"enctype":"multipart/form-data"}};
        axios.post('http://localhost:3004/Adduser',datastring,config)
        .then(function(response){
            if(response.data.status==='created'){
                alert('Inserted');
                window.location.reload();
            }
            else
                if(response.data.status==='error')
            {
                alert('query error');
                window.location.reload();
            }
            else{
                alert('contact admin');
                window.location.reload();
            }

        })
    }


    return(
        <>
        
            <div className='container'>
                
                <div className='row'>
                    <div className='col-lg-6 mt-5'>
                       
                            <h1 className='row-12 text-center'><b>Sign up</b></h1>
                            <form onSubmit={handlesubmit}>
                                <div className='user-div mt-5'>
                                    <FaUserCircle size="1rem"/>
                                    <input type="text" name="username" id="username" className='signup-input col-10' placeholder="Username"/>
                                </div>
                                <div className=' user-div mt-5'>
                                    <SiGmail size="1rem"/>
                                    <input type="text" name="email" id="email" className='signup-input col-10' placeholder="Your Email"/>
                                </div>
                                <div className=' user-div mt-5'>
                                    <FaLock size="1rem"/>
                                    <input type="password" name="password" id="password" className='signup-input col-10' placeholder="password"/>
                                </div>
                                <div className=' user-div mt-5'>
                                    <FaLockOpen size="1rem"/>
                                    <input type="password" name="repassword" id="repassword" className='signup-input col-10' placeholder="Repeat Your Password"/>
                                </div>
                                <div className='mt-3'>
                                <p><input type="checkbox" className='mr-3'/><b> I agree all statements in <span className='signup-terms'>Terms of service</span></b></p> 
                                </div>
                                <div className='text-center mt-5'>
                                    <input type="Submit" name="data_submit" id="data_submit" value="Register" className='btn btn-primary w-50'/>
                                </div>
                        </form>
                    </div>

                    <div className='col-lg-6'>
                        <div>
                            <img src={signup} className="container"></img>
                           <h5 className='col-12 text-center '><Link to="/signin" className='text-center signup-link'>I am already member</Link></h5> 
                        </div>
                    </div>
                    </div>
                    
                
            </div>
        </>
    );
}