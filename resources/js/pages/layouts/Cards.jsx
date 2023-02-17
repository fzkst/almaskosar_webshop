import React from 'react'

const Cards = () => {
  return (
    <div className='cardss'>
      <h2 className='my-5 text-center'>Kategóriák</h2>
      <div className='container'>
        <div className="row gy-3">

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="card h-100 px-2 kartya">
              <div className="imgback-height d-flex align-items-center justify-content-center ">
                <img src="/img/Iphone_14_Pro_kat_min.png" alt="iphones" className='w-50'/>
              </div>              
              <div className="card-body d-flex flex-column">
                <a href="/" className="btn btn-outline-secondary mx-5"><h5 className="text-center">Mobilok</h5></a>
                
                <p className="card-text p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sunt temporibus molestias sit. Enim assumenda cupiditate libero obcaecati sapiente consectetur iusto!</p>
                <div className="mt-auto">
                  <a href="/src/views/layouts/NepszeruTermekek.jsx" className="btn btn-primary mb-2">Termékek</a>
                </div>                
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="card h-100 px-2 kartya">
              <div className="imgback-height h-100 d-flex align-items-center justify-content-center">
                <img src="/img/iPad_pro_kat_min.png" alt="ipads" className='w-50'/>
              </div>              
              <div className="card-body p-0 d-flex flex-column">
                <h5 className="card-header text-center">Mobilok</h5>
                <p className="card-text p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eius vero alias aliquid unde provident neque consectetur, eum sunt temporibus molestias sit. Enim assumenda cupiditate libero obcaecati sapiente consectetur iusto!</p>
                <div className="">
                  <a href="/" className="btn btn-primary mb-2">Termékek</a>
                </div>                
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="card h-100 px-2 kartya">
              <div className="imgback-height h-100 d-flex align-items-center justify-content-center">
                <img src="/img/házimozi-kat_min.png" alt="hazimozi" className='w-50'/>
              </div>              
              <div className="card-body d-flex flex-column">
                <h5 className="card-header text-center">Mobilok</h5>
                <p className="card-text p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eius vero alias aliquid unde provident neque consectetur, eum sunt temporibus molestias sit. Enim assumenda cupiditate libero obcaecati sapiente consectetur iusto!</p>
                <div className="">
                  <a href="/" className="btn btn-primary mb-2">Termékek</a>
                </div>                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards
/*{ <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> }*/

