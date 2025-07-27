import DOMPurify from 'dompurify';
import { useState } from 'react';
import { Button } from './ui/button';

function Email({ style = 'fill'}) {
    const containerClass = style === 'fill' ? 'bg-zinc-50' : 'bg-white border border-zinc-200';

    const [invalidEmail, setInvalidEmail] = useState(false);
    const [email, setEmail] = useState('');

    function sanitizeInput(input) {
        return DOMPurify.sanitize(input);
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const sendEmail = async (event) => {
        event.preventDefault();

        const cleanedEmail = sanitizeInput(email);

        const body = { email: cleanedEmail };

        if (!validateEmail(body.email)) {
            setInvalidEmail(true);
            return;
        } else {
            setInvalidEmail(false);
        }

        const res = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });

        if (res.ok) {
            document.querySelector('#submit' + style).textContent = 'Sent!';
            document.querySelector('#submit' + style).disabled = true;
            document.querySelector('#email' + style).disabled = true;

        }
    };

    return (
        <form onSubmit={sendEmail} className="relative z-10">
            <div className={`px-1 py-1 flex items-center max-w-lg mx-auto ${containerClass} rounded-md text-sm md:text-base border border-zinc-300 relative z-10 shadow-lg`}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    id={"email" + style}
                    type="email"
                    placeholder="What's your email?"
                    className="px-3 bg-transparent w-full focus:outline-none placeholder-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed" />
                {/* <button
                    id={"submit" + style} 
                    className="min-w-28 md:min-w-32 bg-emerald-300 hover:bg-emerald-200 transition-color duration-200 text-zinc-900 rounded px-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    Get started
                </button> */}
                <Button className="min-w-28 md:min-w-32 min-h-12">
                    Get started
                </Button>
            </div>
            {invalidEmail && <p className="text-orange-400 text-sm mt-2">Please enter a valid email address</p>}
        </form>
    );
}

export default Email;