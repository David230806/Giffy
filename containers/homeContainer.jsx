import SearchForm from "../components/SearchForm/SearchForm"
import { useState, useEffect } from "react"
import Link from 'next/link'
const HomeContainer = ({data}) => {
   const [formInput, setFormInput] = useState()
   const [searchTerm, setSearchTerm] = useState('dog')
   const [searchResults, setSearchResults] = useState([])

   useEffect(() => {
      setSearchResults(data)
   }, [formInput])

   const handleInput = (event) => {
      let {value} = event.target
      setFormInput(value)
      console.log(formInput)
   }

   const handleSubmit = async (event) => {
      event.preventDefault()
      let giffys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${formInput}&api_key=anNByDpkJV9JZWkx1Lbl7veRSn2UpF9L&limit=10`)
      giffys = await giffys.json()
      setSearchResults(giffys.data)
      setSearchTerm(formInput)
   }
   return(
      <>
         <h1>Giffy Search App : {searchTerm}</h1>

         <SearchForm name='searchTerm' actionHandler={handleInput} handleSubmit={handleSubmit}/>
         <Link href="/search/naruto">
            <button style={{marginRight: "20px", padding: "6px", marginTop: '20px'}}>naruto</button> 
         </Link>
         <Link href="/search/dota">
            <button style={{marginRight: "20px", padding: "6px"}}>dota</button>
         </Link>
         <Link href="/search/cats">
            <button style={{marginRight: "20px", padding: "6px"}}>cats</button>
         </Link>
         <div className="giffy-search">
         {
            searchResults.map((item, i) => {
             return(
               <div key={i} className="">
                 <h3>{item.title}</h3>
                 <img src={item.images.original.url} alt={item.title}/>
               </div>
             )
           })
         }
         </div>
      </>
   )
}

export default HomeContainer