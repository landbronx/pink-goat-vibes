import { NeonText } from "@/components/NeonText";
import { FlagIcon } from "@/components/FlagIcon";
import { useState } from "react";

const Index = () => {
  const [isSpanish, setIsSpanish] = useState(false);
  const [laserMode, setLaserMode] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const toggleLaser = () => {
    setLaserMode(!laserMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative">
      {/* Flag toggles in top right */}
      <div className="absolute top-6 right-6 flex gap-3">
        <FlagIcon 
          country={isSpanish ? "usa" : "argentina"}
          onClick={toggleLanguage}
        />
        <FlagIcon 
          country="laser"
          onClick={toggleLaser}
        />
      </div>

      <div className="text-center space-y-8">
        {/* Title */}
        <NeonText size="large" className="mb-8 relative z-10">
          {isSpanish ? "CAFÈ MIERDA" : "GOAT SHIT"}
        </NeonText>
        
        {/* Goat image with overlapping text */}
        <div className="relative flex justify-center">
          <img 
            src="/lovable-uploads/c2c88c8e-874b-492e-80fa-e4e2e3458996.png"
            alt="White goat on hillside" 
            className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain relative z-0"
          />
          
          {/* Laser beams from goat eyes */}
          {laserMode && (
            <>
              <div className="absolute top-[30%] left-[38%] w-[200px] h-[3px] bg-gradient-to-l from-pink-500 to-pink-600 opacity-80 animate-pulse z-20" 
                   style={{ transform: 'rotate(-5deg)' }} />
              <div className="absolute top-[32%] left-[42%] w-[200px] h-[3px] bg-gradient-to-l from-pink-500 to-pink-600 opacity-80 animate-pulse z-20" 
                   style={{ transform: 'rotate(-3deg)' }} />
            </>
          )}
          
          {/* Bottom text overlapping image */}
          <div className="absolute bottom-2 transform -rotate-2 z-10">
            <NeonText size="large">
              {isSpanish ? "DE CABRA" : "COFFEE"}
            </NeonText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;