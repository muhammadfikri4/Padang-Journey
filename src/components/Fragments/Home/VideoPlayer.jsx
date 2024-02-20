import React from "react";

const VideoPlayer = () => {
  return (
    <video className="w-screen h-screen object-cover" autoPlay loop muted>
      <source
        src="https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/wisata.mp4?alt=media&token=ed3ceef5-c8c2-44cb-ab8d-9e6037129d21"
        type="video/mp4"
      />
      Your browser does not support the video.
    </video>
  );
};

export default VideoPlayer;
