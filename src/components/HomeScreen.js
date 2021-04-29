import React from 'react'
import requests from '../api/Request'
import Banner from './Banner'
import '../css/HomeScreen.css'
import Row from './Row'
import Nav from './Nav'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav/>
            <Banner/>

            <Row 
                title='Netflix Originals'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />           
            <Row
                title='Trending'
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
                isLargeRow
            />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
                isLargeRow
                />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow
                />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow
                />
            <Row
                title='Romantic Movies'
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow
                />
            <Row
                title='Documentries'
                fetchUrl={requests.fetchDocumentriesMovies}
                isLargeRow
                />

        </div>
    )
}
export default HomeScreen
