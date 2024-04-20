import { useState } from "react"
import { Link } from "react-router-dom"

function User ()  {

    const [users, setUsers] = useState([{
        Name:"Saman", Email:"Saman99@gmail.com",  Age:25
    }])


  return (
    <div className="flex justify-center items-center h-screen bg-cyan-100 w-screen">
        <div className="flex justify-center items-center w-full ">

            <Link to="/create" className="m-3 p-1 font-bold border-2 border-red-500 rounded-md">Add +</Link>
            
                <table className="shadow-2xl border-2 border-cyan-400 w-6/12" >

                    <thead className="">
                        <tr>
                            <th className="py-3 bg-cyan-200">Name</th>
                            <th className="py-3 bg-cyan-200">Email</th>
                            <th className="py-3 bg-cyan-200">Age</th>
                            <th className="py-3 bg-cyan-200">Action</th>

                        </tr>
                    </thead>

                    <tbody className="text-center ">
                    
                        {
                            users.map((user) =>{
                            
                                return <tr>
                                        <td className="px-6 py-3">{user.Name}</td>

                                        <td className="px-6 py-3">{user.Email}</td>

                                        <td className="px-6 py-3">{user.Age}</td>

                                        <td className=" gap-x-[1px] grid grid-flow-col m-2">
                                            <span className="cursor-pointer  "><button className="border-2 border-black p-1 rounded-md">Edit</button></span>
                                            <span className="cursor-pointer mx-[-20px]"><button  className="border-2 border-black p-1 rounded-md">Delete</button></span>
                                    
                                    </td>
                                    
                                    
                                    
                                </tr>
                                
                            
                                
                                
                            })
                        }
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default User;
