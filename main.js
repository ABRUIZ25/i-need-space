//map stuff
const Link = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'

const Jason = 'json?access_token='
//sat stuff
const SatLink = 'https://satellites.fly.dev/passes/'


const adress = document.querySelector('#address')
const Search = document.querySelector('#search')
const SatNord = document.querySelector('#norad')
const Api = document.querySelector('#ApiKey')


const LineOne = document.querySelector('.one')
const LineTwo = document.querySelector('.two')
const LineThree = document.querySelector('.three')

const LatOne = document.querySelector('.LatOne')
const LatTwo = document.querySelector('.LatTwo')
const LatThree = document.querySelector('.LatThree')

const LonOne = document.querySelector('.LonOne')
const LonTwo = document.querySelector('.LonTwo')
const LonThree = document.querySelector('.LonThree')


const ButtonOne = document.querySelector('.ButtonOne')
const ButtonTwo = document.querySelector('.ButtonTwo')
const ButtonThree = document.querySelector('.ButtonThree')

const When = document.querySelector('.when')
const Where = document.querySelector('.Where')
const Sun = document.querySelector('.Sun')



// console.log(location)


async function GetGrid() {

    const Token = Api.value
    let Location = adress.value


    const httpResponse = await fetch(Link + Location + '.' + Jason + Token);
    const data = await httpResponse.json()


    let lineOne = data.features[0].place_name
    let lineTwo = data.features[1].place_name
    let lineThree = data.features[2].place_name


    LineOne.innerText = lineOne
    LineTwo.innerText = lineTwo
    LineThree.innerText = lineThree


    let GridOneLon = data.features[0].center[0]
    let GridTwoLon = data.features[1].center[0]
    let GridThreeLon = data.features[2].center[0]

    let GridOneLat = data.features[0].center[1]
    let GridTwoLat = data.features[1].center[1]
    let GridThreeLat = data.features[2].center[1]



    LatOne.innerText = GridOneLat
    LatTwo.innerText = GridTwoLat
    LatThree.innerText = GridThreeLat

    LonOne.innerText = GridOneLon
    LonTwo.innerText = GridTwoLon
    LonThree.innerText = GridThreeLon

}

Search.addEventListener('click', GetGrid)

async function OnClickOne() {
    lat = LatOne.innerText
    lon = LonOne.innerText
    Nor = SatNord.value

    const httpResponse = await fetch(SatLink + Nor + '?' + 'lat=' + lat + '&' + 'lon=' + lon + '&' + 'visible_only' + '=' + 'true')
    const SatData = await httpResponse.json()
    console.log(SatData)


    let whenSat = SatData[0].rise.utc_datetime
    let WhereSat = SatData[0].rise.az_octant
    let SunSat = SatData[0].rise.is_sunlit

    When.innerText = whenSat
    Where.innerText = WhereSat
    Sun.innerText = SunSat

}



ButtonOne.addEventListener('click', OnClickOne)

async function OnClickTwo() {
    lat = LatTwo.innerText
    lon = LonTwo.innerText
    Nor = SatNord.value

    const httpResponse = await fetch(SatLink + Nor + '?' + 'lat=' + lat + '&' + 'lon=' + lon + '&' + 'visible_only' + '=' + 'true')
    const SatData = await httpResponse.json()
    console.log(SatData)


    let whenSat = SatData[0].rise.utc_datetime
    let WhereSat = SatData[0].rise.az_octant
    let SunSat = SatData[0].rise.is_sunlit

    When.innerText = whenSat
    Where.innerText = WhereSat
    Sun.innerText = SunSat

}



ButtonTwo.addEventListener('click', OnClickTwo)

async function OnClickThree() {
    lat = LatThree.innerText
    lon = LonThree.innerText
    Nor = SatNord.value

    const httpResponse = await fetch(SatLink + Nor + '?' + 'lat=' + lat + '&' + 'lon=' + lon + '&' + 'visible_only' + '=' + 'true')
    const SatData = await httpResponse.json()
    console.log(SatData)


    let whenSat = SatData[0].rise.utc_datetime
    let WhereSat = SatData[0].rise.az_octant
    let SunSat = SatData[0].rise.is_sunlit

    When.innerText = whenSat
    Where.innerText = WhereSat
    Sun.innerText = SunSat

}




ButtonThree.addEventListener('click', OnClickThree)



