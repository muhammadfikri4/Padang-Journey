import React, { useEffect, useState } from "react";

const VideoPlayer = () => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRender(true);
    }, 550);

    // Membersihkan timeout pada unmount untuk mencegah memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <video className="w-screen h-screen object-cover" autoPlay loop muted>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/pariwisata-d318c.appspot.com/o/wisata.mp4?alt=media&token=ed3ceef5-c8c2-44cb-ab8d-9e6037129d21"
          type="video/mp4"
        />
        Your browser does not support the video.
      </video>
      <div
        className={`${
          isRender && "hidden duration-200"
        } bg-[#100d11] w-screen h-screen absolute top-0`}
      ></div>
    </>
  );
};

export default VideoPlayer;
// 100d11
