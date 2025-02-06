
import React from "react";
import { MdLocalHotel } from "react-icons/md";
import { popularDestinations } from "@/Utills/Constants/StaticData";

export const SearchResults: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 ">
            <p className="text-xs font-light text-gray-500">Suggested destinations</p>

            <div className="flex flex-col gap-2">
                {popularDestinations.map((destination) => (
                    <button key={destination.title} className="flex gap-2 items-center hover:bg-gray-100 transition-all duration-300 rounded-md p-2">
                        <div className="ronded-[10px] bg-primary p-2">
                            <MdLocalHotel />
                        </div>

                        <div className="flex flex-col gap-1 text-left">
                            <p className="text-xs font-light">{destination.title}</p>
                            <p className="text-xs font-light text-gray-500">{destination.comment}</p>
                        </div>


                    </button>
                ))}

            </div>
        </div>
    )
}