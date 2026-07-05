import emblem from "@/assets/emblem.jpg";

const VotingHeader = () => {
  return (
    <header className="bg-gradient-hero text-white shadow-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-4">
          <img 
            src={emblem} 
            alt="Government of India Emblem" 
            className="w-16 h-16 object-contain"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold">भारत निर्वाचन आयोग</h1>
            <h2 className="text-xl">Election Commission of India</h2>
            <p className="text-sm opacity-90 mt-1">National E-Voting System</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VotingHeader;