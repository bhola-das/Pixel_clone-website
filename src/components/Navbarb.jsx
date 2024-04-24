import React from 'react'

const Navbarb = ({setsearch}) => {
  return (
    <>
    <div className='nav mt-4 gap-3'>
        <div className="button btn btn-outline-secondary"onClick={()=>setsearch("nature")} >Nature</div>
        <div className="button btn btn-outline-info"onClick={()=>setsearch("travel")}>Travel</div>
        <div className="button btn btn-outline-secondary"onClick={()=>setsearch("city")}>City</div>
        <div className="button btn btn-outline-warning"onClick={()=>setsearch("car")}>Car</div>
        <div className="button btn btn-outline-success"onClick={()=>setsearch("fashion")}>Fashion</div>
        <div className="button btn btn-outline-info"onClick={()=>setsearch("animal")}>Animal</div>
        <div className="button btn btn-outline-success"onClick={()=>setsearch("technology")}>Technology</div>
        <div className="button btn btn-outline-danger"onClick={()=>setsearch("business")}>Business</div>
        <div className="button btn btn-outline-secondary"onClick={()=>setsearch("tokyo")}>Tokyo</div>
        <div className="button btn btn-outline-warning"onClick={()=>setsearch("dubai")}>Dubai</div>
        <div className="button btn btn-outline-dark"onClick={()=>setsearch("delhi")}>Delhi</div>

    </div>
    <div className="container" style={{width:'780px', placeContent:'search'}}>
    <div class="mt-3">
    <input type="text" class="form-control  text-dark "  placeholder='search anything......'
    onChange={(e)=>setsearch(e.target.value)}/>
  </div>
    </div>
    </>
  )
}

export default Navbarb