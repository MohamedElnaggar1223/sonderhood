import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from './services/servicesSlice'
import blogsReducer from './blogs/blogsSlice'
import therapistsReducer from './therapists/therapistsSlice'
import testimonialsReducer from './testimonials/testimonialsSlice'

export const store = configureStore(
    {
        reducer: 
        {
            services: servicesReducer,
            blogs: blogsReducer,
            therapists: therapistsReducer,
            testimonials: testimonialsReducer
        },
        devTools: true
    })