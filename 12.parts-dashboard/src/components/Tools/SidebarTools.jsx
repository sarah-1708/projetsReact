import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useToolStore } from '../../toolStore'
import DisplayedTool from './DisplayedTool'

//affiche le menu de la sidebar du dashboard
export default function SidebarTools() {
        const tool = useToolStore((state)=>state.tool)

       
       //const parts = useSelector(state => state.parts)

       console.log(tool);

  return (
    <>
    <aside className="shrink-0 bg-slate-100 w-[275px] text-slate-900 flex flex-col items-center pt-2 border-r border-gray-300">
        
        <ul className="w-full divide-y divide-slate-300">

        {tool.length > 0 && tool.map(tool => (
            <li 
            key={tool.title}
            className="bg-slate-100 relative p-4 hover:bg-slate-200 cursor-pointer ">
                <Link to={`tool/${tool.title}`}>
                <span className="flex flex-col text-lg font-semibold">{tool.title}</span>
                </Link>
            </li>  
                ))}
        </ul>

    </aside>
    <DisplayedTool/>
    </>
  )
}