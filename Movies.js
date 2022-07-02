import React, {  useState } from 'react'
import { getMovies } from "./fakeMovieService";



export default function Movies() {


    const [movies,setMovies] = useState(getMovies())
    const [count,setCount] = useState(movies.length)
    
    const HandelMovie = (movie) => {
        const MyMovies = movies.filter((m) => m._id !== movie._id);
        setMovies(MyMovies)
        setCount(count-1)
      };

  
      const sortByRate = () => {
        const newTab = [...movies].reverse() //use spread functionnality is a must , try without it
        setMovies(newTab)
        
        console.log(movies)
      }
    
  return (
    <div>
      {count < 1 ?  <h4>no movies here ! </h4> :
       <div className='container'>
       <h4>there are {count && count} movies !</h4>
       <table className="table">
         <thead>
           <tr>
             <th>Title<button className='btn btn-link' onClick={sortByRate} >
              <img width={'15px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAgbipBM3w6IuXx3FlILekgTCIvz4YHlRrw&usqp=CAU" alt='sorting movies' />
              </button></th>
             <th>Genre</th>
             <th>Stocke</th>
             <th> Rate</th>
             <th></th>
           </tr>
         </thead>
       
         <tbody>
           {movies && movies.map((movie) => (
             <tr key={movie._id}>
               <td>{movie.title}</td>
               <td>{movie.genre.name}</td>
               <td>{movie.numberInStock}</td>
               <td>{movie.dailyRentalRate}</td>
               <td>
                 <button
                   onClick={() => HandelMovie(movie)}
                   className="btn btn-danger"
                 >
                   Delete
                 </button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
       
       </div>
      }
     
  </div>
  )
}
