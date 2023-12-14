import corp from '../components/corpsrc';

function Corp() {

  
    return (
    
    <div>
      <h1>Corporate Events and Branding</h1>
      <div className="container">
        <div className="row row4">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {corp.map((Corpdata) => (
              <div class="col col-md-3 " style={{padding:"15px"}}>
                <div class="card">
                  <img src={Corpdata.image} class="card-img-top cardimg" alt={Corpdata.title} />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Corp;