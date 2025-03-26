import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, CheckCircle2, AlertCircle, Clock, Shield, Bug } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AuditStatus = 'scheduled' | 'in-progress' | 'review' | 'completed' | 'issues-found';

interface AuditProgressTrackerProps {
  status: AuditStatus;
  progress: number; // 0-100
  startDate?: Date;
  endDate?: Date;
  estimatedCompletionDate?: Date;
  issuesFound?: number;
  animationSpeed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export const AuditProgressTracker: React.FC<AuditProgressTrackerProps> = ({
  status,
  progress: initialProgress,
  startDate,
  endDate,
  estimatedCompletionDate,
  issuesFound = 0,
  animationSpeed = 'normal',
  className
}) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Animation speeds in ms
  const animationDuration = {
    slow: 3000,
    normal: 1500,
    fast: 800
  };

  // Animate the progress bar on mount
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setProgress(initialProgress);
      
      // End animation after progress is set
      const endTimer = setTimeout(() => {
        setIsAnimating(false);
      }, animationDuration[animationSpeed]);
      
      return () => clearTimeout(endTimer);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [initialProgress, animationSpeed]);

  // Format date to human-readable string
  const formatDate = (date?: Date) => {
    if (!date) return 'TBD';
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const getStatusColor = () => {
    switch (status) {
      case 'scheduled':
        return 'bg-amber-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'review':
        return 'bg-purple-500';
      case 'completed':
        return 'bg-green-500';
      case 'issues-found':
        return 'bg-red-500';
      default:
        return 'bg-slate-500';
    }
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'scheduled':
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300">
            <Clock className="w-3 h-3 mr-1" />
            Scheduled
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
            <Shield className="w-3 h-3 mr-1" />
            In Progress
          </Badge>
        );
      case 'review':
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300">
            <Shield className="w-3 h-3 mr-1" />
            Under Review
          </Badge>
        );
      case 'completed':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case 'issues-found':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">
            <AlertCircle className="w-3 h-3 mr-1" />
            Issues Found
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">Unknown</Badge>
        );
    }
  };

  return (
    <div className={cn("p-4 bg-white rounded-lg shadow-sm border border-gray-100", className)}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          {getStatusBadge()}
          {issuesFound > 0 && (
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">
              <Bug className="w-3 h-3 mr-1" />
              {issuesFound} {issuesFound === 1 ? 'Issue' : 'Issues'}
            </Badge>
          )}
        </div>
        
        <div className="text-sm text-slate-500 flex items-center">
          <CalendarDays className="w-4 h-4 mr-1" />
          {startDate && <span>{formatDate(startDate)}</span>}
          {endDate && <span> - {formatDate(endDate)}</span>}
          {!endDate && estimatedCompletionDate && <span> - Est. {formatDate(estimatedCompletionDate)}</span>}
        </div>
      </div>
      
      <div className="mt-4 mb-2">
        <Progress 
          value={progress} 
          className={cn("h-2", isAnimating && "transition-all duration-1000 ease-in-out")}
          indicatorClassName={getStatusColor()}
        />
      </div>
      
      <div className="flex justify-between items-center text-xs text-slate-500 mt-1">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
      
      <div className="text-sm text-slate-600 mt-3 font-medium text-center">
        {progress}% Complete
      </div>
    </div>
  );
};

export default AuditProgressTracker;