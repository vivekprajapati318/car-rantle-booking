import React, { useEffect, useState } from 'react';
import Nav from '../component/Nav';
import Card from '../component/Card';

export default function Home() {
  const [carsCategory, setCarsCategory] = useState([]);
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    try {
      console.log("Fetching car data...");
      const response = await fetch("http://localhost:5000/api/carsData", {
        method: "POST",
        headers: { 'Content-Type': "application/json" }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

    

      if (Array.isArray(data) && data.length >= 2 && Array.isArray(data[0]) && Array.isArray(data[1])) {
        setCars(data[0]);
        setCarsCategory(data[1]);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching car data:", error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="carousel-container h-600">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{ zIndex: 10 }}>
              <div className="d-flex justify-content-center search-bar">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)

                  }
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg" className="d-block w-100 h-100" alt="Mazda MX-5" />
            </div>
            <div className="carousel-item">
              <img className='d-block w-100 h-100' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/97-99_Cadillac_Catera_.jpg/400px-97-99_Cadillac_Catera_.jpg' alt="VW Kübelwagen" />
            </div>
            <div className="carousel-item">
              <img className='d-block w-100 h-100' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg" alt="Porsche Cayenne" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container '>
        {carsCategory && carsCategory.length > 0 ?
       
          carsCategory.map((category) => (  
            <div className='row category-section mb-3 bg-dark'  key={category._id}>
              <div className='fs-3 m-3 category-title' >{category.class}</div>
       
              {cars && cars.filter((car) => car.class === category.class && car.class && car.class.toLowerCase().includes(search.toLowerCase())   )
                .map(filteredCar => (
                  <div key={filteredCar._id} className='col-12 col-md-6 col-lg-3'>
                    <Card carsno={filteredCar}
                      image={filteredCar.image} 
                      title={filteredCar.title}  
                      start_production={filteredCar.start_production}
                      price={filteredCar.price}
                      class={filteredCar.class}
                    />
                  </div>
                ))}
            </div>
          )): <div>No categories available</div>}
      </div>
    </div>
  );
}
