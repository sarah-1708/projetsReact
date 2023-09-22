import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useToolStore = create(
    persist(
        (set) => ({
            tool: [
    {
      "title": "Accordeur",
     
    },
    {
      "title": "Métronome",
    
    },
    {
      "title": "Drag & Drop",
 
    },
     {
      "title": "Dictionnaire d'accords",
 
    }
  ],
            
        }),
        {
            name: 'allforguitartoolstorage',
            storage: createJSONStorage(),
        }
    )
)




export {  createJSONStorage,useToolStore };