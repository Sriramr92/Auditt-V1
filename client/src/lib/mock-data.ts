// Mock data for demo purposes

import { AuditStatus } from '@/components/ui/audit-progress-tracker';
import { BountyStatus } from '@/components/ui/bounty-progress-tracker';

// Add 1-30 days to current date
const addDays = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

// Subtract 1-30 days from current date
const subtractDays = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

// Mock audit data
export const mockAudits = [
  {
    id: 1,
    projectName: 'DeFi Lending Protocol',
    status: 'in-progress' as AuditStatus,
    progress: 45,
    startDate: subtractDays(5),
    estimatedCompletionDate: addDays(10),
    issuesFound: 0,
    auditFirm: 'Secure Chain Auditors',
    contractType: 'Smart Contract'
  },
  {
    id: 2,
    projectName: 'NFT Marketplace',
    status: 'review' as AuditStatus,
    progress: 85,
    startDate: subtractDays(15),
    estimatedCompletionDate: addDays(3),
    issuesFound: 3,
    auditFirm: 'BlockSafe Security',
    contractType: 'Smart Contract'
  },
  {
    id: 3,
    projectName: 'Cross-Chain Bridge',
    status: 'scheduled' as AuditStatus,
    progress: 0,
    startDate: addDays(2),
    estimatedCompletionDate: addDays(17),
    issuesFound: 0,
    auditFirm: 'Crypto Defense Labs',
    contractType: 'Protocol Security'
  },
  {
    id: 4,
    projectName: 'Token Exchange',
    status: 'completed' as AuditStatus,
    progress: 100,
    startDate: subtractDays(30),
    endDate: subtractDays(5),
    issuesFound: 2,
    auditFirm: 'Secure Chain Auditors',
    contractType: 'Smart Contract'
  },
  {
    id: 5,
    projectName: 'DAO Governance System',
    status: 'issues-found' as AuditStatus,
    progress: 62,
    startDate: subtractDays(12),
    estimatedCompletionDate: addDays(5),
    issuesFound: 7,
    auditFirm: 'Audit Shield',
    contractType: 'Infrastructure'
  }
];

// Mock bounty data
export const mockBounties = [
  {
    id: 1,
    projectName: 'Universal DeFi Protocol',
    status: 'open' as BountyStatus,
    bountyAmount: 50000,
    submissionsCount: 7,
    validatedCount: 2,
    daysRemaining: 14,
    isHighPriority: true,
    totalSubmissionTarget: 20,
    vulnerabilityType: 'Smart Contract'
  },
  {
    id: 2,
    projectName: 'Cross-Chain Bridge',
    status: 'active' as BountyStatus,
    bountyAmount: 25000,
    submissionsCount: 12,
    validatedCount: 6,
    daysRemaining: 8,
    isHighPriority: false,
    totalSubmissionTarget: 15,
    vulnerabilityType: 'Protocol'
  },
  {
    id: 3,
    projectName: 'Decentralized Exchange',
    status: 'review' as BountyStatus,
    bountyAmount: 15000,
    submissionsCount: 18,
    validatedCount: 9,
    daysRemaining: 4,
    isHighPriority: false,
    totalSubmissionTarget: 20,
    vulnerabilityType: 'Frontend'
  },
  {
    id: 4,
    projectName: 'NFT Gaming Platform',
    status: 'paid' as BountyStatus,
    bountyAmount: 35000,
    submissionsCount: 25,
    validatedCount: 12,
    daysRemaining: 0,
    isHighPriority: false,
    totalSubmissionTarget: 25,
    vulnerabilityType: 'Smart Contract'
  },
  {
    id: 5,
    projectName: 'Yield Optimizer',
    status: 'closed' as BountyStatus,
    bountyAmount: 10000,
    submissionsCount: 5,
    validatedCount: 2,
    daysRemaining: 0,
    isHighPriority: false,
    totalSubmissionTarget: 10,
    vulnerabilityType: 'Smart Contract'
  }
];