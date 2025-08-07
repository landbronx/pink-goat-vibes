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
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain animate-float"
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
