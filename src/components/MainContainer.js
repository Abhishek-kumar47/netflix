import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    if(movies === null) return;    //or you can write if(!movies) return; ,this is the convention which is mostly used.
    const mainMovie= movies[0];
    console.log(mainMovie);
    const {original_title, overview} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer
