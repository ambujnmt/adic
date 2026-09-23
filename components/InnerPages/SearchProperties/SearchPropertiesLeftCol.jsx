import React from 'react'
import { FiX } from "react-icons/fi";


export default function SearchPropertiesLeftCol() {
    return (
        <>
            <aside className="w-full shrink-0 lg:w-72">
                                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                                      <div className="mb-4 flex items-center justify-between">
                                        <h2 className="text-base font-semibold text-gray-900">
                                          Filters
                                        </h2>
                                        <button
                                          type="button"
                                          className="text-sm font-medium text-orange-500 hover:text-orange-600"
                                        >
                                          Clear all
                                        </button>
                                      </div>
                        
                                      {/* Active filter tags */}
                                      <div className="mb-6 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FFE4CF] px-3 py-3 text-xs font-medium text-[var(--text color1)] text-[14px]">
                                          Apartment in Noida
                                          <FiX className="h-3.5 w-3.5 cursor-pointer" />
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FFE4CF] px-3 py-3 text-xs font-medium text-[var(--text color1)] text-[14px]">
                                          Flat in Noida
                                          <FiX className="h-3.5 w-3.5 cursor-pointer" />
                                        </span>
                                      </div>
                        
                                      {/* Property Type */}
                                      <div className="mb-6 border-t border-gray-100 pt-5">
                                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                                          Property Type
                                        </h3>
                                        <div className="space-y-2.5">
                                          <label className="flex cursor-pointer items-center justify-between text-sm text-gray-600">
                                            <span className="flex items-center gap-2">
                                              <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                              />
                                              Apartment
                                            </span>
                                            <span className="text-gray-400">684</span>
                                          </label>
                                          <label className="flex cursor-pointer items-center justify-between text-sm text-gray-600">
                                            <span className="flex items-center gap-2">
                                              <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                              />
                                              Independent House
                                            </span>
                                            <span className="text-gray-400">246</span>
                                          </label>
                                          <label className="flex cursor-pointer items-center justify-between text-sm text-gray-600">
                                            <span className="flex items-center gap-2">
                                              <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                              />
                                              Villa
                                            </span>
                                            <span className="text-gray-400">188</span>
                                          </label>
                                          <label className="flex cursor-pointer items-center justify-between text-sm text-gray-600">
                                            <span className="flex items-center gap-2">
                                              <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                              />
                                              Residential Plot
                                            </span>
                                            <span className="text-gray-400">166</span>
                                          </label>
                                        </div>
                                      </div>
                        
                                      {/* Budget */}
                                      <div className="mb-6 border-t border-gray-100 pt-5">
                                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                                          Budget
                                        </h3>
                                        <div className="flex gap-3">
                                          <input
                                            type="text"
                                            placeholder="Min Price"
                                            className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                          />
                                          <input
                                            type="text"
                                            placeholder="Max Price"
                                            className="w-1/2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                          />
                                        </div>
                                      </div>
                        
                                      {/* Bedrooms */}
                                      <div className="mb-6 border-t border-gray-100 pt-5">
                                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                                          Bedrooms
                                        </h3>
                                        <div className="grid grid-cols-4 gap-2">
                                          <button
                                            type="button"
                                            className="rounded-lg border border-gray-300 py-2 text-xs font-medium text-gray-600 hover:border-orange-400 hover:text-orange-600"
                                          >
                                            1 BHK
                                          </button>
                                          <button
                                            type="button"
                                            className="rounded-lg border border-gray-300 py-2 text-xs font-medium text-gray-600 hover:border-orange-400 hover:text-orange-600"
                                          >
                                            2 BHK
                                          </button>
                                          <button
                                            type="button"
                                            className="rounded-lg border border-gray-300 py-2 text-xs font-medium text-gray-600 hover:border-orange-400 hover:text-orange-600"
                                          >
                                            3 BHK
                                          </button>
                                          <button
                                            type="button"
                                            className="rounded-lg border border-gray-300 py-2 text-xs font-medium text-gray-600 hover:border-orange-400 hover:text-orange-600"
                                          >
                                            4+ BHK
                                          </button>
                                        </div>
                                      </div>
                        
                                      {/* Possession Status */}
                                      <div className="mb-6 border-t border-gray-100 pt-5">
                                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                                          Possession Status
                                        </h3>
                                        <div className="space-y-2.5">
                                          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                            <input
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                            />
                                            Ready to Move
                                          </label>
                                          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                            <input
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                            />
                                            Under Construction
                                          </label>
                                        </div>
                                      </div>
                        
                                      {/* Posted By */}
                                      <div className="mb-6 border-t border-gray-100 pt-5">
                                        <h3 className="mb-3 text-sm font-semibold text-gray-900">
                                          Posted By
                                        </h3>
                                        <div className="space-y-2.5">
                                          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                            <input
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                            />
                                            Owner
                                          </label>
                                          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                            <input
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                            />
                                            Builder
                                          </label>
                                          <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                                            <input
                                              type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                                            />
                                            Agent
                                          </label>
                                        </div>
                                      </div>
                        
                                      <button
                                        type="button"
                                        className="flex items-center hover:bg-[var(--secondary-color)] text-white px-3 py-4 rounded-lg border text-[15px] font-medium leading-[100%] bg-[var(--primary-color)] hover:text-white transition-all duration-500 ease-in-out w-full justify-center"
                                      >
                                        Apply filter
                                      </button>
                                    </div>
                                  </aside>
        </>
    )
}
