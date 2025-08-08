import { NeonText } from "@/components/NeonText";
import { FlagIcon } from "@/components/FlagIcon";
import { useState } from "react";

const Index = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative">
      {/* Flag toggle in top right */}
      <div className="absolute top-6 right-6">
        <FlagIcon 
          country={isSpanish ? "usa" : "argentina"}
          onClick={toggleLanguage}
        />
      </div>

      <div className="text-center space-y-8">
        {/* Title */}
        <NeonText size="large" className="mb-8">
          {isSpanish ? "CAFÈ MIERDA" : "GOAT SHIT"}
        </NeonText>
        
        {/* Goat image with overlapping text */}
        <div className="relative flex justify-center">
          <img 
            src="/lovable-uploads/c2c88c8e-874b-492e-80fa-e4e2e3458996.png"
            alt="White goat on hillside" 
            className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain"
          />
          
          {/* Bottom text overlapping image */}
          <div className="absolute -bottom-8 transform -rotate-2">
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