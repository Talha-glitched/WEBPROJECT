import React from 'react'

export default function EditProduct() {
  
  
  
  
    return (
    <div>
      <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" class="form-control" onChange={(e)=> handlechange(e)}  name="title" id="inputEmail4"style={{width:"200px"}}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Price</label>
    <input type="text" class="form-control" onChange={(e)=> handlechange(e)} name="price" id="inputPassword4" style={{width:"200px"}}/>
  </div>
 
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Image</label>
    <input type="text" class="form-control" onChange={(e)=> handlechange(e)} name="img"  id="inputZip" style={{width:"200px"}}  />
  </div>
  <div class="col-12">
    <button type="submit" onClick={(e)=>handlesend(e)} class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
        
  )
}
