import {
  ArrowsPointingOutIcon,
  CalendarDaysIcon,
  CogIcon,
  CurrencyBangladeshiIcon,
  MapIcon,
  TvIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ToletList() {
  const [tolets, setTolets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tolets")
      .then((res) => res.json())
      .then((data) => setTolets(data));
  }, []);

  console.log(tolets);
  return (
    <div className="bg-white mb-8">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl md:text-5xl text-center font-bold text-gray-900">
          Available To-Lets
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-12  sm:gap-x-6 xl:gap-x-8">
          {tolets.map((tolet) => (
            <div
              key={tolet._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={tolet.image_url1}
                    alt="House image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tolet.title}
                  </h3>
                  <p className="text-sm text-gray-500">Available</p>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <p className="flex items-center text-sm text-gray-700">
                      <MapIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.location}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <UserGroupIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.suitableFor}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <TvIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.bedrooms}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <CogIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.bathrooms}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <ArrowsPointingOutIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.area} sqft
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                      <CalendarDaysIcon
                        className="h-5 w-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      {tolet.availableFrom}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-end  p-4">
                  <p className="relative -bottom-10 text-2xl font-bold flex justify-center items-center text-gray-800">
                    <span>
                      <CurrencyBangladeshiIcon className="h-12 w-8 mt-1" />
                    </span>
                    {tolet.price}
                  </p>
                </div>
              </div>
              <div className="p-4 my-4">
                <Link
                  to={`/tolets/${tolet._id}`}
                  className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
