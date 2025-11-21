"use client";

export default function Card({ children, className = "", onClick }:any) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
