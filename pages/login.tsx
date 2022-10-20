import React, { useState, useEffect } from 'react'
import data from '../components/data.json' assert { type: 'JSON' };
import Home from "./index"
import {useRouter} from 'next/router'

function Login() {

  const [username, setUsername] = useState<string>("");
  const router = useRouter()
  const [route, setRoute] = useState()
  const [error, setError] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const studenti:any = data[0].studenti;
    const studentiFiltered:any = studenti.filter((s:any) => e.target[0].value === s.username);
    const student:object = studentiFiltered[0];
    if(studentiFiltered.length < 1 || student.password !== e.target[1].value) {
      setError(true);
      e.target[1].value = "";
    } else {
      router.push("/");
    }
  }

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <div className='w-[350px]'>
        <div className='flex flex-col text-lg font-semibold'>
          Login
        </div>
        <div className="h-[250px] bg-[#fff5d9] border-2 border-solid border-[#a3a3a3]
            rounded-lg p-5">
          <form onSubmit={handleSubmit}>
            <div className='m-2 flex'>
              <input className='w-full border border-solid border-[#a3a3a3]
                rounded p-1 outline-none'
                type="text"
                name='username'
                placeholder='Unesite korisničko ime'
                />
              </div>
            <div className='m-2 flex'>
              <input className='w-full border border-solid border-[#a3a3a3]
                rounded p-1 outline-none'
                type="password"
                name='password'
                placeholder='Unesite lozinku'
                />
              </div>
            <div className='flex p-2 w-full h-[65px]'>
              {error ? <p className='text-red-600'>
                Korisničko ime i/ili lozinka je pogrešna.
                Pokušajte ponovo.
              </p> : ""}
            </div>
            <div className='m-2 flex'>
              <button className="bg-white py-1 px-3 border border-solid border-[#a3a3a3]
              rounded-lg" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;