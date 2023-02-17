function IphoneCard(props) {
    const {iphones} = props;
    const {id, modell, szin, tarhely, ar, keszlet, kepfajl} = iphones;

    return(
        <div className="my-2">
            <div className="card w-100 h-100 my-2 kartya">
              <div className=" ">
                <img src={"/img/iPhonesPics/" + kepfajl} alt={modell} className='w-100'/>
              </div>              
              <div className="card-body d-flex flex-column">
                <a href="/" className="btn btn-outline-secondary mx-5"><h6 className="text-center">{"Apple" + modell}</h6></a>                
                <p className="card-text p-2 mt-3">
                    Szín: {szin} <br />
                    Tárhely: {tarhely} <br />
                    Ár: {ar} <br />
                    Készlet: {keszlet}
                </p>
                <div className="mt-auto">
                  <a href="/" className="btn btn-primary mb-2">Vásárlás</a>
                </div>                
              </div>
            </div>
        </div>
    )
}

export default IphoneCard

//<div className="col-md-4 my-2 h-50">