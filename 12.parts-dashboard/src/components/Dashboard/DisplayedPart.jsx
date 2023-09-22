import React from 'react'
import {useParams} from 'react-router-dom'
import { usePartStore } from '../../partStore'


//affiche le contenu de la page selon l'onglet sélectionné dans la SidebarDashboard
export default function DisplayedPart() {


    const {id} = useParams()
    const part= usePartStore((state)=>state.part)
    const actualPart = part?.find(part=> part.id === id)
    
    return (
    <div className="px-10">
        
      <p className="text-slate-100 text-4xl mb-2 mt-8">{actualPart?.title}</p>

    </div>
  )
}
