
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground = ({ movieId }) => {
  const trailerVideoId = useTrailerVideo(movieId);
  return (
    <div className="w-screen">
      {trailerVideoId && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
