import React, {Component} from 'react'


// http://starlord.hackerearth.com/beercraft
// To get this value from store which which get from api
function temporayBeerData() {
    let beerData = [
        {
            "abv":"0.05",
            "ibu":"",
            "id":1436,
            "name":"Pub Beer",
            "style":"American Pale Lager",
            "ounces":12.0
         },
         {
            "abv":"0.06",
            "ibu":"",
            "id":2265,
            "name":"Devils Cup",
            "style":"American Pale Ale (APA)",
            "ounces":12.0
         },
         {
            "abv":"0.07",
            "ibu":"",
            "id":2264,
            "name":"Rise of the Phoenix",
            "style":"American IPA",
            "ounces":12.0
         },
         {
            "abv":"0.09",
            "ibu":"",
            "id":2263,
            "name":"Sinister",
            "style":"American Double / Imperial IPA",
            "ounces":12.0
         },
         {
            "abv":"0.07",
            "ibu":"",
            "id":2262,
            "name":"Sex and Candy",
            "style":"American IPA",
            "ounces":12.0
         }
    ]
    return beerData;
}

class SearchResultPage extends Component{
    render(){
        return (
            <div>
                <ul>
                {temporayBeerData().map((value, index) => {
                    return <li key={index}>{value.name}</li>
                })}
                </ul>
            </div>
        );
    }
}

export default SearchResultPage;