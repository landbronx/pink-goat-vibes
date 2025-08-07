import { NeonText } from "@/components/NeonText";

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
            src="/lovable-uploads/c2c88c8e-874b-492e-80fa-e4e2e3458996.png"
            alt="White goat on hillside" 
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float rounded-lg shadow-neon"
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
