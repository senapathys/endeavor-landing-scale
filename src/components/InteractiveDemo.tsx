import React, { useState, useRef, useEffect } from "react";
import { Badge } from "./ui/badge";
import { GlowEffect } from "./core/glow-effect";
import { ChevronUp, ChevronDown } from "lucide-react";

// Animation timing configuration
const ANIMATION_CONFIG = {
    transition: {
        duration: 3000, // ms
        class: "duration-[3000ms]"
    },
} as const;

// Layout configuration
const LAYOUT_CONFIG = {
    grid: {
        normal: "grid-cols-[30%_70%]",
        expanded: "grid-cols-[0%_100%]"
    }
} as const;

interface InteractiveDemoProps {
    title: string;
    description: string;
    badgeText?: string;
    badgeLink?: string;
    extractionCompleteContent: React.ReactNode;
}

export default function InteractiveDemo({
    title,
    description,
    badgeText,
    badgeLink,
    extractionCompleteContent
}: InteractiveDemoProps) {
    const [isOverUpload, setIsOverUpload] = useState(false);
    const [extractionComplete, setExtractionComplete] = useState(false);
    const [isDraggingFile, setIsDraggingFile] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [showSkeletons, setShowSkeletons] = useState(false);
    const fileRef = useRef<HTMLDivElement>(null);
    const uploadRef = useRef<HTMLDivElement>(null);
    const dragOffset = useRef({ x: 0, y: 0 });
    const initialMousePosition = useRef({ x: 0, y: 0 });

    const handleFileMouseDown = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default behavior
        setIsDraggingFile(true);

        // Prevent scrolling while dragging
        document.body.style.overflow = 'hidden';

        // Store the initial mouse position and calculate offset
        const rect = fileRef.current?.getBoundingClientRect();
        if (rect) {
            initialMousePosition.current = { x: e.pageX, y: e.pageY };
            dragOffset.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingFile || !fileRef.current) return;

        // Calculate movement from initial mouse position using transform
        // Use pageX/pageY to account for scroll position
        const deltaX = e.pageX - initialMousePosition.current.x;
        const deltaY = e.pageY - initialMousePosition.current.y;
        fileRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        const uploadRect = uploadRef.current?.getBoundingClientRect();
        if (uploadRect) {
            const isOver = e.clientX >= uploadRect.left &&
                e.clientX <= uploadRect.right &&
                e.clientY >= uploadRect.top &&
                e.clientY <= uploadRect.bottom;
            setIsOverUpload(isOver);
        }
    };

    const handleMouseUp = () => {
        if (isDraggingFile && isOverUpload) {
            setIsUploading(true);

            // After transition duration, set extraction complete
            setTimeout(() => {
                setExtractionComplete(true);
                setIsUploading(false);
            }, ANIMATION_CONFIG.transition.duration);
        }
        setIsDraggingFile(false);
        setIsOverUpload(false);

        // Re-enable scrolling
        document.body.style.overflow = '';

        // Reset file position
        if (fileRef.current) {
            fileRef.current.style.transform = '';
        }
    };

    // Add event listeners
    useEffect(() => {
        if (isDraggingFile) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDraggingFile, isOverUpload]);

    return (
        <div className={`min-h-screen bg-[#121212] ${isDraggingFile ? 'select-none' : ''}`}>
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
                            {description}
                        </p>
                        {badgeText && badgeLink && (
                            <a href={badgeLink}>
                                <Badge variant="secondary" className="mt-2 mb-4 !text-secondary-foreground !bg-slate-600 hover:!bg-slate-400 !hover:text-slate-900 transition-colors cursor-pointer">
                                    {badgeText} →
                                </Badge>
                            </a>
                        )}
                    </div>

                    {/* Interactive Demo Section */}
                    <div className={`grid ${extractionComplete || isUploading ? LAYOUT_CONFIG.grid.expanded : LAYOUT_CONFIG.grid.normal} gap-8 items-center min-h-[500px] relative transition-all duration-500`}>
                        {/* File Section */}
                        <div className={`text-center transition-all duration-300 ${extractionComplete || isUploading ? 'opacity-0 pointer-events-none' : ''}`}>
                            <p className="text-slate-300 mb-8">
                                Drag this file into the upload area to see our technology in action
                            </p>

                            {/* Curved Arrow */}
                            <div className={`absolute top-[43%] left-[19%] transform -translate-y-1/2 pointer-events-none z-10 transition-opacity duration-200 ${isDraggingFile ? 'opacity-0' : 'opacity-100'}`}>
                                <svg
                                    width="200"
                                    height="60"
                                    viewBox="0 0 200 60"
                                    className="text-slate-500"
                                >
                                    {/* Curved path */}
                                    <path
                                        d="M 20 30 Q 100 10 180 30"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeDasharray="5,5"
                                        className="animate-pulse"
                                    />
                                    {/* Arrowhead - rotated to match curve tangent */}
                                    <g transform="translate(180, 30) rotate(15)" className="animate-pulse">
                                        <path
                                            d="M -5 -2 L 5 0 L -5 2"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                            </div>

                            {/* Draggable File with Drag Indicator */}
                            <div className="relative">
                                {/* Drag Me Bubble */}
                                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg transition-opacity duration-200 z-10 ${isDraggingFile ? 'opacity-0' : 'opacity-100 animate-bounce'}`}>
                                    Pick me up!
                                </div>

                                {/* Draggable File */}
                                <div
                                    ref={fileRef}
                                    className={`
                                    w-32 h-40 mx-auto cursor-grab active:cursor-grabbing
                                    bg-[#1a1a1a] border-2 border-slate-600
                                    rounded-lg shadow-lg transform select-none
                                    hover:shadow-xl hover:scale-105
                                    ${isDraggingFile ? 'scale-110 shadow-2xl z-50' : ''}
                                    ${extractionComplete ? 'opacity-50' : ''}
                                `}
                                    style={{
                                        position: 'relative',
                                        pointerEvents: extractionComplete ? 'none' : 'auto',
                                        zIndex: isDraggingFile ? 1000 : 'auto'
                                    }}
                                    onMouseDown={handleFileMouseDown}
                                >
                                    <div className="p-4 h-full flex flex-col justify-center items-center">
                                        <div className="text-center">
                                            <div className="w-8 h-10 bg-blue-900 rounded mx-auto mb-2 flex items-center justify-center">
                                                <span className="text-blue-400 text-sm">📄</span>
                                            </div>
                                            <p className="text-xs font-medium text-slate-300 text-center">
                                                sample_order.pdf
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Upload Section */}
                        <div className="text-center">
                            <div
                                ref={uploadRef}
                                className={`
                                    ${extractionComplete || isUploading ? 'w-[125%] -mx-[15%]' : 'w-full'} ${extractionComplete || isUploading ? 'h-[700px]' : 'h-105'} rounded-xl
                                    flex items-center justify-center transition-all relative border-2 border-dashed border-slate-600
                                    ${extractionComplete || isUploading ? 'duration-[3000ms]' : 'duration-1000'}
                                    ${isOverUpload && !extractionComplete
                                        ? 'bg-blue-900/20 shadow-lg scale-105'
                                        : 'bg-[#1a1a1a]/50'
                                    }
                                    ${extractionComplete
                                        ? 'bg-green-900/20'
                                        : isUploading
                                            ? 'bg-blue-900/20'
                                            : ''
                                    }
                                `}
                            >
                                {/* Flowing gradient border overlay */}
                                <div className={`absolute inset-0 rounded-xl pointer-events-none z-0 transition-all duration-500 ${isDraggingFile || extractionComplete || isUploading ? 'opacity-100' : 'opacity-0'}`}>
                                    {/* Framer Motion gradient effect */}
                                    <GlowEffect
                                        mode="rotate"
                                        colors={['rgba(208, 30, 40, 0.8)', 'rgba(37, 115, 163, 0.8)', 'rgba(208, 30, 40, 0.8)']}
                                        duration={10}
                                        className="rounded-xl"
                                    />

                                    {/* Inner background to create border effect */}
                                    <div className="absolute inset-[3px] rounded-lg bg-[#121212]" />
                                </div>
                                {extractionComplete ? (
                                    <div className="flex items-center justify-center relative z-10 w-full h-full">
                                        {extractionCompleteContent}
                                    </div>
                                ) : isUploading ? (
                                    <div className="text-center relative z-10">
                                        <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <div className="animate-spin text-blue-400">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-semibold text-blue-300 mb-2">
                                            Uploading...
                                        </h4>
                                        <p className="text-blue-400">
                                            Processing your document
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center relative z-10">
                                        <div className={`
                                            w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4
                                            ${isOverUpload
                                                ? 'bg-blue-900'
                                                : 'bg-slate-700'
                                            }
                                        `}>
                                            <div className={`
                                                ${isOverUpload
                                                    ? 'text-blue-400'
                                                    : 'text-slate-500'
                                                }
                                            `}>
                                                {isOverUpload ? <ChevronDown size={32} /> : <ChevronUp size={32} />}
                                            </div>
                                        </div>
                                        <p className="text-slate-400">
                                            {isOverUpload
                                                ? 'Release to start extraction'
                                                : 'Drag & drop the sample order here'
                                            }
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 