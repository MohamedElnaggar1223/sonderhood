import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from './services/servicesSlice'
import blogsReducer from './blogs/blogsSlice'
import therapistsReducer from './therapists/therapistsSlice'

export const store = configureStore(
    {
        reducer: 
        {
            services: servicesReducer,
            blogs: blogsReducer,
            therapists: therapistsReducer
        },
        devTools: true
    })