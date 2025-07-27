import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

function Navbar() {
  return (
    <nav className="py-4 fixed top-0 z-50 bg-white text-zinc-900 border-b border-zinc-200 w-full">
      <div className="flex justify-between items-center mx-8 max-w-7xl mx-auto">
        <Link className="flex items-center space-x-2 md:space-x-3" href="/">
          <Image src="/industrial-ai-logo.svg" alt="Endeavor" className="h-6 w-auto md:h-6 lg:h-7"
            width={200}
            height={30} 
          />
        </Link>
        <div className="lg:space-x-6 items-center hidden md:flex text-xs md:text-sm lg:text-sm">
          <Button plain asChild>
            <Link href="#demo">Demo</Link>
          </Button>
          <Button plain asChild>
            <Link href="#solution">Solution</Link>
          </Button>
          <Button plain asChild>
            <Link href="#features">Features</Link>
          </Button>
          <Button plain asChild>
            <Link href="#security">Security</Link>
          </Button>
          <Button plain asChild>
            <Link href="#faq">FAQs</Link>
          </Button>
        </div>
        <Button>
          Book a demo
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
