import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gpt.showgptSearch);

  // State for the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language); // Update the selected language
    dispatch(changeLanguage(language)); // Dispatch Redux action
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          {/* Dropdown for language selection */}
          {showgptSearch && (
            <select
              className="p-2 m-2 bg-white/20 text-white rounded-md border border-white/30 shadow-lg backdrop-blur-md hover:bg-white/30 focus:outline-none transition duration-300"
              onChange={handleLanguageChange}
              value={selectedLanguage}
            >
              {selectedLanguage === "" && (
                <option disabled value="">
                  Select Language
                </option>
              )}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-white text-black"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* Button to toggle dropdown */}
          <button
            className="px-4 py-2 m-2 text-white bg-white/20 backdrop-blur-md rounded-md border border-white/30 shadow-lg hover:bg-white/30 transition duration-300"
            onClick={handleGptSearch}
          >
            {showgptSearch ? "Home" : "Search"}
          </button>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="font-bold text-white py-2 px-4 m-2 rounded-md bg-red-600 hover:bg-gray-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
