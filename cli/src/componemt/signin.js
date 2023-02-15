import React,{useState,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import signin from './signin.jpeg'
import { FaUserFriends,FaLock,FaFacebookSquare,FaTwitterSquare,FaGoogle,FaGooglePlusSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios'
export default function Signin()
{

    const handlesubmit = (event) =>{
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3004/Signin',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Query Error');
                // window.location.href="./Signreg";
            } 
            else if(response.data.status === 'Success'){
                let userid = response.data.userid;
                localStorage.setItem("userid",userid);
                alert('Logined');
                // window.location.href="./Dashboard";
            } 
            else if(response.data.status === 'Invalid'){
                alert('Invalid username and password');
                // window.location.href="./Signreg";
            } 
            else{
                alert('Contact Admin');
                // window.location.href="./Signreg";
            }
        })
        .catch(function(error){
            alert('Error');
            // window.location.href="./Signreg";
        })

    }




    // const [userdetails,setUserdetails]=useState([])
   
    // useEffect(()=>{
    //     fetch('http://localhost:3004/getuser')
    //     .then((response)=>response.json())
    //     .then((json)=>setUserdetails(json));
       
    // },[]);
  
    // const data1=(()=>
    // {
       
    //     let username=document.getElementById("username").value;
    //     let password=document.getElementById("password").value;
    //    userdetails.find((value,index)=>{
    //     if(value.username==username && value.password==password)
    //     {
    //         alert("success");
    //     }
    //    else if(value.username!=username || value.password!=password)
    //    {
    //     alert("fail");
           
    //    }
       
    //   })
            
    // })

    return(
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6'>
                        <img src={signin} className="container" />
                        <h5 className='row-12 text-center '><Link to="/" className='text-center signup-link'>Create an account</Link></h5> 
                    </div>
                    <div className='col-lg-6'>
                        <form onSubmit={handlesubmit}>
                            <h1 className='col-12'><b>Sign in</b></h1>
                            <div className='user-div mt-5'>
                                <FaUserFriends/>
                                <input type="text" name="username" id="username" className='signup-input col-10' placeholder="Username"/>
                            </div>
                            <div className=' user-div mt-5'>
                                <FaLock size="1rem"/>
                                <input type="password" name="password" id="password" className='signup-input col-10' placeholder="password"/>
                            </div>
                            <div className='mt-4'>
                                <p><input type="checkbox" className='mr-4'/>Remember me</p>
                            </div>
                            <div className='mt-4'>
                                <input type="submit" value="Login" className='btn w-25 btn-primary'/>
                            </div>
                            </form>
                            <div className='mt-5'>
                                <p className='row text-center'>
                                    <p className='col-lg-3'>  Or login with</p>
                                    <p className='col-lg-3 '>
                                        <FaFacebookSquare size="1.5rem" className=''/>
                                        <FaTwitterSquare size="1.5rem" className='ml-2 text-primary'/>
                                        <FaGooglePlusSquare size="1.5rem" className='ml-2 text-danger'/>
                                    </p>  
                              </p>
                            </div>
                       
                    </div>
                                   
                </div>

            </div>
        </>
    );
}