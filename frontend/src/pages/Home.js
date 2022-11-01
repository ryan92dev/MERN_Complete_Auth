import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { themeSelect, toggleTheme } from "../features/Theme/themeSlice";

const Home = () => {
  const theme = useSelector(themeSelect);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="h-screen w-full bg-primary">
      <div>
        <button onClick={toggle} className="bg-button-primary">
          {theme === "light" ? (
            <span className="text-button-text">Light</span>
          ) : (
            <span className="text-button-text">Dark</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
