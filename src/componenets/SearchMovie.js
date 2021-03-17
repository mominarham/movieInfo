import React,{useState} from 'react'
import './css/movie.css'


function SearchMovie() {
    const [movie, setMovie] = useState('')
    const [name , setName] = useState('')
    const fetchapi = async()=>{
        const response = await fetch(`http://www.omdbapi.com/?t=${name}&apikey=dbe00991`)
        const resjson = await response.json()
        setMovie(resjson)
    }
    
    return (
        <div className='arham' >
            <div className='w-25 arham2' >
            <input className='form-control' type = 'text' value = {name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <br/>
            <button className='btn btn-primary button' onClick ={fetchapi} >search </button> 

            { !movie ? 
                <>
                </>
            :
            (<>
            { !movie.Title ?
             (  
                <h1 className='mt-5 text-center' > Please Enter Correct Movie Name</h1>
             ) 
             :
            (
            <>                   
                <h3 className='mt-5 text-center '>{movie.Title} </h3>

                <div className='row' >
                    <div className='col-md-8 '>
                    <p> <span>Actors</span> :  {movie.Actors} </p> 
                    <p> <span>Ratings</span> :  {movie.imdbRating} </p>
                    <p><span>Release Date</span>:  {movie.Year} </p>
                    <p> <span> Country</span> :  {movie.Country} </p>
                    </div>

                    <img className='col-md-4' src={movie.Poster} />
                </div>
            </>
            )}
            </>)}
        </div>
    )
}

export default SearchMovie
