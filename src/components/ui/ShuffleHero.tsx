import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from '../../contexts/LanguageContext';


const images = [
    "https://images.unsplash.com/photo-1662218455304-de6c022b3724?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1608429950076-fb1bcd71a7b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722643882339-7a6c9cb080db?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583737077640-5df1e07ff52b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //old employ
    "https://plus.unsplash.com/premium_photo-1661488663175-38c1e15853ee?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664299072583-584882c00a5f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1665567032056-4d22d92638da?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1570787019255-5f4e02414dec?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1688679391702-a03a59866dfd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1650978810641-6610f4b6d15a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596395491836-52690fcac41b?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579208570378-8c970854bc23?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729569297607-c65f976471c5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1730382625230-3756013c515c?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661582268964-6c39040961ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ];

  const IMAGE_HEIGHT = 180;

const ScrollImageWall = ({ onImageClick }: { onImageClick: () => void }) => {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      await controls.start({
        y: [`0`, `-${images.length * IMAGE_HEIGHT}px`],
        transition: {
          duration: images.length * 4, // 4s per image
          ease: "linear",
          repeat: Infinity,
        }
      });
    };
    loop();
  }, [controls]);

  const doubledImages = [...images, ...images];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div animate={controls}>
        <div className="grid grid-cols-2 gap-4 w-full">
          {doubledImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              // onClick={onImageClick}
              className="h-[180px] w-full object-cover rounded-lg hover:brightness-110 transition-all"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ShuffleHero = ({ onImageClick }: { onImageClick: () => void }) => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[720px] overflow-hidden bg-slate-900 text-white">
      {/* Scrolling Image Background */}
      <ScrollImageWall onImageClick={onImageClick} />

      {/* Full Glass Overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/10 pointer-events-none" />

      {/* Text Card Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  bg-white dark:bg-gray-800 
                  text-slate-900 dark:text-white rounded-xl shadow-xl 
                  px-8 py-12 max-w-xl text-center z-20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          {t('hero_title')}
        </h1>
        <p className="text-sm md:text-base mb-4 font-medium text-gray-600 dark:text-gray-300">
          {t('hero_description')}
        </p>

        {/* Centered Button */}
        <div className="mt-4">
          <button onClick={onImageClick} className="bg-blue-800 text-white font-medium px-6 py-2 rounded-full hover:bg-slate-900">
            {t('get_started')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShuffleHero;
