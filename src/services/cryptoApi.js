import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'c3ea7b21d1msh69c2fe2f23357aap19c22fjsn4ca21bacc35f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({
    url,headers:cryptoApiHeaders
})

export const cryptoApi=createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query: ()=>createRequest('/coins')
        })
    })
});


export const {
    useGetCryptosQuery
}=cryptoApi;