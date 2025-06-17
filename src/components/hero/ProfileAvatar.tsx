import React, { useState, useEffect } from 'react';

const placeholderImages = [
  '/me1.jpg',
  '/me2.jpg',
  '/me3.jpg',
  '/me4.jpg',
];

const ProfileAvatar = () => {
  const [images, setImages] = useState(placeholderImages);
  const [enlarged, setEnlarged] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        if (first) newArr.push(first);
        return newArr;
      });
    }, 5000); // rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center relative">
      {/* Small avatars */}
      {images.map((src, idx) => (
        <div
          key={src}
          className={`transition-transform duration-300 rounded-full border-4 border-white shadow-lg bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 p-1 cursor-pointer relative scale-100 z-10 ${idx > 0 ? 'hidden md:block' : ''}`}
          style={{ width: 104, height: 104 }}
          onMouseEnter={() => setEnlarged(idx)}
        >
          <img
            src={src}
            alt={`Profile ${idx + 1}`}
            className="w-full h-full object-cover object-top rounded-full"
          />
        </div>
      ))}
      {/* Enlarged avatar modal */}
      {enlarged !== null && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setEnlarged(null)}
          />
          <div
            className="fixed left-1/2 top-24 md:top-32 -translate-x-1/2 transition-transform duration-300 rounded-full border-4 border-white shadow-lg bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 p-1 z-[60]"
            style={{ width: '60vh', height: '60vh', maxWidth: '90vw', maxHeight: '90vw' }}
            onClick={() => setEnlarged(null)}
          >
            <img
              src={images[enlarged]}
              alt={`Profile ${enlarged + 1}`}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileAvatar;
