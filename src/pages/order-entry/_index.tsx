import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import InteractiveDemo from "../../components/InteractiveDemo";

function OrderEntry() {
    const [loadedFields, setLoadedFields] = useState({
        company: false,
        purchaseOrder: false,
        address: false,
        tableRow1Extracted: false,
        tableRow1Match: false,
        tableRow2Extracted: false,
        tableRow2Match: false,
        tableRow3Extracted: false,
        tableRow3Match: false
    });

    const [showExtractionForm, setShowExtractionForm] = useState(false);

    // Start the field loading animation when extraction is complete
    useEffect(() => {
        if (showExtractionForm) {
            // Add 1.25 second delay before starting to load fields
            setTimeout(() => {
                const fieldOrder = [
                    'company',
                    'purchaseOrder',
                    'address',
                    'tableRow1Extracted',
                    'tableRow2Extracted',
                    'tableRow3Extracted',
                    'tableRow1Match',
                    'tableRow2Match',
                    'tableRow3Match'
                ];

                fieldOrder.forEach((field, index) => {
                    setTimeout(() => {
                        setLoadedFields(prev => ({
                            ...prev,
                            [field]: true
                        }));
                    }, index * 1250);
                });
            }, 1250); // 1.25 second delay after extraction content appears
        }
    }, [showExtractionForm]);
    // Custom extraction complete content for Order Entry
    const orderEntryExtractionContent = (
        <>
            {/* Left half - JPG Display */}
            <div className="w-3/5 h-full flex flex-col items-center justify-center pr-4">
                <div className="rounded-lg shadow-lg border border-slate-700 overflow-hidden bg-slate-800">
                    <img
                        src="/mason_steel.jpg"
                        className="max-w-[500px] max-h-[600px] object-contain"
                        alt="Extracted Document"
                    />
                </div>
            </div>

            {/* Right half - Form */}
            <div className="w-4/5 h-full flex flex-col items-start justify-center pr-18 space-y-6">
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
                        {loadedFields.company ? (
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-opacity duration-300"
                                defaultValue="Mason Steel"
                            />
                        ) : (
                            <div className="w-full h-10 bg-slate-700 rounded-lg animate-pulse"></div>
                        )}
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Purchase Order
                        </label>
                        {loadedFields.purchaseOrder ? (
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-opacity duration-300"
                                defaultValue="98765431"
                            />
                        ) : (
                            <div className="w-full h-10 bg-slate-700 rounded-lg animate-pulse"></div>
                        )}
                    </div>
                </div>

                {/* Large address input */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Address
                    </label>
                    {loadedFields.address ? (
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-opacity duration-300"
                            defaultValue="123 Steel Road Iron City, WA, 456789"
                        />
                    ) : (
                        <div className="w-full h-10 bg-slate-700 rounded-lg animate-pulse"></div>
                    )}
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
                                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-300 w-1/2">Extracted Item</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-300 w-1/2">Suggested Catalog Match</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow1Extracted ? (
                                            <input
                                                type="text"
                                                className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500 transition-opacity duration-300"
                                                defaultValue={'AeroSteel Lightweight Steel Tubes - 2" Diameter'}
                                            />
                                        ) : (
                                            <div className="w-full h-8 bg-slate-600 rounded animate-pulse"></div>
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow1Match ? (
                                            <select className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500 transition-opacity duration-300">
                                                <option value="">&quot;2&quot; Lightweight Steel Tube (AeroSteel)</option>
                                                <option value="1">&quot;1.5&quot; Lightweight Steel Tube (AeroSteel)</option>
                                                <option value="2">&quot;2.5&quot; Lightweight Steel Tube (AeroSteel)</option>
                                                <option value="3">&quot;2&quot; Lightweight Square Tube (AeroSteel)</option>
                                                <option value="4">&quot;2&quot; Slotted Lightweight Steel Tube (AeroSteel)</option>
                                            </select>
                                        ) : (
                                            <div className="w-full h-8 bg-slate-600 rounded animate-pulse"></div>
                                        )}
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow2Extracted ? (
                                            <input
                                                type="text"
                                                className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500 transition-opacity duration-300"
                                                defaultValue="MagnumSteel Hot-Rolled Steel Plates - S275JR"
                                            />
                                        ) : (
                                            <div className="w-full h-8 bg-slate-600 rounded animate-pulse"></div>
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow2Match ? (
                                            <select className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500 transition-opacity duration-300">
                                                <option value="">S275JR HR Steel Plate (MagnumSteel)</option>
                                                <option value="1">S235JR HR Steel Plate (MagnumSteel)</option>
                                                <option value="2">S355JR HR Steel Plate (MagnumSteel)</option>
                                                <option value="3">S275JR CR Steel Sheet (Magnum Steel)</option>
                                                <option value="4">S275JR Universal Beam (Magnum Steel)</option>
                                            </select>
                                        ) : (
                                            <div className="w-full h-8 bg-slate-600 rounded animate-pulse"></div>
                                        )}
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow3Extracted ? (
                                            <input
                                                type="text"
                                                className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500 transition-opacity duration-300"
                                                defaultValue="ArmorFlex Hardened Steel Bars - EN31"
                                            />
                                        ) : (
                                            <div className="w-full h-8 bg-slate-600 rounded animate-pulse"></div>
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow3Match ? (
                                            <select className="w-full px-2 py-1 bg-slate-700 border border-slate-500 rounded text-white text-sm focus:outline-none focus:border-blue-500 transition-opacity duration-300">
                                                <option value="">EN31 Alloy Steel Bar (ArmorFlex)</option>
                                                <option value="1">EN24 Alloy Steel Bar (ArmorFlex)</option>
                                                <option value="2">EN36 Case Hardening Steel Bar (ArmorFlex)</option>
                                                <option value="3">EN8 Medium Carbon Steel Bar (ArmorFlex)</option>
                                                <option value="4">100Cr6 Bearing Steel Bar (ArmorFlex)</option>
                                            </select>
                                        ) : (
                                            <div className="w-full h-8 bg-slate-600 rounded animate-pulse"></div>
                                        )}
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
                onExtractionComplete={() => setShowExtractionForm(true)}
            />
        </div>
    );
}

export default OrderEntry; 