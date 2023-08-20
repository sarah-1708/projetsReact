import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Sidenote() {

       const notes = useSelector(state => state.notes)

  return (
    <aside className="shrink-0 bg-slate-100 w-[275px] text-slate-900 flex flex-col items-center pt-2 border-r border-gray-300">
        <p className="w-full text-center py-6 px-4 text-2xl text-slate-800 font-semibold border-b border-gray-900">Mes notes</p>
        <ul className="w-full divide-y divide-slate-300">

        {notes.list?.length > 0 && notes.list.map(note => (
            <li 
            key={note.id}
            className="bg-slate-100 relative p-4 hover:bg-slate-200 cursor-pointer ">
                <Link to={`note/${note.id}`}>
                <span className="flex flex-col text-lg font-semibold">{note.title}</span>
                <span className="text-gray-70">{note.subtitle}</span>
                </Link>
            </li>  
                ))}
        </ul>

    </aside>
  )
}
