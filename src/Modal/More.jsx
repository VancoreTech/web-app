import { Edit3, Eye, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function More({ destinations, actions }) {
  return (
    <div className="flex flex-col gap-7 px-4 py-4 absolute top-3 left-2 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
      <Link to={destinations[0]} className="flex gap-2">
        <Eye className="w-4" />
        View details
      </Link>
      <Link to={destinations[1]} className="flex gap-2">
        <Edit3 className="w-4" />
        Edit
      </Link>
      <button to={destinations[2]} className="flex gap-2">
        <Trash2 className="w-4" />
        Trash
      </button>
    </div>
  );
}

export function MorewButtons({ actions }) {
  return (
    <div className="flex flex-col gap-5 px-4 py-3 absolute top-3 left-2 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
      <button className="flex gap-2 items-center">
        <Eye className="w-4" />
        {actions[0]}
      </button>
      <button className="flex gap-2 items-center">
        <Edit3 className="w-4" />
        {actions[1]}
      </button>
      <button className="flex gap-2 items-center">
        <Trash2 className="w-4" />
        {actions[2]}
      </button>
    </div>
  );
}

export default More;
