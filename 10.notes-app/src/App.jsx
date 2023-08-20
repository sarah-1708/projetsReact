import NotesListe from "./components/NotesListe"
import {useSelector, useDispatch} from "react-redux"
import { getNotesFromAPI } from "./features/notes"
import Sidebar from "./components/Sidebar"
import Sidenote from "./components/Sidenote"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DisplayedNote from "./components/DisplayedNote"
import EditNote from "./components/EditNote"

function App() {
      const dispatch = useDispatch()
      const notes = useSelector(state => state.notes)
      console.log(notes);

      if(!notes.list){
        dispatch(getNotesFromAPI())
      }
  return <>
  <div className="bg-slate-800 min-h-screen flex">
    <BrowserRouter>
      <Sidebar/>
      <Sidenote/>

      <Routes>
        <Route path="/" element={<NotesListe/>} />
        <Route path="/note/:id" element={<DisplayedNote/>} />
        <Route path="/editer" element={<EditNote/>} />
        <Route path="/editer/:id" element={<EditNote/>} />
      </Routes>
      
    </BrowserRouter>
  </div>
  </>
}

export default App
