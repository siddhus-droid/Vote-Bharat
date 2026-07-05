import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const results = [
  { name: "Rajesh Kumar", party: "Indian National Party", symbol: "🪷", votes: 42350, percentage: 35.2 },
  { name: "Priya Sharma", party: "Progressive Alliance", symbol: "🤚", votes: 38920, percentage: 32.4 },
  { name: "Arjun Singh", party: "Unity Party", symbol: "🔥", votes: 25680, percentage: 21.4 },
  { name: "Meera Patel", party: "Development Front", symbol: "🌾", votes: 13200, percentage: 11.0 },
];

const totalVotes = results.reduce((sum, candidate) => sum + candidate.votes, 0);

const VoteResults = () => {
  const leading = results[0];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-vote mb-6">
          <CardHeader className="text-center">
            <div className="w-full h-2 bg-gradient-national rounded-full mb-4"></div>
            <CardTitle className="text-3xl font-bold">Live Election Results</CardTitle>
            <CardDescription>Real-time vote counting • Updated every 30 seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h3 className="text-2xl font-bold text-primary">{totalVotes.toLocaleString('en-IN')}</h3>
                <p className="text-sm text-muted-foreground">Total Votes Cast</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h3 className="text-2xl font-bold text-secondary">{leading.name}</h3>
                <p className="text-sm text-muted-foreground">Current Leader</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h3 className="text-2xl font-bold text-accent">72.3%</h3>
                <p className="text-sm text-muted-foreground">Voter Turnout</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {results.map((candidate, index) => (
            <Card key={candidate.name} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{candidate.symbol}</div>
                    <div>
                      <h3 className="text-xl font-bold flex items-center space-x-2">
                        <span>{candidate.name}</span>
                        {index === 0 && <Badge className="bg-saffron text-white">LEADING</Badge>}
                      </h3>
                      <p className="text-sm text-muted-foreground">{candidate.party}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <h4 className="text-2xl font-bold">{candidate.votes.toLocaleString('en-IN')}</h4>
                    <p className="text-lg font-semibold text-primary">{candidate.percentage}%</p>
                  </div>
                </div>
                <Progress 
                  value={candidate.percentage} 
                  className="h-3"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Results are being updated in real-time as votes are counted. 
              Final results will be certified by the Election Commission of India.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VoteResults;