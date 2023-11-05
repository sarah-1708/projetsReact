import React from 'react'
import {useParams} from 'react-router-dom'
import { useToolStore } from '../../toolStore'
import GridLayout from "react-grid-layout";
//import { IconName } from "react-icons/ci";
import { AiFillCloseSquare,AiOutlineSearch,AiOutlineQuestionCircle } from "react-icons/ai"
import SidebarTeachers from './SidebarTeachers';




//affiche le contenu de la page selon l'onglet sélectionné dans la SidebarDashboard
export default function DisplayedTeacher() {


    const {title} = useParams()
    const tool= useToolStore((state)=>state.tool)
    const actualTool = tool?.find(tool=> tool.title === title)

    
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 3, h: 2 ,minW: 3, maxW: 4 },
      { i: "d", x: 3, y: 3, w: 3, h: 3 ,minW: 5, maxW: 6 }
    ];

    const chord_notation =[
        {name:"A", frets:"x32220"}
    ]

    return (
    <div className="flex justify-center">
        
      <form className ="bg-slate-200 flex flex-col"action="" method="post">
          <div className="flex flex-col">
          <label className ="text-slate-800" htmlFor="">Nom</label>
          <input className="rounded" type="text" />
          </div>
          <div className="flex flex-col">
          <label className ="text-slate-800"  htmlFor="">Prénom</label>
          <input className="rounded" type="text" />
          </div>
          <div className="flex flex-col">
          <label className ="text-slate-800"  htmlFor="">Email</label>
          <input className="rounded" type="text" />
          </div>
          <div  className="flex flex-col">
          <label className ="text-slate-800"  htmlFor="">Numéro de SIRET</label>
          <input className="rounded" type="text" />
          </div>

          <button className="bg-slate-800 rounded text-slate-200 px-4 py-2 mt-5 "type="submit">M'enregistrer</button>
        </form>

    </div>
  )
}