import React from 'react';
import { SearchResults } from "./Modules";


interface ModalUIhelpersProps {
    currentFocusedTitle: string;
    searchData: any;
    setSearchData: any;
    guestsTypes: Record<string, number>;
    setGuestsTypes?: (value: Record<string, number>) => void;
}

export const ModalUIhelpers = ({
    currentFocusedTitle,
    searchData,
    setSearchData,
    guestsTypes,
    setGuestsTypes,
}: ModalUIhelpersProps) => {

    const renderContent = () => {
        switch (currentFocusedTitle) {
            case 'Where':
                return (
                    <SearchResults 
                    />
                );

            case 'Check-in':
            case 'Check-out':
                return (
                    <div className="w-full">
                        <h3>Select dates</h3>
                        <div>
                            <div>

                                <label>Check-in</label>
                                <input 
                                    type="date"
                                    value={searchData.checkIn}
                                    onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                                />
                            </div>
                            <div>
                                <label>Check-out</label>
                                <input 
                                    type="date"
                                    value={searchData.checkOut}
                                    onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 'Guests':
                return (
                    <div className="flex gap-4">
                        <h3>Add guests</h3>
                        {guestsTypes && setGuestsTypes && (
                            <div className="flex gap-4">
                                {Object.entries(guestsTypes).map(([type, count]) => (
                                    <div key={type}>
                                        <span>{type}</span>
                                        <div>
                                            <button
                                                onClick={() => setGuestsTypes({
                                                    ...guestsTypes,
                                                    [type]: Math.max(0, Number(count) - 1)
                                                })}
                                            >
                                                -
                                            </button>
                                            <span>{count}</span>
                                            <button
                                                onClick={() => setGuestsTypes({
                                                    ...guestsTypes,
                                                    [type]: Number(count) + 1
                                                })}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    return renderContent();
}

export default ModalUIhelpers;