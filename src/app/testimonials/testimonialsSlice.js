import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

const testimonialsCollection = collection(db, "testimonials")

const testimonialsData = await getDocs(testimonialsCollection)

const initialState = testimonialsData.docs.map(testimonial => ({ ...testimonial.data(), id: testimonial.id }))

export const testimonialsSlice = createSlice(
    {
        name: 'testimonials',
        initialState,
        reducers: 
        {
            setTestimonials: (state, action) => 
            {
                const { testimonials } = action.payload
                //@ts-ignore
                state.push(testimonials)
            }
        }
    })

export const { setTestimonials } = testimonialsSlice.actions
export default testimonialsSlice.reducer

export const selectedTestimonials = (state) => state.testimonials