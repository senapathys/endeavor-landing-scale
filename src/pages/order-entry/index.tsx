import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";
import InteractiveDemo from "../../components/InteractiveDemo";
import { CheckCircle } from "lucide-react";

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
                // First, show all extraction fields at once
                const extractionFields = [
                    'company',
                    'purchaseOrder',
                    'address',
                    'tableRow1Extracted',
                    'tableRow2Extracted',
                    'tableRow3Extracted'
                ];

                // Set all extraction fields to true immediately
                setLoadedFields(prev => {
                    const updated = { ...prev };
                    extractionFields.forEach(field => {
                        (updated as any)[field] = true;
                    });
                    return updated;
                });

                // Then, show match fields one by one with 1.25 second delays
                const matchFields = [
                    'tableRow1Match',
                    'tableRow2Match',
                    'tableRow3Match'
                ];

                matchFields.forEach((field, index) => {
                    setTimeout(() => {
                        setLoadedFields(prev => ({
                            ...prev,
                            [field]: true
                        }));
                    }, (index + 1) * 1250); // Start at 1.25s, then 2.5s, then 3.75s
                });
            }, 1250); // 1.25 second delay after extraction content appears
        }
    }, [showExtractionForm]);
    // Custom extraction complete content for Order Entry
    const orderEntryExtractionContent = (
        <>
            {/* Left half - JPG Display */}
            <div className="w-3/5 h-full flex flex-col items-center justify-center pr-4">
                <div className="rounded-xl shadow-xl border border-[#4B5563] overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#1F1F1F]">
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
                <div className="flex justify-center w-full mb-4">
                    <h4 className="text-2xl font-semibold text-white">
                        Order Details
                    </h4>
                </div>

                {/* Two inputs in a row */}
                <div className="flex space-x-4 w-full">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-[#D1D5DB] mb-2">
                            Company
                        </label>
                        {loadedFields.company ? (
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#4B5563] rounded-xl text-[#FAFBFC] placeholder-[#9CA3AF] focus:outline-none focus:border-[#9CA3AF] focus:ring-2 focus:ring-[#9CA3AF]/20 transition-all duration-300"
                                defaultValue="Mason Steel"
                            />
                        ) : (
                            <div className="w-full h-12 bg-[#313130] rounded-xl animate-pulse"></div>
                        )}
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-[#D1D5DB] mb-2">
                            Purchase Order
                        </label>
                        {loadedFields.purchaseOrder ? (
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#4B5563] rounded-xl text-[#FAFBFC] placeholder-[#9CA3AF] focus:outline-none focus:border-[#9CA3AF] focus:ring-2 focus:ring-[#9CA3AF]/20 transition-all duration-300"
                                defaultValue="98765431"
                            />
                        ) : (
                            <div className="w-full h-12 bg-[#313130] rounded-xl animate-pulse"></div>
                        )}
                    </div>
                </div>

                {/* Large address input */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-[#D1D5DB] mb-2">
                        Address
                    </label>
                    {loadedFields.address ? (
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#4B5563] rounded-xl text-[#FAFBFC] focus:outline-none focus:border-[#9CA3AF] focus:ring-2 focus:ring-[#9CA3AF]/20 transition-all duration-300"
                            defaultValue="123 Steel Road Iron City, WA, 456789"
                        />
                    ) : (
                        <div className="w-full h-12 bg-[#313130] rounded-xl animate-pulse"></div>
                    )}
                </div>

                {/* Table with 3 rows and 2 columns */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-[#D1D5DB] mb-2">
                        Order Items
                    </label>
                    <div className="bg-[#1A1A1A] border border-[#4B5563] rounded-xl overflow-hidden shadow-lg">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#313130]">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-[#E5E7EB] w-1/2">Extracted Item</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-[#E5E7EB] w-1/2">Suggested Catalog Match</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow1Extracted ? (
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#4B5563] rounded-lg text-[#FAFBFC] text-sm focus:outline-none focus:border-[#9CA3AF] focus:ring-1 focus:ring-[#9CA3AF]/20 transition-all duration-300"
                                                defaultValue={'AeroSteel Lightweight Steel Tubes - 2" Diameter'}
                                            />
                                        ) : (
                                            <div className="w-full h-8 bg-[#313130] rounded animate-pulse"></div>
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow1Match ? (
                                            <select className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#4B5563] rounded-lg text-[#FAFBFC] text-sm focus:outline-none focus:border-[#9CA3AF] focus:ring-1 focus:ring-[#9CA3AF]/20 transition-all duration-300">
                                                <option value="">2" Lightweight Steel Tube (AeroSteel)</option>
                                                <option value="1">1.5" Lightweight Steel Tube (AeroSteel)</option>
                                                <option value="2">2.5" Lightweight Steel Tube (AeroSteel)</option>
                                                <option value="3">2" Lightweight Square Tube (AeroSteel)</option>
                                                <option value="4">2" Slotted Lightweight Steel Tube (AeroSteel)</option>
                                            </select>
                                        ) : (
                                            <div className="w-full h-10 bg-[#313130] rounded-lg animate-pulse"></div>
                                        )}
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow2Extracted ? (
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#4B5563] rounded-lg text-[#FAFBFC] text-sm focus:outline-none focus:border-[#9CA3AF] focus:ring-1 focus:ring-[#9CA3AF]/20 transition-all duration-300"
                                                defaultValue="MagnumSteel Hot-Rolled Steel Plates - S275JR"
                                            />
                                        ) : (
                                            <div className="w-full h-8 bg-[#313130] rounded animate-pulse"></div>
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow2Match ? (
                                            <select className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#4B5563] rounded-lg text-[#FAFBFC] text-sm focus:outline-none focus:border-[#9CA3AF] focus:ring-1 focus:ring-[#9CA3AF]/20 transition-all duration-300">
                                                <option value="">S275JR HR Steel Plate (MagnumSteel)</option>
                                                <option value="1">S235JR HR Steel Plate (MagnumSteel)</option>
                                                <option value="2">S355JR HR Steel Plate (MagnumSteel)</option>
                                                <option value="3">S275JR CR Steel Sheet (Magnum Steel)</option>
                                                <option value="4">S275JR Universal Beam (Magnum Steel)</option>
                                            </select>
                                        ) : (
                                            <div className="w-full h-10 bg-[#313130] rounded-lg animate-pulse"></div>
                                        )}
                                    </td>
                                </tr>
                                <tr className="border-t border-slate-600">
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow3Extracted ? (
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#4B5563] rounded-lg text-[#FAFBFC] text-sm focus:outline-none focus:border-[#9CA3AF] focus:ring-1 focus:ring-[#9CA3AF]/20 transition-all duration-300"
                                                defaultValue="ArmorFlex Hardened Steel Bars - EN31"
                                            />
                                        ) : (
                                            <div className="w-full h-8 bg-[#313130] rounded animate-pulse"></div>
                                        )}
                                    </td>
                                    <td className="px-4 py-2">
                                        {loadedFields.tableRow3Match ? (
                                            <select className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#4B5563] rounded-lg text-[#FAFBFC] text-sm focus:outline-none focus:border-[#9CA3AF] focus:ring-1 focus:ring-[#9CA3AF]/20 transition-all duration-300">
                                                <option value="">EN31 Alloy Steel Bar (ArmorFlex)</option>
                                                <option value="1">EN24 Alloy Steel Bar (ArmorFlex)</option>
                                                <option value="2">EN36 Case Hardening Steel Bar (ArmorFlex)</option>
                                                <option value="3">EN8 Medium Carbon Steel Bar (ArmorFlex)</option>
                                                <option value="4">100Cr6 Bearing Steel Bar (ArmorFlex)</option>
                                            </select>
                                        ) : (
                                            <div className="w-full h-10 bg-[#313130] rounded-lg animate-pulse"></div>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Approve Order Button */}
                <div className="flex justify-end w-full mt-6">
                    <button
                        onClick={() => {
                            document.getElementById('form')?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }}
                        disabled={!loadedFields.tableRow3Match}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${loadedFields.tableRow3Match
                            ? 'bg-[#313130] hover:bg-[#4B5563] text-[#FAFBFC] cursor-pointer shadow-md hover:shadow-lg'
                            : 'bg-[#1F1F1F] text-[#9CA3AF] cursor-not-allowed opacity-50'
                            }`}
                    >
                        Approve Order
                        <CheckCircle className={`w-4 h-4 ${!loadedFields.tableRow3Match ? 'opacity-50' : ''}`} />
                    </button>
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
            <Form />
        </div>
    );
}

export default OrderEntry; 