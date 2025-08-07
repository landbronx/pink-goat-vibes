import { NeonText } from "@/components/NeonText";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-8">
        {/* GOAT SHIT title */}
        <NeonText size="large" className="mb-8">
          GOAT SHIT
        </NeonText>
        
        {/* Goat image with overlapping COFFEE text */}
        <div className="relative flex justify-center">
          <img 
            src="/lovable-uploads/c2c88c8e-874b-492e-80fa-e4e2e3458996.png"
            alt="White goat on hillside" 
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain"
          />
          
          {/* COFFEE title overlapping bottom of image */}
          <div className="absolute bottom-0 transform rotate-3">
            <NeonText size="large">
              COFFEE
            </NeonText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
