import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePartStore } from '../../partStore'
import DisplayedPart from './DisplayedPart'

//affiche le menu de la sidebar du dashboard
export default function SidebarDashboard() {
        const part = usePartStore((state)=>state.part)

       
       //const parts = useSelector(state => state.parts)

       console.log(part);

  return (
    <>
    <aside className="shrink-0 bg-slate-100 w-[275px] text-slate-900 flex flex-col items-center pt-2 border-r border-gray-300">
        
        <ul className="w-full divide-y divide-slate-300">

        {part.length > 0 && part.map(part => (
            <li 
            key={part.id}
            className="bg-slate-100 relative p-4 hover:bg-slate-200 cursor-pointer ">
                <Link to={`part/${part.id}`}>
                <span className="flex flex-col text-lg font-semibold">{part.title}</span>
                </Link>
            </li>  
                ))}
        </ul>

    </aside>
    <DisplayedPart/>
    </>
  )
}
