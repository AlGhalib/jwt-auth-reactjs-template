import { LOCAL_STORAGE_KEYS } from "../constants/Global";
import { clearStorage, getAuthToken } from "../utils/token";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      key: "home",
      path: "/",
    },
  ];

  const token = getAuthToken();

  const handleLogout = () => {
    clearStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    clearStorage(LOCAL_STORAGE_KEYS.AUTH_EMAIL);
    clearStorage(LOCAL_STORAGE_KEYS.AUTH_NAME);
  };

  return (
    <nav className="bg-gray-800 px-14">
      <div className="flex justify-between py-4 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-white font-bold text-xl">Code Samurai 2024</h1>
        </div>
        {/* Right Side */}
        <div>
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li key={item.key}>
                <a href={item.path} className="text-white">
                  {item.title}
                </a>
              </li>
            ))}
            <li className="text-white">
              {token ? (
                <a href="/" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <a href="/login">Login</a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
