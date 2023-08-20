import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { nanoid } from 'nanoid'
import { addNoteFromUser, editNote } from '../features/notes'
import { useParams } from 'react-router-dom'

export default function EditNote() {

    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes)

    const[inputStates, setInputStates] = useState({
        title:"",
        subtitle:"",
        bodyText:"",
    })

    const [showValidation, setShowValidation]=useState({
        title:false,
        subtitle:false,
        bodyText:false,
    })

    const {id} = useParams()

    //récupère les informations de la note si elle existe, sinon affichage vierge
    useEffect(() => {
        if (id && notes.list){
            setInputStates({
                title : notes.list.find(note => note.id === id).title,
                subtitle : notes.list.find(note => note.id === id).subtitle,
                bodyText : notes.list.find(note => note.id === id).bodyText,
            })
        } else {
            setInputStates({
                title : "",
                subtitle : "",
                bodyText : "",
        })
    }
    }, [id])

    function handleSubmit(e){
        e.preventDefault()

        if(Object.values(inputStates).every(value => value)){
            setShowValidation({
                title:false,
                subtitle:false,
                bodyText:false,
            })

            if(id && notes.list){
                dispatch(editNote({...inputStates, id}))
            }else{

            dispatch(addNoteFromUser({...inputStates, id:
                nanoid(8)}))
            setInputStates({
                title:"",
                subtitle:"",
                bodyText:"",
            })
        }
        }else{
            for(const [key,value] of Object.entries
                (inputStates)){
                    if(value.length === 0){
                        setShowValidation(state => ({...state, [key]:true}))
                    }else{
                        setShowValidation(state => ({...state, [key]:false}))
                    }
                }
        }
        console.log(Object.entries(inputStates));
    }

    
  return (
    <div className="p-10 w-full ">
        <p className="text-slate-200 text-xl mb-4 font-semibold" >Ajouter une note</p>
        <form onSubmit={handleSubmit}
        className="flex flex-col">

            <label className="text-slate-200 mt-3" htmlFor="title">Le titre</label>
            <input 
            onChange={e =>
            setInputStates({...inputStates, title: e.target.value})}
            spellCheck="false"
            className="p-2 text-md bg-slate-200 block w-full rounded" 
            type="text" 
            value={inputStates.title}
            name="title" 
            id="title" />
            {showValidation.title && (
            <p className="text-red-400 mb-2">Veuillez renseigner un titre</p>
           )}

            <label className="text-slate-200 mt-3" htmlFor="subtitle">Le sous-titre</label>
            <input 
            onChange={e =>
            setInputStates({...inputStates, subtitle: e.target.value})}
            className="p-2 text-md bg-slate-200 block w-full rounded" 
            type="text" 
            value={inputStates.subtitle}
            name="subtitle" 
            id="subtitle" />
            {showValidation.subtitle && (
            <p className="text-red-400 mb-2">Veuillez renseigner un sous-titre</p>
           )}

            <label className="text-slate-200 mb-2 mt-4" htmlFor="bodyText">Le contenu</label>
            <textarea 
            onChange={e =>
            setInputStates({...inputStates, bodyText: e.target.value})}
            spellCheck="false"
            className="min-h-[300px] p-2 bg-slate-200  w-full rounded" 
            type="text" 
            value={inputStates.bodyText}
            name="bodyText" 
            id="bodyText" />
           {showValidation.bodyText && (
            <p className="text-red-400 mb-2">Veuillez renseigner du contenu</p>
           )}

            <button className="mt-4 px-3 py-1 rounded bg-slate-200">
            Enregistrer
            </button>
        </form>
      
    </div>
  )
}
