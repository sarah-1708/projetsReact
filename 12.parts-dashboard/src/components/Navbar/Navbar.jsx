import { Link } from "react-router-dom"

export default function Navbar() {

    return (
    <div className="p-4 flex w-full bg-slate-200">
        
      <img src="" alt="logo" />
      <div className="w-full">
      <h1 className=" text-center">All For Guitar</h1>
      <nav className=" w-full flex justify-between ">
        <ul className=" mx-20 px-12 justify-between place-content-stretch w-full gap-20 flex text-center ">
         
            <li>Outils</li>
            <li>Partitions</li>
            <li>Dashboard</li>

        </ul>
      </nav>
</div>
<button className="border-solid border-2 rounded w-[150px] border-slate-600 hover:text-slate-200 hover:bg-slate-800">Se Connecter</button>
    </div>
  )
}
