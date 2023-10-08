import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
interface FormData{
  name:string
  surname:string
  classnum:string
}

export default function Home() {
  const[form,setForm]= useState({name:'',surname:'',classnum:''})

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(() => setForm({
        name:'',
        surname:'',
        classnum:''
      }
        ))
    } catch (error) {
      console.log(error);
    }
  }



  const handleSubmit = async (data:FormData)=>{
    try{
      create(data)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
<main className="p-4">
    <div>
        <div className="text-center bg-teal-600">
            <h1 className="text-3xl font-bold">FastTyping Tournament</h1>
            <p className="text-gray-600">at NIS School by Asset Almas 11C</p>
            <p className="text-gray-600">Club: Fullstack Development</p>
        </div>
        </div>
        <div className='flex'>
        <div className="mt-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold">About FastTyping Tournament</h2>
                <p className="text-gray-700">Welcome to the FastTyping Tournament at NIS School, organized by Asset Almas 11C and the Fullstack Development club. This exciting competition will test your typing speed and accuracy. Join us for a fun and challenging event!</p>
            </div>
        </div>

    <div className="w-1/3 pl-8">
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Registration</h2>
            <form className="space-y-4" onSubmit={e=>{
                e.preventDefault()
                handleSubmit(form)
            }}>
                <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" value={form.name} onChange={e => setForm({... form, name:e.target.value})}/>
                <input type="text" placeholder="Surname" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" value={form.surname} onChange={e => setForm({... form, surname:e.target.value})}/>
                <input type="text" placeholder="Class" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" value={form.classnum} onChange={e => setForm({... form, classnum:e.target.value})}/>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
        </div> 
    </div>
    </div>
</main>



  )
}
