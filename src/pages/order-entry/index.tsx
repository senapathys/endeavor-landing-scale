import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import InteractiveDemo from "../../components/InteractiveDemo";

function OrderEntry() {
    // Custom extraction complete content for Order Entry
    const orderEntryExtractionContent = (
        <>
            {/* Left half - JPG Display */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center pr-4">
                <div className="rounded-lg shadow-lg border border-slate-700 overflow-hidden bg-slate-800">
                    <img
                        src="/mason_steel.jpg"
                        className="max-w-[600px] max-h-[650px] object-contain"
                        alt="Extracted Document"
                    />
                </div>
            </div>

            {/* Right half - Form */}
            <div className="w-1/2 h-full flex flex-col items-start justify-start pr-25 pt-8 space-y-6">
                {/* Order Details title centered */}
                <div className="flex justify-center w-full">
                    <h4 className="text-xl font-semibold text-green-300">
                        Order Details
                    </h4>
                </div>

                {/* Two inputs in a row */}
                <div className="flex space-x-4 w-full">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                            defaultValue="Mason Steel"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Purchase Order
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                            defaultValue="98765431"
                        />
                    </div>
                </div>

                {/* Large address input */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        defaultValue="123 Steel Road Iron City, WA, 456789"
                    />
                </div>

                {/* Table with 3 rows and 2 columns */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Order Items
                    </label>
                    <div className="bg-slate-800 border border-slate-600 rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-700">
                                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-300">Extracted Item</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-300">Matched Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                            defaultValue="AeroSteel Lightweight Steel Tubes - 2” Diameter"
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <select className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500">
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                            defaultValue="MagnumSteel Hot-Rolled Steel Plates - S275JR"
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <select className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500">
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                                            defaultValue="ArmorFlex Hardened Steel Bars - EN31"
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <select className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500">
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="">
            <Head>
                <title>Order Entry | Endeavor</title>
                <meta
                    property="og:title"
                    content="Order Entry - Endeavor"
                />
                <meta
                    property="og:description"
                    content="Experience the power of our AI-powered order entry automation"
                />
                <meta property="og:image" content="/hero.png" />
            </Head>
            <Navbar />

            <InteractiveDemo
                title="Order Entry"
                description="Experience the power of our AI-powered order entry automation."
                badgeText="or click here to try out Endeavor Omelas"
                badgeLink="/omelas"
                extractionCompleteContent={orderEntryExtractionContent}
            />
        </div>
    );
}

export default OrderEntry; 