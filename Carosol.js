import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Carosol() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/314/216/1004/batman-digital-art-comics-artwork-wallpaper-thumb.jpg" alt="First slide" style={{height:"900px"}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/58/826/386/joker-jail-batman-the-dark-knight-hd-wallpaper-thumb.jpg" alt="Second slide" style={{height:"900px"}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/487/100/1014/batman-the-dark-knight-heath-ledger-movies-wallpaper-thumb.jpg" alt="Third slide" style={{height:"900px"}}/>
    </div>
  </div>
  <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Carosol;
