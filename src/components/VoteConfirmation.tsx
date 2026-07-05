import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface VoteConfirmationProps {
  voterId: string;
  onViewResults: () => void;
}

const VoteConfirmation = ({ voterId, onViewResults }: VoteConfirmationProps) => {
  const transactionId = `TXN${Date.now()}`;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-vote">
        <CardHeader className="text-center">
          <div className="w-full h-2 bg-gradient-national rounded-full mb-4"></div>
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-secondary" />
          </div>
          <CardTitle className="text-2xl font-bold text-secondary">Vote Submitted Successfully!</CardTitle>
          <CardDescription>Your vote has been recorded securely</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Voter ID:</span>
              <span className="font-mono">{voterId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Transaction ID:</span>
              <span className="font-mono">{transactionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Time:</span>
              <span>{new Date().toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Status:</span>
              <span className="text-secondary font-semibold">CONFIRMED</span>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Thank you for participating in the democratic process.</p>
            <p className="mt-2">Your vote is encrypted and secure.</p>
          </div>

          <Button 
            onClick={onViewResults}
            className="w-full bg-accent hover:bg-accent/90"
          >
            View Live Results
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoteConfirmation;