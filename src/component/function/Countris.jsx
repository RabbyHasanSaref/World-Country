import { useEffect } from "react";
import { useState } from "react";
import Countri from "./Countri";

const Countris = () => {
    const [countris, setCountris] = useState([])
    
    const [visited, setVisited] = useState([])
    const visitedHandelar = country => {
        console.log('visited country')
        const newVisitedCountry = [...visited, country];
        setVisited(newVisitedCountry);
        // console.log(country)
    }

    const [visitCountryFlag, setVisitCountryFlag] = useState([])
    function visitCountryFlagAdd (flag) {
        const newCountryFlag = [...visitCountryFlag, flag]
        setVisitCountryFlag(newCountryFlag)
        console.log('Add Flag')
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            setCountris(data)
            // console.log(data)
        })
    },[])

    return (
        <div className="container">
            <h1>Total Countris {countris.length}</h1>
            <h5>Visited Country {visited.length}</h5>

          <div>
            <div>
            {
                visited.map(country => <h5 key={country.cca3}>{country.name.common}</h5>)
            }
            </div>
           <div>
            {
                visitCountryFlag.map(visitFlag => <p key={visitFlag.cca3}><img src={visitFlag.flags.png} alt="" /></p>)
            }
           </div>
          </div>

           <div className="grid-col">
           {
            countris.map(country => <Countri 
                key={country.cca3}
                visitedHandelar = {visitedHandelar}
                visitCountryFlagAdd = {visitCountryFlagAdd}
                country={country}></Countri>)
            }
           </div>
        </div>
    );
};

export default Countris;