import data from "../components/signsrc";

function Signage() {
  
  
    return (
    
    <div>
      <h1>Signages Indoor and Outdoor</h1>
      <div className="container">
        <div className="row row4">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {data.map((Canvasdata) => (
              <div class="col col-md-3 " style={{padding:"15px"}}>
                <div class="card">
                  <img src={Canvasdata.image} class="card-img-top cardimg" alt={Canvasdata.title} />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signage;