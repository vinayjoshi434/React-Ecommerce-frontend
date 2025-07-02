import React from "react";

export const NotFound = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-red-700">
        Oops! Something broke 😢
      </h1>
      <p className="mt-4 text-gray-600">
        Try refreshing the page or go{" "}
        <a href="/" className="text-blue-500 underline">
          back to home
        </a>
        .
      </p>
    </div>
  );
};
