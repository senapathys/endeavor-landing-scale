import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import InteractiveDemo from "../../components/InteractiveDemo";

function OrderEntry() {
    // Custom extraction complete content for Order Entry
    const orderEntryExtractionContent = (
        <>
            <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-400 text-2xl">✅</span>
            </div>
            <h4 className="text-xl font-semibold text-green-300 mb-2 text-center">
                Order Entry Complete!
            </h4>
            <p className="text-green-400 text-center mb-4">
                Your order has been successfully entered into the system
            </p>
            <div className="bg-slate-800 rounded-lg p-4 max-w-md">
                <h5 className="text-green-300 font-medium mb-2">Order Details:</h5>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-slate-400">Order #:</span>
                        <span className="text-white">OE-2024-001</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Customer:</span>
                        <span className="text-white">Tech Solutions Inc</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Items:</span>
                        <span className="text-white">15</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Total:</span>
                        <span className="text-white">$8,750.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-green-400">Ready for Processing</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p className="text-slate-400 text-sm">
                    Order has been sent to your ERP system
                </p>
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