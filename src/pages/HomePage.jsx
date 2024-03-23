import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center py-5 bg-gray-200">
        <p>All rights reserved by RU Legion</p>
      </div>
    </div>
  );
};

export default HomePage;
