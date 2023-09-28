import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

const blogsCollection = collection(db, "blogs")

const blogsData = await getDocs(blogsCollection)

const initialState = blogsData.docs.map(blog => ({ ...blog.data(), id: blog.id }))

export const blogsSlice = createSlice(
    {
        name: 'blogs',
        initialState,
        reducers: 
        {
            setBlogs: (state, action) => 
            {
                const { blogs } = action.payload
                //@ts-ignore
                state.push(blogs)
            }
        }
    })

export const { setBlogs } = blogsSlice.actions
export default blogsSlice.reducer

export const selectedBlogs = (state) => state.blogs