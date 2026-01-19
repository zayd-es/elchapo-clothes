import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-blue-300">
            Page Not Found
          </h2>
          <p className="mt-2 text-blue-300">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8">
          <Button>
            <Link to="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
