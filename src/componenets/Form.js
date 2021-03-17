<div className='arham' >
            <div className='w-25 arham2' >
            <input className='form-control' type = 'text' value = {name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <br/>
            <button className='btn btn-primary button' onClick ={fetchapi} >search </button> 
                   
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
            


        </div>
