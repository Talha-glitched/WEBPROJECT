import printdata from './printdata';

function Print() {

  
    return (
    
    <div>
      <h1>Large Format Printing</h1>
      <div className="container">
        <div className="row row4">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {printdata.map((print) => (
              <div class="col col-md-3 " style={{padding:"15px"}}>
                <div class="card">
                  <img src={print.image} class="card-img-top cardimg" alt={print.title} />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Print;