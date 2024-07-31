
export default function Login(){
    return<>
     <div  className="container h-svh w-svw  flex justify-center items-center">
      <div className="box bg-white shadow-sm max-w-md mx-auto rounded-lg p-10"> 
         <div className="flex flex-col justify-center items-center ">
            <div className=" text-center">
               <h2 className="text-4xl text-slate-700 font-bold">Login</h2>
               <p className="text-slate-500 text-lg m-4">Lets get started with Login</p>
            </div>
            <div className="flex flex-col justify-center items-center">
               {/* <input type="name"  placeholder="name" className="shadow appearance-none border border-blue-500 rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/> */}
               <input type="email"  placeholder="email" className="shadow appearance-none border border-slate-500  focus:border-blue-500 rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
               <input type="password" placeholder="password"className="shadow appearance-none border border-slate-500  focus:border-blue-500 rounded w-72 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
               <button className="p-2 w-72 mt-2 bg-slate-600 text-white rounded-lg hover:bg-blue-700">Login</button>
               <div className="flex text-center justify-center mt-1 "> <p>dont have an account?</p>
               <a href="/signup" className="text-blue-400 ml-1 underline hover:text-blue-700">Login</a>
               </div>
            </div>
         </div>
      </div>
    </div>
    </>
}