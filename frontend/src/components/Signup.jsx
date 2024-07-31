 import React from "react"
 export default function Signup(){
    return<>
    <div  className="container h-svh w-svw flex justify-center items-center">
      <div className="box bg-white shadow-sm max-w-md mx-auto rounded-lg p-10"> 
         <div className="flex flex-col justify-center items-center ">
            <div className=" text-center">
               <h2 className="text-4xl text-slate-700 font-bold">Sign Up</h2>
               <p className="text-slate-500 text-lg m-4">Lets get started with your Signup page</p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <input type="name"  placeholder="name" className="shadow appearance-none border border-slate-500  focus:border-blue-500  rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
               <input type="email"  placeholder="email" className="shadow appearance-none border border-slate-500  focus:border-blue-500 rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
               <input type="password" placeholder="password"className="shadow appearance-none border  border-slate-500  focus:border-blue-500 rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
               <button className="p-2 w-72 mt-2 bg-slate-600 text-white rounded-lg hover:bg-blue-700 ">Sign Up</button>
               <div className="font-semibold text-center m-2">or</div>
               <button className="flex justify-around bg-white text-slate-600  border border-gray-300 rounded-lg p-2 w-72 mt-2 hover:bg-slate-600 hover:text-white ">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                   <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                   <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                   <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                   <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
               </svg>  
                  <span className="text-lg font-bold">Continue with Google</span>
               </button>
               <div className="flex text-center justify-center mt-1"> <p> Already have an account?</p>
               <a href="/login" className="text-blue-400 underline hover:text-blue-700 ml-1">Login</a>
               </div>
            </div>
         </div>
      </div>
    </div>
    </>
 }