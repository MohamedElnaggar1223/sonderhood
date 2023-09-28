import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

const therapistsCollection = collection(db, "therapists")

const therapistsData = await getDocs(therapistsCollection)

const initialState = therapistsData.docs.map(therapist => ({ ...therapist.data(), id: therapist.id }))

export const therapistsSlice = createSlice(
    {
        name: 'therapists',
        initialState,
        reducers: 
        {
            setTherapists: (state, action) => 
            {
                const { therapists } = action.payload
                //@ts-ignore
                state.push(therapists)
            }
        }
    })

export const { setTherapists } = therapistsSlice.actions
export default therapistsSlice.reducer

export const selectedTherapists = (state) => state.therapists