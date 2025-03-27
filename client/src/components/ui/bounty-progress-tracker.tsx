import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, ShieldCheck, CalendarDays, Hourglass, Award, Bug } from 'lucide-react';
import { cn } from '@/lib/utils';

export type BountyStatus = 'open' | 'active' | 'review' | 'paid' | 'closed';

interface BountyProgressTrackerProps {
  status: BountyStatus;
  bountyAmount: number;
  submissionsCount: number;
  validatedCount: number;
  daysRemaining: number;
  isHighPriority?: boolean;
  className?: string;
  totalSubmissionTarget?: number;
}

export const BountyProgressTracker: React.FC<BountyProgressTrackerProps> = ({
  status,
  bountyAmount,
  submissionsCount,
  validatedCount,
  daysRemaining,
  isHighPriority = false,
  totalSubmissionTarget = 10,
  className
}) => {
  const [progressValue, setProgressValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Calculate progress percentage based on submissions vs target
  const calculateProgress = () => {
    return Math.min(Math.round((submissionsCount / totalSubmissionTarget) * 100), 100);
  };

  // Animate progress on mount
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setProgressValue(calculateProgress());
      
      // End animation after progress is set
      const endTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
      
      return () => clearTimeout(endTimer);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [submissionsCount, totalSubmissionTarget]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'open':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
            <Bug className="w-3 h-3 mr-1" />
            Open for Submissions
          </Badge>
        );
      case 'active':
        return (
          <Badge variant="outline" className="bg-slate-50 text-[#032757] border-[#032757]">
            <TrendingUp className="w-3 h-3 mr-1" />
            Active
          </Badge>
        );
      case 'review':
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300">
            <ShieldCheck className="w-3 h-3 mr-1" />
            Under Review
          </Badge>
        );
      case 'paid':
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300">
            <DollarSign className="w-3 h-3 mr-1" />
            Paid
          </Badge>
        );
      case 'closed':
        return (
          <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-300">
            Closed
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">Unknown</Badge>
        );
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'open':
        return 'bg-green-500';
      case 'active':
        return 'bg-[#032757]';
      case 'review':
        return 'bg-purple-500';
      case 'paid':
        return 'bg-amber-500';
      case 'closed':
        return 'bg-slate-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <div className={cn(
      "p-4 bg-white rounded-lg shadow-sm border", 
      isHighPriority ? "border-red-200" : "border-gray-100",
      className
    )}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          {getStatusBadge()}
          {isHighPriority && (
            <Badge className="bg-red-500 text-white">
              High Priority
            </Badge>
          )}
        </div>
        
        <div className="text-sm text-slate-500 flex items-center">
          <Hourglass className="w-4 h-4 mr-1" />
          <span>{daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center">
          <Award className="text-amber-500 w-5 h-5 mr-2" />
          <span className="text-lg font-bold text-slate-800">{formatCurrency(bountyAmount)}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm text-slate-500">Submissions</div>
            <div className="text-lg font-bold text-slate-800">{submissionsCount}</div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-slate-500">Validated</div>
            <div className="text-lg font-bold text-green-600">{validatedCount}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 mb-2">
        <Progress 
          value={progressValue} 
          className={cn("h-2", isAnimating && "transition-all duration-1000 ease-in-out")}
          indicatorClassName={getStatusColor()}
        />
      </div>
      
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>0</span>
        <span>{totalSubmissionTarget / 2}</span>
        <span>{totalSubmissionTarget}+ submissions</span>
      </div>
    </div>
  );
};

export default BountyProgressTracker;