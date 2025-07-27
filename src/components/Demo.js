
const Demo = ({
    demoRef
}) => {
    return (
        <div className='bg-zinc-50 pt-10 relative'>
            <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none"></div>
            <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.07)] pointer-events-none z-20"></div>
            <div id="demo" className="block mx-auto relative overflow-hidden z-30" ref={demoRef}>
                <div
                    className='mx-auto relative rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl p-t-2 p-x-2 bg-white z-30'
                    style={{
                        position: 'relative',
                        width: '80%', // Width simulating a tablet width
                        margin: 'auto', // Center the div horizontally
                        paddingTop: '22.8%', // Maintain a 16:9 aspect ratio
                        paddingBottom: '22.8%', // Maintain a 16:9 aspect ratio
                        height: 0, // Use padding to control aspect ratio
                        display: 'flex', // Use flex to center the iframe
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                    }}>
                    <img
                        src="/sample-dashboard.webp"
                        alt="Sample Web Application Dashboard"
                        className='rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl w-full h-full object-cover'
                        style={{
                            position: 'absolute',
                            width: '98%',
                            height: '98%'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Demo;
