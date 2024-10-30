import Video from "../assets/video/animation.mp4";

export default function Animation() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile to prevent fullscreen mode
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "cover",
          display: "block",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}
