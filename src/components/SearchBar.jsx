
import React from 'react'
import Link from 'next/link';
import {search} from "lucide-react";

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="relative mb-6 max-w-lg mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <search className="h-5 w-5 text-green-500" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 shadow-md"
          placeholder="Search consultants by name, designation, or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
export default SearchBar;