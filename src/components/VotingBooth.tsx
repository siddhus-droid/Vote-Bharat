import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface Candidate {
  id: string;
  name: string;
  party: string;
  symbol: string;
}

interface VotingBoothProps {
  voterId: string;
  onVoteSubmit: (candidateId: string) => void;
}

const candidates: Candidate[] = [
  { id: "1", name: "Rajesh Kumar", party: "Indian National Party", symbol: "🪷" },
  { id: "2", name: "Priya Sharma", party: "Progressive Alliance", symbol: "🤚" },
  { id: "3", name: "Arjun Singh", party: "Unity Party", symbol: "🔥" },
  { id: "4", name: "Meera Patel", party: "Development Front", symbol: "🌾" },
];

const VotingBooth = ({ voterId, onVoteSubmit }: VotingBoothProps) => {
  const [selectedCandidate, setSelectedCandidate] = useState<string>("");
  const [isConfirming, setIsConfirming] = useState(false);

  const handleVoteConfirm = () => {
    if (selectedCandidate) {
      setIsConfirming(true);
    }
  };

  const handleFinalSubmit = () => {
    onVoteSubmit(selectedCandidate);
  };

  if (isConfirming) {
    const candidate = candidates.find(c => c.id === selectedCandidate);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-vote">
          <CardHeader className="text-center">
            <div className="w-full h-2 bg-gradient-national rounded-full mb-4"></div>
            <CardTitle className="text-2xl font-bold text-destructive">Confirm Your Vote</CardTitle>
            <CardDescription>Please verify your selection before final submission</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">You are voting for:</p>
              <h3 className="text-xl font-bold">{candidate?.name}</h3>
              <p className="text-sm text-muted-foreground">{candidate?.party}</p>
              <div className="text-4xl mt-2">{candidate?.symbol}</div>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setIsConfirming(false)}
                className="flex-1"
              >
                Go Back
              </Button>
              <Button 
                onClick={handleFinalSubmit}
                className="flex-1 bg-secondary hover:bg-secondary/90"
              >
                Submit Vote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="shadow-vote">
          <CardHeader className="text-center">
            <div className="w-full h-2 bg-gradient-national rounded-full mb-4"></div>
            <CardTitle className="text-2xl font-bold">Cast Your Vote</CardTitle>
            <CardDescription>
              Voter ID: {voterId} | Select one candidate from the list below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedCandidate} onValueChange={setSelectedCandidate}>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={candidate.id} id={candidate.id} />
                    <Label 
                      htmlFor={candidate.id} 
                      className="flex-1 cursor-pointer p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.party}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl mb-1">{candidate.symbol}</div>
                          <Badge variant="outline">Candidate</Badge>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
            
            <div className="mt-8 text-center">
              <Button 
                onClick={handleVoteConfirm}
                disabled={!selectedCandidate}
                className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
              >
                Confirm Selection
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VotingBooth;