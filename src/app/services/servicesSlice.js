import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

const servicesCollection = collection(db, "services")

const servicesData = await getDocs(query(servicesCollection, orderBy('order')))

const initialState = servicesData.docs.map(service => ({ ...service.data(), id: service.id }))

export const servicesSlice = createSlice(
    {
        name: 'services',
        initialState,
        reducers: 
        {
            setServices: (state, action) => 
            {
                const { services } = action.payload
                //@ts-ignore
                state.push(services)
            }
        }
    })

export const { setServices } = servicesSlice.actions
export default servicesSlice.reducer

export const selectedServices = (state) => state.services