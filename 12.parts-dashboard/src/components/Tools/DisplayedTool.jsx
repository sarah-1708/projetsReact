import React from 'react'
import {useParams} from 'react-router-dom'
import { useToolStore } from '../../toolStore'
import GridLayout from "react-grid-layout";
//import { IconName } from "react-icons/ci";
import { AiFillCloseSquare,AiOutlineSearch,AiOutlineQuestionCircle } from "react-icons/ai"




//affiche le contenu de la page selon l'onglet sélectionné dans la SidebarDashboard
export default function DisplayedTool() {


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
    <div className="px-10">
        
      <p className="text-slate-100 text-4xl mb-2 mt-8">{actualTool?.title}</p>


       <GridLayout className=" relative layout bg-yellow-400" cols={12} rowHeight={20} width={1200}>
        <div className=" bg-slate-200 w-[100px] border border-solid border-b-black rounded" key="a" data-grid={{ x: 0, y: 0, w: 5, h: 7, minW: 5, maxW: 12, minH:5 }}>
          <div className="flex flex-row bl-rounded br-rounded w-full">
            <h3 className="text-slate-200 bg-slate-800 px-3 w-full">Dictionnaire d'accords
            <button className=" text-semibold p-2 w-3 h-3 text-yellow-500 rounded"><AiOutlineQuestionCircle/></button>
            <button className=" text-semibold p-2 w-3 h-3 text-red-600 rounded"><AiFillCloseSquare/></button>
            
          </h3>
          </div>
          
          <div className="flex">
          <input className="rounded" type="search" name="chordSearch" id="chordSearch" />
          <button className=" text-semibold p-2 w-3 h-3 text-slate-800 rounded border border-solid  border-slate-900"><AiOutlineSearch/></button>
            </div>
<div id="notations">
            <div id="french_notation"  name={chord_notation.name}></div>
            <div id="international_notation"  name={chord_notation.name}></div>
            <div className="w-10 h-6" name={chord_notation.name} id="fret_notation">{chord_notation.frets}</div>
            <div id="chord_notation"  name={chord_notation.name}></div>
            <div id="variation_notation"  name={chord_notation.name}></div>
</div>
        </div>
        <div className="bg-slate-200 w-[100px] border border-solid border-b-black rounded"key="b" data-grid={{ x: 1, y: 0, w: 3, h: 5, minW: 3, maxW: 12, minH:5 }}>
          <div className="flex flex-row bl-rounded br-rounded  w-full">
            <h3 className="text-slate-200 bg-slate-800 px-3 w-full">Métronome
            <button className=" text-semibold p-2 w-3 h-3 text-yellow-500 rounded"><AiOutlineQuestionCircle/></button>
            <button className=" text-semibold p-2 w-3 h-3 text-red-600 rounded "><AiFillCloseSquare/></button></h3>

          </div>
          
        </div>
        <div className="bg-slate-200 w-[100px] border border-solid border-b-black rounded" key="c" data-grid={{ x: 4, y: 0, w: 4, h: 5,minW: 4, maxW: 12, minH:5  }}>
          <div className="flex flex-row bl-rounded br-rounded w-full ">
            <h3 className="text-slate-200 bg-slate-800 px-3 w-full">Accordeur
            <button className=" text-semibold p-2 w-3 h-3 text-yellow-500 rounded"><AiOutlineQuestionCircle/></button>
            <button className=" text-semibold p-2 w-3 h-3 text-red-600 rounded "><AiFillCloseSquare/></button></h3>

          </div>
          </div>
          <div key="d" className="bg-slate-200 react-grid-item react-draggable cssTransforms react-resizable w-[100px] border border-solid border-b-black  rounded" data-grid={{ x: 4, y: 4, w: 4, h: 4,minW: 4, maxW: 4, minH:12  }}>
          <div className="flex flex-row bl-rounded br-rounded w-full ">
            <h3 className="text-slate-200 bg-slate-800 px-3 w-full">Drag & Drop
            <button className=" text-semibold p-2 w-3 h-3 text-yellow-500 rounded"><AiOutlineQuestionCircle/></button>
            <button className=" text-semibold p-2 w-3 h-3 text-red-600 rounded "><AiFillCloseSquare/></button></h3>

          </div>

          <div className="py-4">
            <button className="border border-solid border-black rounded px-4 hover:bg-slate-800 hover:text-slate-200">Enregistrer</button>
            <div>
            <label htmlFor="">Titre</label>
            <input className="rounded " type="text" />
            </div>
            <div>
            <label htmlFor="">Artiste</label>
            <input className="rounded " type="text" />
            </div>
          </div>
          
          <div id="chords_draggable"></div>
       
        </div>
      </GridLayout>

    </div>
  )
}