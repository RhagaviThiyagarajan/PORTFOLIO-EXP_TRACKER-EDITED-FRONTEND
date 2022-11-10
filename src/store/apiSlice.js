import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL='https://expensestrackernode.herokuapp.com/'

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURL}),
    endpoints : builder => ({
        // get categories
        getCategories : builder.query({
            // get: 'http://localhost:8000/api/categories'
            query: () => '/api/categories',
            providesTags: ['categories']
        }),

        // get labels
        getLabels : builder.query({
            // get: 'http://localhost:8000/api/labels'
            query : () => '/api/labels',//endpoints
            providesTags: ['transaction']
        }),

        // add new Transaction
        //mutation-create ,ger,delete
        addTransaction : builder.mutation({
            query : (initialTransaction) => ({
                  // post: 'http://localhost:8000/api/transaction'
                  
                url: '/api/transaction',//endpoint of the mutation
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        // delete record
        deleteTransaction : builder.mutation({
            query : recordId => ({
                // delete: 'http://localhost:8000/api/transaction'
                url : '/api/transaction',
                method : "DELETE",
                body : recordId
            }),
            invalidatesTags: ['transaction']
        })

    })
})

export default apiSlice;
