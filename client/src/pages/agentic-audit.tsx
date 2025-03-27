import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bot, Search, Code, FileCode, Shield, BrainCircuit, Layers, Braces, AlertTriangle, Terminal, Copy, CheckCheck } from 'lucide-react';

const AgenticAuditPage: React.FC = () => {
  const [codeInput, setCodeInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<null | {
    vulnerabilities: Array<{
      severity: 'critical' | 'high' | 'medium' | 'low';
      title: string;
      description: string;
      line: string;
      recommendation: string;
    }>;
    summary: string;
    score: number;
  }>(null);
  const [selectedTab, setSelectedTab] = useState('code-scan');
  const [copied, setCopied] = useState(false);

  const analyzeCode = () => {
    if (!codeInput.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate an API call delay
    setTimeout(() => {
      // This is mock data - in a real implementation, this would come from the AI audit system
      const mockResults = {
        vulnerabilities: [
          {
            severity: 'critical' as const,
            title: 'Reentrancy Vulnerability',
            description: 'The contract modifies state after external calls, which could allow an attacker to re-enter the contract and drain funds.',
            line: 'function withdraw(uint amount) external {',
            recommendation: 'Follow the checks-effects-interactions pattern: update the state before making external calls.'
          },
          {
            severity: 'high' as const,
            title: 'Unchecked Return Value',
            description: 'The contract does not check the return value of token transfers, which can lead to silent failures.',
            line: 'token.transfer(msg.sender, amount);',
            recommendation: 'Use SafeERC20 library or check return values explicitly.'
          },
          {
            severity: 'medium' as const,
            title: 'Missing Access Control',
            description: 'Some administrative functions lack proper access control mechanisms.',
            line: 'function setFee(uint newFee) public {',
            recommendation: 'Add access modifiers (like onlyOwner) to sensitive functions.'
          }
        ],
        summary: 'The analysis identified multiple security issues of varying severity. The contract contains a critical reentrancy vulnerability that could lead to fund loss, as well as unchecked return values and missing access controls.',
        score: 65
      };
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderSeverityBadge = (severity: string) => {
    const severityMap = {
      'critical': 'bg-red-100 text-red-800 border-red-200',
      'high': 'bg-orange-100 text-orange-800 border-orange-200',
      'medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'low': 'bg-blue-100 text-blue-800 border-blue-200',
    };
    
    return (
      <Badge variant="outline" className={`px-2 border ${severityMap[severity as keyof typeof severityMap]}`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center max-w-3xl mx-auto mb-12">
          <div className="mr-4 bg-gradient-to-r from-[#ff6b35] to-[#ff9d6d] p-3 rounded-xl">
            <BrainCircuit className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#0d2a4d]">Agentic Audit</h1>
            <p className="text-slate-600 mt-1">
              AI-powered blockchain security analysis and vulnerability detection
            </p>
          </div>
        </div>

        <Tabs 
          defaultValue="code-scan" 
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="max-w-5xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="code-scan" className="flex items-center">
              <FileCode className="mr-2 h-4 w-4" /> Code Scanner
            </TabsTrigger>
            <TabsTrigger value="contract-analyzer" className="flex items-center">
              <Braces className="mr-2 h-4 w-4" /> Contract Analyzer
            </TabsTrigger>
            <TabsTrigger value="automated-audit" className="flex items-center">
              <Bot className="mr-2 h-4 w-4" /> Automated Audit
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="code-scan" className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold text-[#0d2a4d] mb-4">Smart Contract Code Scanner</h2>
                <p className="text-slate-600 mb-6">
                  Paste your smart contract code below to identify common vulnerabilities and security issues with our AI-powered code analyzer.
                </p>
                
                <div className="mb-6">
                  <Textarea 
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    placeholder="// Paste your smart contract code here..."
                    className="min-h-[300px] font-mono text-sm"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <Button 
                    onClick={analyzeCode}
                    disabled={isAnalyzing || !codeInput.trim()}
                    className="bg-[#032757]"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="spinner mr-2"></div> Analyzing...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" /> Scan for Vulnerabilities
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setCodeInput('')}
                    disabled={isAnalyzing || !codeInput.trim()}
                  >
                    Clear
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardHeader className="bg-slate-50 rounded-t-lg">
                    <CardTitle>Features</CardTitle>
                    <CardDescription>
                      Our AI code scanner capabilities:
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                          <Shield className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm">Real-time vulnerability detection</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 p-1 rounded-full mr-2 mt-0.5">
                          <Code className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-sm">Support for Solidity, Rust, and other smart contract languages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-100 p-1 rounded-full mr-2 mt-0.5">
                          <Layers className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-sm">Identification of 100+ vulnerability patterns</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 p-1 rounded-full mr-2 mt-0.5">
                          <Bot className="h-4 w-4 text-amber-600" />
                        </div>
                        <span className="text-sm">AI-generated remediation suggestions</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t bg-slate-50">
                    <Alert className="bg-blue-50 border-blue-200">
                      <AlertTriangle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-700 text-sm">
                        This tool provides initial analysis only and should not replace comprehensive security audits.
                      </AlertDescription>
                    </Alert>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            {analysisResults && (
              <div className="mt-10 border rounded-xl overflow-hidden">
                <div className="bg-slate-50 p-4 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-[#0d2a4d]">Analysis Results</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-slate-600">Security Score:</span>
                      <span className={`px-2 py-1 rounded-full text-white text-sm font-medium ${
                        analysisResults.score >= 80 
                          ? 'bg-emerald-500' 
                          : analysisResults.score >= 50 
                            ? 'bg-amber-500' 
                            : 'bg-red-500'
                      }`}>
                        {analysisResults.score}/100
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-[#0d2a4d] mb-2">Summary</h4>
                    <p className="text-slate-600">{analysisResults.summary}</p>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <h4 className="text-lg font-medium text-[#0d2a4d] mb-4">Identified Vulnerabilities</h4>
                  
                  <div className="space-y-6">
                    {analysisResults.vulnerabilities.map((vulnerability, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="p-4 border-b bg-slate-50 flex justify-between items-center">
                          <div className="flex items-center">
                            <h5 className="font-medium text-slate-800">{vulnerability.title}</h5>
                            <div className="ml-3">
                              {renderSeverityBadge(vulnerability.severity)}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-slate-600 mb-4">{vulnerability.description}</p>
                          
                          <div className="bg-slate-100 rounded p-3 mb-4 font-mono text-sm relative group">
                            {vulnerability.line}
                            <button 
                              onClick={() => copyToClipboard(vulnerability.line)}
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white p-1 rounded transition-opacity"
                            >
                              {copied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </button>
                          </div>
                          
                          <div>
                            <h6 className="font-medium text-slate-700 mb-2">Recommendation</h6>
                            <p className="text-slate-600">{vulnerability.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button 
                      variant="outline" 
                      className="mr-3"
                      onClick={() => {
                        setAnalysisResults(null);
                        setCodeInput('');
                      }}
                    >
                      Clear Results
                    </Button>
                    <Button 
                      className="bg-[#032757]"
                      onClick={() => window.print()}
                    >
                      Export Report
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="contract-analyzer" className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
            <div className="text-center py-10">
              <div className="bg-slate-100 rounded-full p-4 inline-block mb-4">
                <Terminal className="h-8 w-8 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#0d2a4d] mb-2">Contract Analyzer</h2>
              <p className="text-slate-600 max-w-lg mx-auto mb-6">
                Our advanced contract analyzer can examine deployed contracts on multiple blockchains to identify potential security issues.
              </p>
              <div className="flex items-center max-w-md mx-auto">
                <Input placeholder="Enter contract address (0x...)" className="mr-2" />
                <Select 
                  defaultValue="ethereum"
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="bsc">Binance Smart Chain</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="avalanche">Avalanche</SelectItem>
                    <SelectItem value="solana">Solana</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="ml-2 bg-[#032757]">
                  <Search className="h-4 w-4 mr-1" /> Analyze
                </Button>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                Coming soon - this feature is currently in beta testing
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="automated-audit" className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
            <div className="text-center py-10">
              <div className="bg-slate-100 rounded-full p-4 inline-block mb-4">
                <Bot className="h-8 w-8 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#0d2a4d] mb-2">Automated Smart Contract Audit</h2>
              <p className="text-slate-600 max-w-lg mx-auto mb-6">
                Our AI-powered automated audit service provides comprehensive security analysis of your smart contracts.
              </p>
              <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90">
                Schedule an Automated Audit
              </Button>
              <p className="text-sm text-slate-500 mt-4">
                Coming soon - this feature is currently in development
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-[#0d2a4d] mb-8 text-center">
            How Our Agentic Audit Tools Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white border-slate-100">
              <CardHeader>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Contract Analysis</CardTitle>
                <CardDescription>
                  Advanced pattern recognition and vulnerability detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our AI examines your smart contract code, identifying common vulnerabilities, logic errors, and security issues using advanced pattern recognition algorithms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-slate-100">
              <CardHeader>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-Powered Remediation</CardTitle>
                <CardDescription>
                  Intelligent recommendations for fixing vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Get specific, actionable recommendations for fixing identified vulnerabilities, with code examples and best practices customized to your specific codebase.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-slate-100">
              <CardHeader>
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Continuous Security Monitoring</CardTitle>
                <CardDescription>
                  Ongoing protection against new vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our system continuously monitors your deployed contracts for new vulnerability patterns and emerging threats in the blockchain security landscape.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-[#032757]/5 rounded-2xl p-8 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#0d2a4d] mb-2">Ready for a comprehensive audit?</h3>
                <p className="text-slate-600 max-w-xl">
                  Our AI tools work best alongside human expertise. Schedule a comprehensive human+AI audit with our verified security experts.
                </p>
              </div>
              <Button 
                className="mt-4 md:mt-0 bg-[#032757]"
                size="lg"
              >
                Request Full Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticAuditPage;