import { useState } from 'react';

const AppBarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle logout click
  const handleLogout = () => {
    setMenuOpen(false);
    console.log("Logged out!");
    // Add your logout logic here
  };

  return (
    <>
      <nav className="p-5 h-20 bg-gray-800 flex items-center justify-between">
        {/* Left Section - Logo and University Name */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10">
            <img src="./images/login-logo.png" alt="University Logo" />
          </div>
          <div className="text-white text-lg">
            Sir Syed University of Engineering & Technology
          </div>
        </div>

        {/* Right Section - Profile Icon with Menu */}
        <div className="relative">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-full cursor-pointer bg-gray-600 flex items-center justify-center"
          >
            <img
              src="/static/images/avatar/2.jpg" // Replace with actual user avatar or image
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>
          {/* Dropdown menu for logout */}
          {menuOpen && (
            <div className="absolute right-0 bg-gray-600 text-white rounded-lg shadow-lg p-2 mt-2 w-32">
              <div
                onClick={handleLogout}
                className="p-2 text-center cursor-pointer hover:bg-gray-500"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default AppBarComponent;
