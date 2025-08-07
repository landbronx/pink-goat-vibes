import { NeonText } from "@/components/NeonText";
import goatImage from "@/assets/goat.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-8">
        {/* GOAT SHIT title */}
        <NeonText size="large" className="mb-8">
          GOAT SHIT
        </NeonText>
        
        {/* Goat image */}
        <div className="flex justify-center mb-8">
          <img 
            src={goatImage} 
            alt="Goat illustration" 
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float filter brightness-0 invert"
            style={{
              filter: `
                brightness(0) 
                invert(1) 
                sepia(1) 
                saturate(2) 
                hue-rotate(300deg) 
                drop-shadow(0 0 20px hsl(var(--neon-pink)))
              `
            }}
          />
        </div>
        
        {/* COFFEE title */}
        <NeonText size="large" className="mt-8">
          COFFEE
        </NeonText>
      </div>
    </div>
  );
};

export default Index;
