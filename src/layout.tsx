import { Outlet } from "react-router-dom";



export  function Layout() {
  return (
    <div className="h-screen flex flex-col  "
     >

      

 
      <main className="flex-1  flex items-center justify-center flex-col "
      
     >
        <Outlet />
      </main>
    </div>
  );
}
