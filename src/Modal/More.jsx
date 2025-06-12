import {
  Edit,
  Edit2,
  Edit2Icon,
  Edit3,
  Eye,
  LucideTrash,
  LucideTrash2,
  Trash,
  Trash2,
  Trash2Icon,
  TrashIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function More({ destinations }) {
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
      <Link to={destinations[2]} className="flex gap-2">
        <Trash2 className="w-4" />
        Trash
      </Link>
    </div>
  );
}

export default More;
