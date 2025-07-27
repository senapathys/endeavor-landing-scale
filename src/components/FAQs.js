import { FiChevronRight } from "react-icons/fi";
import Email from "./Email";

function FAQs() {
    return (
        <>
            <div id="faq" className="bg-white py-6 px-8 md:px-24 md:py-10">
                <h2 className="text-zinc-900 text-2xl md:text-4xl mt-2">Common FAQs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                    <div className="bg-zinc-100 p-8 rounded">
                        <h3 className="text-xl font-medium">Do you use ChatGPT?</h3>
                        <p className="text-zinc-700 mt-2">No, at Endeavor, we build our own AI models that we host securely on Amazon Web Services. No data you submit is processed by OpenAI.</p>
                    </div>
                    <div className="bg-zinc-100 p-8 rounded">

                        <h3 className="text-xl font-medium">Do you integrate with my ERP?</h3>
                        <p className="text-zinc-700 mt-2">Yes, we will integrate with your ERP system to automate PO entry. However, an ERP integration is not necessary to use the tool.</p>
                    </div>
                    <div className="bg-zinc-100 p-8 rounded">

                        <h3 className="text-xl font-medium">Do I need to give you prior examples of RFQs?</h3>
                        <p className="text-zinc-700 mt-2">Our AI works without prior examples and only needs product descriptions. However, prior examples improve accuracy significantly.</p>
                    </div>
                    <div className="bg-zinc-100 p-8 rounded">

                        <h3 className="text-xl font-medium">What if the AI makes mistakes?</h3>
                        <p className="text-zinc-700 mt-2">A user must approve and can correct any AI-generated quote. Additionally, our AI learns from its mistakes over time.</p>
                    </div>
                    <div className="bg-zinc-100 p-8 rounded">

                        <h3 className="text-xl font-medium">How much does the AI tool cost?</h3>
                        <p className="text-zinc-700 mt-2">Pricing is dependent on the volume of quotes that are processed by the system, but our base pricing covers a large number of quotes.</p>
                    </div>
                    <div className="bg-zinc-100 p-8 rounded">

                        <h3 className="text-xl font-medium">Who are the people behind Endeavor?</h3>
                        <p className="text-zinc-700 mt-2">We're a team of Texas-based engineers and AI experts with experience from Amazon Web Services (AWS), the US Air Force, and Palantir.</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-5 mx-8">
                <div className="text-center text-zinc-900 text-2xl mb-6" >Time is money. Save both.</div>
                <Email style="border" />
            </div>
        </>
    );
}

export default FAQs;