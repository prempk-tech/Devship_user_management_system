import React, { useState } from 'react';
import '../styles/register.css'
import axios from 'axios';

function Reguser() {
    const [reguser, setreguser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        confirmpassword: ''
    })

    function detailsUpdater(data) {
        switch (data.target.id) {
            case 'firstname':
                setreguser(previous => ({
                    ...previous,
                    firstname: data.target.value
                }))
                break;
            case 'lastname':
                setreguser(previous => ({
                    ...previous,
                    lastname: data.target.value
                }))
                break;
            case 'email':
                setreguser(previous => ({
                    ...previous,
                    email: data.target.value
                }))
                break;
            case 'username':
                setreguser(previous => ({
                    ...previous,
                    username: data.target.value
                }))
                break;
            case 'password':
                setreguser(previous => ({
                    ...previous,
                    password: data.target.value
                }))
                break;
            case 'repassword':
                setreguser(previous => ({
                    ...previous,
                    confirmpassword: data.target.value
                }))
                break;
            case 'default':
                break
        }
    }

    async function signup() {
        let item = { reguser }
        console.log(item.reguser)

        let password = document.getElementById('password').value
        let repassword = document.getElementById('repassword').value
        let message = document.getElementById('validatepass')

        if (password.length != 0) {
            if (password == repassword) {
                message.textContent = "password match";
                message.style.backgroundColor = "#3ae374";

                axios.post('http://localhost:3004/api/reguser/Addreguser',
                    item.reguser
                )
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            else {
                message.textContent = "password does not match";
                message.style.backgroundColor = "#ff4d4d";
            }
        }
        else {
            alert('password cant be empty')
            message.textContent = "";
        }



        // let result = await axios('http://localhost:3004/api/reguser/Addreguser', {
        //     method: 'POST',
        //     body: JSON.stringify(item),
        //     Headers: {
        //         "Content-Type": 'application/json',
        //         "Accept": 'application/json'
        //     }
        // })
        // try {
        //     result = await result.json()
        //     console.log("result", result)
        // }
        // catch (error) {
        //     console.log(error);
        // }
    }

    return (
        <div className='col-sm-6 offset-sm-3'>
            <h1>Register Page</h1>
            <input type='text' id='firstname' onChange={(e) => detailsUpdater(e)} className='form-control' placeholder='firstname' />
            <br />
            <input type='text' id='lastname' onChange={(e) => detailsUpdater(e)} className='form-control' placeholder='Lastname' />
            <br />
            <input type='text' id='email' onChange={(e) => detailsUpdater(e)} className='form-control' placeholder='email' />
            <br />
            <input type='text' id='username' onChange={(e) => detailsUpdater(e)} className='form-control' placeholder='username' />
            <br />
            <input type='password' id='password' onChange={(e) => detailsUpdater(e)} className='form-control' placeholder='password' />
            <br />
            <input type='password' id='repassword' onChange={(e) => detailsUpdater(e)} className='form-control' placeholder='confirmpassword' />
            <br />
            <small id="validatepass" className='validate'></small>
            <br />
            <button className='btn btn-primary' onClick={() => signup()}>submit</button>
        </div>
    )
}

export default Reguser;