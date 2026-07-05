import { useState } from "react";
import VotingHeader from "@/components/VotingHeader";
import VoterLogin from "@/components/VoterLogin";
import VotingBooth from "@/components/VotingBooth";
import VoteConfirmation from "@/components/VoteConfirmation";
import VoteResults from "@/components/VoteResults";

type VotingStage = "login" | "voting" | "confirmation" | "results";

const Index = () => {
  const [currentStage, setCurrentStage] = useState<VotingStage>("login");
  const [voterId, setVoterId] = useState<string>("");
  const [selectedCandidate, setSelectedCandidate] = useState<string>("");

  const handleLogin = (id: string) => {
    setVoterId(id);
    setCurrentStage("voting");
  };

  const handleVoteSubmit = (candidateId: string) => {
    setSelectedCandidate(candidateId);
    setCurrentStage("confirmation");
  };

  const handleViewResults = () => {
    setCurrentStage("results");
  };

  return (
    <div className="min-h-screen bg-background">
      <VotingHeader />
      
      {currentStage === "login" && (
        <VoterLogin onLogin={handleLogin} />
      )}
      
      {currentStage === "voting" && (
        <VotingBooth 
          voterId={voterId} 
          onVoteSubmit={handleVoteSubmit} 
        />
      )}
      
      {currentStage === "confirmation" && (
        <VoteConfirmation 
          voterId={voterId} 
          onViewResults={handleViewResults} 
        />
      )}
      
      {currentStage === "results" && (
        <VoteResults />
      )}
    </div>
  );
};

export default Index;
