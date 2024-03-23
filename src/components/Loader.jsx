import loaderIcon from "../assets/loader.svg";

const Loader = ({ mode = "screen" }) => {
  return (
    <div
      className={`flex justify-center items-center absolute top-0 left-0 ${
        mode === "screen" ? "w-screen h-screen" : "w-full h-full"
      }`}
    >
      <img src={loaderIcon} alt="loading..." className="w-1/3" />
    </div>
  );
};

export default Loader;
