import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useToolStore } from '../../toolStore'



//affiche le menu de la sidebar du dashboard
export default function SidebarTeachers() {
        const tool = useToolStore((state)=>state.tool)

       
       //const parts = useSelector(state => state.parts)

       console.log(tool);

  return (
    <>
    {/*<aside className="shrink-0 bg-slate-100 w-[275px] text-slate-900 flex flex-col items-center pt-2 border-r border-gray-300">
        
        <form action="" method="post">
          <div className="flex flex-col">
          <label htmlFor="">Nom</label>
          <input className="rounded" type="text" />
          </div>
          <div className="flex flex-col">
          <label htmlFor="">Prénom</label>
          <input className="rounded" type="text" />
          </div>
          <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input className="rounded" type="text" />
          </div>
          <div className="flex flex-col">
          <label htmlFor="">Numéro de SIRET</label>
          <input className="rounded" type="text" />
          </div>

          <button className="bg-slate-800 rounded text-slate-200 px-4 py-2 mt-5 "type="submit">M'enregistrer</button>
        </form>

    </aside>*/}
   <DisplayedTeacher/>
    </>
  )
}