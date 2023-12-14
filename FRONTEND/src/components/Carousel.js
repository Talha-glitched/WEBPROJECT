import './carousel.css';
import car1 from '../img/car1.png';
import car3 from '../img/car3.png';
import car2 from '../img/car2.png';

export default function Carousel() {
  return (
    <div>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={car2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={car1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={car3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev carbutton" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next carbutton" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>      
    </div>
  )
}























// function Carousel() {
//   return (
//     <>
//     <div className='container'>
//    <div className="row row2">

//    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={car5} class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src={car2} class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src={car1} class="d-block w-100" alt="..."/>
//     </div>
//   </div>
// </div>
// </div>
//  </div>

//     </>
//   );
// }

// export default Carousel;
