import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuditProgressTracker from '@/components/ui/audit-progress-tracker';
import BountyProgressTracker from '@/components/ui/bounty-progress-tracker';
import { mockAudits, mockBounties } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCcw, BarChart4 } from 'lucide-react';
import SectionHeading from '@/components/shared/section-heading';

const ProgressTrackersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('audits');
  const [animationSpeed, setAnimationSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to refresh the animations
  const refreshAnimations = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        tagline="Real-time Tracking"
        title="Progress Trackers"
        description="Monitor the status of ongoing security audits and bug bounty programs in real-time with our animated progress trackers."
        textAlignment="center"
      />

      <div className="flex justify-end mb-4 mt-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-500">Animation Speed:</span>
            <select
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(e.target.value as 'slow' | 'normal' | 'fast')}
              className="text-sm border rounded px-2 py-1 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#032757]"
            >
              <option value="slow">Slow</option>
              <option value="normal">Normal</option>
              <option value="fast">Fast</option>
            </select>
          </div>
          <Button variant="outline" size="sm" onClick={refreshAnimations} className="flex items-center text-[#032757] border-[#032757] hover:bg-[#032757]/10">
            <RefreshCcw className="h-4 w-4 mr-2" /> Refresh Animations
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="audits" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6 bg-slate-100 text-slate-600">
          <TabsTrigger 
            value="audits" 
            className="flex items-center data-[state=active]:text-[#032757] data-[state=active]:shadow-none data-[state=active]:bg-white"
          >
            <BarChart4 className="w-4 h-4 mr-2" /> Security Audits
          </TabsTrigger>
          <TabsTrigger 
            value="bounties" 
            className="flex items-center data-[state=active]:text-[#032757] data-[state=active]:shadow-none data-[state=active]:bg-white"
          >
            <BarChart4 className="w-4 h-4 mr-2" /> Bug Bounties
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="audits" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockAudits.map((audit) => (
              <Card key={`audit-${audit.id}-${refreshKey}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-slate-800">{audit.projectName}</CardTitle>
                  <CardDescription className="flex justify-between items-center">
                    <span>Audited by {audit.auditFirm}</span>
                    <span className="text-sm text-slate-500">{audit.contractType}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AuditProgressTracker
                    key={`audit-tracker-${audit.id}-${refreshKey}`}
                    status={audit.status}
                    progress={audit.progress}
                    startDate={audit.startDate}
                    endDate={audit.endDate}
                    estimatedCompletionDate={audit.estimatedCompletionDate}
                    issuesFound={audit.issuesFound}
                    animationSpeed={animationSpeed}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="bounties" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockBounties.map((bounty) => (
              <Card key={`bounty-${bounty.id}-${refreshKey}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-slate-800">{bounty.projectName}</CardTitle>
                  <CardDescription className="flex justify-between items-center">
                    <span>Vulnerability type: {bounty.vulnerabilityType}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BountyProgressTracker
                    key={`bounty-tracker-${bounty.id}-${refreshKey}`}
                    status={bounty.status}
                    bountyAmount={bounty.bountyAmount}
                    submissionsCount={bounty.submissionsCount}
                    validatedCount={bounty.validatedCount}
                    daysRemaining={bounty.daysRemaining}
                    isHighPriority={bounty.isHighPriority}
                    totalSubmissionTarget={bounty.totalSubmissionTarget}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressTrackersPage;