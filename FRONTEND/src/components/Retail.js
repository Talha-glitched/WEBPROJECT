import retailsrc from "../components/retailsrc";

function Retail() {
  
  
    return (
    
    <div>
      <h1>Retails Indoor and Outdoor</h1>
      <div className="container">
        <div className="row row4">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {retailsrc.map((retaildata) => (
              <div class="col col-md-3 " style={{padding:"15px"}}>
                <div class="card">
                  <img src={retaildata.image} class="card-img-top cardimg" alt={retaildata.title} />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Retail;