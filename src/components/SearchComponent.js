import React from 'react'

const SearchComponent = () => {

  return (
    <div className="">
      <form>
        <div className="form-group">
          <label htmlFor="searchBooks"></label>
          <input type="text" className="form-control col-form-label col-form-label-sm" id="searchBooks" placeholder="Search by Author or Title" />
        </div>
      </form>
    </div>

  )

}
export default SearchComponent
