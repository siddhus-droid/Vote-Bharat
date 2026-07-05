import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface VoterLoginProps {
  onLogin: (voterId: string) => void;
}

const VoterLogin = ({ onLogin }: VoterLoginProps) => {
  const [voterId, setVoterId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (voterId && password) {
      onLogin(voterId);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-vote">
        <CardHeader className="text-center">
          <div className="w-full h-2 bg-gradient-national rounded-full mb-4"></div>
          <CardTitle className="text-2xl font-bold text-foreground">Voter Authentication</CardTitle>
          <CardDescription>Enter your credentials to access the voting system</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="voterId">Voter ID Number</Label>
              <Input
                id="voterId"
                type="text"
                placeholder="Enter your Voter ID"
                value={voterId}
                onChange={(e) => setVoterId(e.target.value)}
                required
                className="focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:ring-primary"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              disabled={!voterId || !password}
            >
              Proceed to Vote
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Secure • Verified • Transparent</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoterLogin;