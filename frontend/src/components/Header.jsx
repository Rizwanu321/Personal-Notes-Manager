import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            <BookOpen className="text-blue-600" />
            <span>Notes Manager</span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              to="/add"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Plus size={20} />
              <span className="hidden sm:inline">Add Note</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
