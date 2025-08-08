import { NeonText } from "@/components/NeonText";
import { FlagIcon } from "@/components/FlagIcon";
import { useState } from "react";

const Index = () => {
  const [flagState, setFlagState] = useState<"usa" | "argentina" | "laser">("usa");

  const cycleFlagState = () => {
    setFlagState(prev => {
      if (prev === "usa") return "argentina";
      if (prev === "argentina") return "laser";
      return "usa";
    });
  };

  const isSpanish = flagState === "argentina" || flagState === "laser";
  const laserMode = flagState === "laser";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 relative">
      {/* Single cycling flag in top right */}
      <div className="absolute top-6 right-6">
        <FlagIcon 
          country={flagState}
          onClick={cycleFlagState}
        />
      </div>

      <div className="text-center space-y-8">
        {/* Title */}
        <NeonText size="large" className="mb-8 relative z-10">
          {isSpanish ? "CAFÈ MIERDA" : "GOAT SHIT"}
        </NeonText>
        
        {/* Goat image with conditional laser version */}
        <div className="relative flex justify-center">
          <img 
            src={laserMode ? "/lovable-uploads/48b6dcdd-fbcb-4dc3-a001-acf849b9d8b8.png" : "/lovable-uploads/c2c88c8e-874b-492e-80fa-e4e2e3458996.png"}
            alt="White goat on hillside" 
            className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain relative z-0"
          />
          
          {/* Bottom text overlapping image */}
          <div className="absolute -bottom-6 transform -rotate-2 z-10">
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