import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const usePartStore = create(
    persist(
        (set) => ({
            part: [
    {
      "title": "Mes partitions favorites ",
      "id": "2Js5IxpT"
    },
    {
      "title": "Mes accords préférés",
      "id": "hE5h8rYp"
    },
    {
      "title": "Mon profil",
      "id": "88TFB3Q9"
    }
  ],
            
        }),
        {
            name: 'allforguitarpartstorage',
            storage: createJSONStorage(),
        }
    )
)




export {  createJSONStorage,usePartStore };