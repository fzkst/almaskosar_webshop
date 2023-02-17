import { useEffect, useState } from "react";
import IphoneCard from '../components/IphoneCard';


function NepszeruTermekek() {


  const [iPhones, setIphones] = useState([]);
  const url = 'http://localhost:8000/api/iphones';

  const adatokListazasa = () => {
    //fetch(url).then(res => res.json()).then(data => data.map(item => item.modell)).then(modellek => setModel(modellek));
    fetch(url).then(res => res.json()).then(iphones => setIphones(iphones));

  }

/*   fetch(url).then(res => res.json()).then(data => data.map(item => {
    console.log(item.modell);
    console.log(item.ar);
  })); */

  useEffect(() => {
    adatokListazasa();
  }, []);

  const iPhoneLista = [];
  iPhones.forEach(element => {
    iPhoneLista.push(
      <IphoneCard 
        key={element.id}
        iphones={element}
      />
    )
  });

  const kiemeltLista = [];
  for (let i = 0; i < 3; i++){
    let element = iPhoneLista[i];
    kiemeltLista.push(element);
    <IphoneCard
      key={element}
      iphones={element}
    />  
  }

  return (
    <div className="container mb-5">
        <h3 className="text-center mt-5">Kiemelt termékek </h3>
        <div className="row">
          {kiemeltLista}
        </div>      
    </div>
  )
}

export default NepszeruTermekek
