import React from 'react'

const MoreFilters = () => {
    return (
        <>
        <div className="container  ">
        <div className="d-flex  justify-content-center ">
          <h5 className="mr-2 font-weight-bold" style={{ color: "#555555" }}>More Filters</h5>
          <div className="text-center" style={{ "background-color": "#D83B48", "width": "30px", "borderRadius": "50%" }}>
            <h5 className="text-white text-center " style={{ "fontSize": "20px", "fontWeight": "bold" }} >+</h5>
          </div>
        </div>
      </div>

      <br/>
      <div className=" container text-center p-2 " style={{ "backgroundColor": "#EEF7FB" }}>
        <input type="text" placeholder="Sort By: Placeholder" className="p-2 " style={{ "width": "50%", "borderRadius": "7px" }} />
      </div>
      <br />
      </>
    )
}

export default MoreFilters
