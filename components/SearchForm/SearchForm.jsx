import React from 'react'

function SearchForm({name, actionHandler, handleSubmit}) {
   return (
      <>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={actionHandler} name={name} required/>
            <button>Search</button>
         </form>
      </>
   )
}

export default SearchForm
