import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

function Footer() {
    return (
        <footer className="bg-white mx-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-4 items-center pt-8">
                <div className="flex items-center space-x-2 md:space-x-3">
                    <Image className="h-6 w-auto md:h-7 lg:h-8 cursor-pointer" src="/industrial-ai-logo.svg" alt="Endeavor" 
                    width={265}
                    height={58}
                    />
                </div>
                <div className="flex space-x-4 items-center md:justify-end">
                    <Button>
                        Book a demo
                    </Button>

                    <Button outline>
                        Contact Us
                    </Button>

                </div>
            </div>
            <p className="text-left font-light text-xs text-zinc-600">832 Sansome St, San Francisco CA, 94114</p>
            <p className="text-left font-light text-xs text-zinc-600 pb-6">© 2025 Endeavor AI, Inc. All rights reserved. The services and the content on this website are provided on an "as is" basis. Endeavor, its licensors, and its suppliers, to the fullest extent permitted by law, disclaim all warranties, either express or implied, statutory or otherwise, including but not limited to the implied warranties of merchantability, non-infringement of third parties' rights, and fitness for particular purpose. Without limiting the foregoing, Endeavor, its licensors, and its suppliers make no representations or warranties about the accuracy, reliability, completeness, currentness, or timeliness of the content, software, text, graphics, links, or communications provided on or through the use of the website.</p>
        </footer>
    );
}

export default Footer;