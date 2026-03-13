"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import UncertainBackground from "../../components/uncertain_bg"
import cardData from '../../data/uncertain/cardData';

// Carousel component
const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full max-w-6xl h-[40rem] my-8">
            {/*  Show 3 slides simultaneously to create a layered effect */}
            {images.map((image, index) => {
                // Calculate the position offset of the current slide
                const offset = (index - currentIndex + images.length) % images.length;

                return (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            offset === 0 ? 'z-30 opacity-100' :
                                offset === 1 ? 'z-20 opacity-80 -translate-x-8' :
                                    offset === 2 ? 'z-10 opacity-60 -translate-x-16' :
                                        'z-0 opacity-0'
                        }`}
                        style={{
                            transform: `scale(${1 - offset * 0.09})`, // Slight scaling for depth
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain rounded-lg shadow-xl"
                            priority={index < 3} // Preload the first 3 pictures
                        />
                    </div>
                );
            })}

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-40">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function Uncertain2026Page() {
  return (
    <>

        <UncertainBackground />

        <main className="relative z-10 min-h-screen text-black flex flex-col items-center px-6 py-16">
        <div className="w-full max-w-4xl text-center mt-[-40px]">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
            uncertain (unfolding)
            </h1>

            <p className="text-base md:text-lg leading-8 text-black/80">
            Welcome to 2026 DAC WIP show 'uncertain (unfolding)' archive.
            </p>
        </div>

        <div className="mt-10 flex gap-4">
            <Link
            href="/Uncertain2026/Artworks"
            className="px-6 py-3 border border-black rounded-lg hover:bg-white/50 hover:text-black transition mt-[100px]"
            >
            View Artworks
            </Link>
        </div>
        </main>

    </>

  );
}