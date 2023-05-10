import Logo from '../components/logo'
import Register from '../components/Register'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  const token = "2XNVmuH2YVhYvVGgh4YkV9m6ph4c8CxMMX6UzeeDh7LJTmgdLk4Fz38QLwFt3sSY6BHkCeK8B3Jhgt23Q4dX6A3pmFRMGnJejwDg";
  let code;
  let error;
  let message;
  
  const onRegister = async (user) => {
    const register = await fetch('http://52.59.33.40/web/api/register',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      mode: 'cors',
      body: JSON.stringify({firstname:user.firstname, surname:user.surname})
    })

    console.log(register.json());
    const registerRes = await register.json();
    
    if (registerRes.status == "200") {
      if (registerRes.result == "success") {
        code = registerRes.code;
        message = await readMessage();
        console.log(message);

        alert(message)
      } else {
        error = registerRes.result;
        alert(error)
      }      
    }else {
      error = registerRes.message;
      alert(error)
    }

  }

  const readMessage = async (code) => {
    const read = await fetch('http://52.59.33.40/web/api/code',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      mode: 'no-cors',
      body: JSON.stringify({code: code})
    })

    const readRes = await read.json()
    
    if (readRes.status == "200") {
      if (readRes.result == "success") {
        return await readRes.message
      } else {
        error = readRes.result
        alert(error)
      }      
    }else{
      error = readRes.message
      alert(error)
    }

  }

  return (
    <div>
        <Head>
            <title>GRAINBULK</title>
        </Head>

        <div className='container mt-4'>
            <div className='d-flex justify-content-center m-0 p-0'>
                <Logo></Logo>
            </div>            

            <h6 className='text-dark text-center'>
                <strong>👋 WELCOME TO GRAINBULK</strong>
            </h6>

            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card card-body p-4 m-4">
                        <Register onRegister={onRegister}></Register>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
