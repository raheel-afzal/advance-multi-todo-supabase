import React from "react";
import { BadgeProps } from "../types";

export const Badge: React.FC<BadgeProps> = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium pt-[3px] ${color} rounded-full px-3 h-6 text-gray-800 min-w-fit border`}
    >
      {text}
    </button>
  );
};
