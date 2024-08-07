"use client";
import { useState } from "react";

const Dropdown = ({ data, onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // New state for selected item

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    onSelectItem(item); // Call the parent callback function
    setSelectedItem(item); // Update selected item
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-[10px] lg:text-[14px]  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {selectedItem ? selectedItem.nomorpertandingan : "Pilih Pertandingan"}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {data.map((item, index) => (
            <div key={index} className="py-1" role="none">
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                onClick={() => handleItemClick(item)}
              >
                {item.nomorpertandingan + " " + item.kategori}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
