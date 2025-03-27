import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileEdit, Check, AlertTriangle, ShieldCheck, Clock, CreditCard } from "lucide-react";

// Form schema with validations
const formSchema = z.object({
  projectName: z.string().min(3, {
    message: "Project name must be at least 3 characters.",
  }),
  projectDescription: z.string().min(50, {
    message: "Please provide a detailed description (at least 50 characters).",
  }),
  projectType: z.enum(["smart-contract", "protocol", "dapp", "other"], {
    required_error: "Please select a project type.",
  }),
  blockchainType: z.array(z.string()).min(1, {
    message: "Please select at least one blockchain.",
  }),
  codeRepository: z.string().url({
    message: "Please enter a valid URL for your code repository.",
  }).optional().or(z.literal("")),
  budget: z.string().min(1, {
    message: "Please provide a budget estimate.",
  }),
  timeframe: z.enum(["urgent", "standard", "flexible"], {
    required_error: "Please select a timeframe.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactName: z.string().min(2, {
    message: "Please enter your name.",
  }),
  termsAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const PostProjectPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
      codeRepository: "",
      budget: "",
      contactEmail: "",
      contactName: "",
      termsAgreed: false,
      blockchainType: [],
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    
    // Here you would typically send the data to the server
    // For now just showing success state
    
    // Reset form after short delay for better UX
    setTimeout(() => {
      form.reset();
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#0d2a4d] mb-4">Post Your Project</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Submit your blockchain project for security auditing or open a bug bounty program. Our 
            verified auditors and contributors will help secure your project.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-emerald-100 rounded-full p-4 mb-4">
                  <Check className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-700 mb-2">Project Submitted!</h2>
                <p className="text-slate-600 text-center mb-6">
                  Thank you for submitting your project. Our team will review your submission and connect with you shortly.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline"
                  className="mt-4"
                >
                  Submit Another Project
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Project Name */}
                    <FormField
                      control={form.control}
                      name="projectName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your project name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Project Type */}
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="smart-contract">Smart Contract</SelectItem>
                              <SelectItem value="protocol">DeFi Protocol</SelectItem>
                              <SelectItem value="dapp">Decentralized Application</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Project Description */}
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your project, its functionality, and your specific security concerns..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Include key details about architecture, technologies, and specific areas of concern.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Blockchain Type */}
                  <FormField
                    control={form.control}
                    name="blockchainType"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>Blockchain Types</FormLabel>
                          <FormDescription>
                            Select all blockchains that your project targets.
                          </FormDescription>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {[
                            "Ethereum", 
                            "Binance Smart Chain", 
                            "Polygon",
                            "Solana", 
                            "Avalanche", 
                            "Near",
                            "Cosmos", 
                            "Polkadot", 
                            "Other"
                          ].map((blockchain) => (
                            <FormField
                              key={blockchain}
                              control={form.control}
                              name="blockchainType"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={blockchain}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(blockchain)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, blockchain])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== blockchain
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {blockchain}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Code Repository */}
                  <FormField
                    control={form.control}
                    name="codeRepository"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Code Repository (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/your-repo" {...field} />
                        </FormControl>
                        <FormDescription>
                          Private repositories can be shared later with assigned auditors.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Budget */}
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Budget</FormLabel>
                          <FormControl>
                            <Input placeholder="Budget range in USD" {...field} />
                          </FormControl>
                          <FormDescription>
                            Approximate range for the audit or bounty.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Timeframe */}
                    <FormField
                      control={form.control}
                      name="timeframe"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Timeframe</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="urgent" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Urgent (1-2 weeks)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="standard" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Standard (2-4 weeks)
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="flexible" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Flexible (4+ weeks)
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Contact Name */}
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Contact Email */}
                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <FormField
                    control={form.control}
                    name="termsAgreed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the <a href="#" className="text-[#032757] underline">terms and conditions</a> and <a href="#" className="text-[#032757] underline">privacy policy</a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Alert className="bg-blue-50 border-blue-200">
                    <AlertTriangle className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-blue-800">Important Note</AlertTitle>
                    <AlertDescription className="text-blue-700">
                      All submissions are reviewed by our team before being made available to auditors. 
                      We may contact you for additional information.
                    </AlertDescription>
                  </Alert>

                  <Button type="submit" className="w-full bg-[#032757]">
                    <FileEdit className="mr-2 h-4 w-4" /> Submit Project
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Post Here? */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
              <h3 className="font-bold text-lg text-[#0d2a4d] mb-4">Why Post Your Project?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Verified Auditors</h4>
                    <p className="text-sm text-slate-600">Access to our network of 500+ verified security professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Faster Turnaround</h4>
                    <p className="text-sm text-slate-600">Get matched with available auditors for quicker response</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Flexible Options</h4>
                    <p className="text-sm text-slate-600">Choose between full audits or bug bounty programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
              <h3 className="font-bold text-lg text-[#0d2a4d] mb-4">Project Posting Process</h3>
              
              <ol className="space-y-4 relative border-l border-slate-200 pl-6 ml-2">
                <li className="mb-6">
                  <div className="absolute w-6 h-6 bg-[#032757] rounded-full -left-3 flex items-center justify-center">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <h4 className="font-medium text-slate-800">Submit Project Details</h4>
                  <p className="text-sm text-slate-600">Fill out the form with all project requirements</p>
                </li>
                
                <li className="mb-6">
                  <div className="absolute w-6 h-6 bg-[#032757] rounded-full -left-3 flex items-center justify-center">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <h4 className="font-medium text-slate-800">Project Review</h4>
                  <p className="text-sm text-slate-600">Our team reviews your submission within 24 hours</p>
                </li>
                
                <li className="mb-6">
                  <div className="absolute w-6 h-6 bg-[#032757] rounded-full -left-3 flex items-center justify-center">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <h4 className="font-medium text-slate-800">Auditor Matching</h4>
                  <p className="text-sm text-slate-600">Get matched with verified auditors based on expertise</p>
                </li>
                
                <li>
                  <div className="absolute w-6 h-6 bg-[#032757] rounded-full -left-3 flex items-center justify-center">
                    <span className="text-white text-xs">4</span>
                  </div>
                  <h4 className="font-medium text-slate-800">Project Launch</h4>
                  <p className="text-sm text-slate-600">Launch your audit or bug bounty program</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProjectPage;
import React from 'react';

const PostProject: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Post Your Project</h1>
      {/* Add content here */}
    </div>
  );
};

export default PostProject;
