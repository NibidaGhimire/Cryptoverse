import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'c3ea7b21d1msh69c2fe2f23357aap19c22fjsn4ca21bacc35f',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
// }

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'c3ea7b21d1msh69c2fe2f23357aap19c22fjsn4ca21bacc35f',
    'X-RapidAPI-Host': 'bing-search-apis.p.rapidapi.com'
}

// const baseUrl='https://bing-news-search1.p.rapidapi.com/news';
const baseUrl='https://bing-search-apis.p.rapidapi.com/api/rapid/web_search'

const createRequest=(url)=>({
    url,headers:cryptoNewsHeaders
})

export const cryptoNewsApi=createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            // query: ({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
            query: ({newsCategory,count})=>createRequest('/'),

        })
    })
});


export const {
    useGetCryptoNewsQuery
}=cryptoNewsApi;