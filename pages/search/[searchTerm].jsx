import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Search(initProps) {
   const router = useRouter()
   return (
      <div>
         <Head >
            <title>Search: {router.query.searchTerm}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/styles.css" />
            <meta name="discription" content={props.giffys.map((each, i) => {each.title + ' '})}/>
         </Head>

         <h1>Search: {router.query.searchTerm}</h1>
         <div className="giffy-search">
            {initProps.giffys.map((item, i) => {
               return(
                  <div key={i}>
                  <h3>{item.title}</h3>
                  <img src={item.images.original.url} alt="" />
                  </div>
               )
            })}
         </div>
      </div>
   )
}


export async function getServerSideProps(context){
   const searchTerm = context.query.searchTerm
   let giffys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=anNByDpkJV9JZWkx1Lbl7veRSn2UpF9L&limit=10`)
   giffys = await giffys.json()

   return{props: {giffys: giffys.data}}
}