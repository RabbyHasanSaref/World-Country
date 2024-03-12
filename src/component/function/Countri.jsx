import { useState } from 'react';
import './Style.css'
const Countri = ({ country, visitedHandelar, visitCountryFlagAdd }) => {
    const {name, flags, cca2, ccn3,  cca3, cioc, independent, maps, area, population, region, subregion} = country;
    // console.log(country)

    // console.log(visitedHandelar)

    // console.log(visitCountryFlagAdd)

    const [view, setView] = useState(false)
    const visited = () => {
        setView(!view)
    }

    // const passParam = () => visitedHandelar(country)
    
    return (
            <div className={`country`}>
                <img className='image' src={flags.png} alt="flag" />
                <p>Country : {name.common}</p>
                <p>official : {name.official}</p>
                <p>Population : {population}</p>
                <p>Area : {area}</p>
                <p>{independent ? 'Independent' : 'Not Independent'}</p>
                <p>{cca2} , {ccn3} , {cca3} , {cioc}</p>
                <p>{region} , {subregion}</p>
                <div className='btns'>
                <button className='btn1'><a href={maps.googleMaps} target='blank'>Google Map</a></button>
                <button className={`btn2 ${view ? 'visited' : 'btn2'}`} onClick={visited}>{view? 'Visit' : 'View'}</button>
                {/* {
                    view ? 'Yes' : 'No'
                } */}
                </div>
                <hr />
                <div className='btns'>
                <button className='btn3' onClick={() => visitedHandelar(country)}>Make Visit</button>
                <button className='btn3' onClick={() => visitCountryFlagAdd(country)}>Add Flag</button>
                </div>
            </div>
    );
};

export default Countri;