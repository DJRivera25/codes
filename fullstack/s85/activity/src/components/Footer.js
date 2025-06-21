import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm border-t">
      <span className={darkMode ? "text-gray-500" : "text-gray-600"}>
        &copy; {new Date().getFullYear()} DJ Rivera. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
