import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeading from '@/components/shared/section-heading';
import { Users, MessageSquare, Calendar, BookOpen, GraduationCap, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

const Community: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent successfully.",
        variant: "default",
      });
      setName('');
      setEmail('');
      setMessage('');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate({ name, email, message });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Web3 Security Community
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8">
                Connect with security experts, developers, and Web3 enthusiasts. Share knowledge, collaborate on projects, and stay updated on the latest security practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary-600 hover:bg-white/90" size="lg">
                  Join Community
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  View Resources
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-96 h-80 bg-white/10 rounded-lg flex items-center justify-center">
                <Users className="w-40 h-40 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Community Features"
            title="Connect, Learn, and Contribute"
            description="Our community offers multiple ways to engage with fellow security professionals and Web3 enthusiasts."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <MessageSquare className="h-12 w-12 text-primary-600" />,
                title: "Discussion Forums",
                description: "Engage in discussions about Web3 security topics, share insights, and get help with security challenges.",
                link: "#forums"
              },
              {
                icon: <Calendar className="h-12 w-12 text-primary-600" />,
                title: "Events & Webinars",
                description: "Participate in regular online events, security workshops, and webinars led by industry experts.",
                link: "#events"
              },
              {
                icon: <Users className="h-12 w-12 text-primary-600" />,
                title: "Community Projects",
                description: "Collaborate on open-source security tools, research initiatives, and community-driven resources.",
                link: "#projects"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-primary-600" />,
                title: "Knowledge Base",
                description: "Access our extensive collection of security guides, best practices, and educational resources.",
                link: "#knowledge"
              },
              {
                icon: <GraduationCap className="h-12 w-12 text-primary-600" />,
                title: "Learning Paths",
                description: "Follow structured learning paths to develop your Web3 security skills from beginner to expert.",
                link: "#learning"
              },
              {
                icon: <LinkIcon className="h-12 w-12 text-primary-600" />,
                title: "Networking",
                description: "Connect with peers, mentors, and potential employers in the Web3 security space.",
                link: "#networking"
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-600">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={feature.link}>
                    <Button variant="link" className="p-0 text-primary-600 hover:text-primary-700">
                      Learn more
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-dark-700">Upcoming Community Events</h2>
              <p className="text-lg text-gray-600">Join these upcoming events to learn from experts and connect with peers</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Smart Contract Security Masterclass",
                  date: "June 15, 2023",
                  time: "11:00 AM - 1:00 PM UTC",
                  type: "Webinar",
                  speaker: "Alex Johnson, Senior Security Auditor"
                },
                {
                  title: "Bug Bounty Hunting Workshop",
                  date: "June 22, 2023",
                  time: "3:00 PM - 5:00 PM UTC",
                  type: "Interactive Workshop",
                  speaker: "Sarah Martinez, Lead Security Researcher"
                },
                {
                  title: "Web3 Security: Trends and Challenges",
                  date: "July 5, 2023",
                  time: "2:00 PM - 3:30 PM UTC",
                  type: "Panel Discussion",
                  speaker: "Various Industry Experts"
                }
              ].map((event, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2 text-dark-600">{event.title}</h3>
                      <p className="text-gray-500 mb-3">{event.speaker}</p>
                      <p className="text-gray-600 mb-4">
                        {event.type}: An in-depth session covering essential concepts, practical techniques, and interactive Q&A.
                      </p>
                      <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                        Register Now
                      </Button>
                    </div>
                    <div className="md:w-1/3 bg-light-500 rounded-lg p-4 flex flex-col justify-center">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-dark-600">{event.date}</p>
                        <p className="text-primary-600">{event.time}</p>
                        <p className="mt-2 text-sm text-gray-500">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          Add to calendar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-dark-700">Recent Community Discussions</h2>
              <p className="text-lg text-gray-600">Join the conversation in our active community forums</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Best Practices for Auditing Cross-Chain Bridges",
                  category: "Smart Contract Security",
                  replies: 24,
                  views: 342,
                  lastActive: "2 hours ago"
                },
                {
                  title: "How to effectively disclose vulnerabilities in DeFi protocols?",
                  category: "Bug Bounty",
                  replies: 17,
                  views: 203,
                  lastActive: "6 hours ago"
                },
                {
                  title: "Understanding re-entrancy vulnerabilities in the latest Solidity version",
                  category: "Technical Discussion",
                  replies: 31,
                  views: 456,
                  lastActive: "1 day ago"
                },
                {
                  title: "Security considerations for implementing upgradeable contracts",
                  category: "Smart Contract Security",
                  replies: 19,
                  views: 287,
                  lastActive: "2 days ago"
                }
              ].map((thread, index) => (
                <div key={index} className="border border-gray-200 rounded-lg hover:shadow-sm transition-all">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-dark-600 mb-1 hover:text-primary-600 transition-colors">
                          <Link href="#thread">{thread.title}</Link>
                        </h3>
                        <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full mb-2">
                          {thread.category}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 text-right">
                        <p>{thread.replies} replies</p>
                        <p>{thread.views} views</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 mr-2">
                          U
                        </div>
                        <span className="text-sm text-gray-600">Username</span>
                      </div>
                      <span className="text-xs text-gray-500">Last active: {thread.lastActive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Visit Community Forum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-dark-700">Get in Touch</h2>
                <p className="text-lg text-gray-600">
                  Have questions about our community? Reach out to us and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-dark-700">Community Guidelines</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-dark-600">Be Respectful</h4>
                  <p className="text-gray-600">
                    Treat all community members with respect and courtesy. We're here to learn and grow together.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-dark-600">Share Knowledge</h4>
                  <p className="text-gray-600">
                    Contribute your expertise and insights to help others. Collaborative learning benefits everyone.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-dark-600">Responsible Disclosure</h4>
                  <p className="text-gray-600">
                    Follow ethical security practices. Never share exploits publicly without following proper disclosure protocols.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-dark-600">Stay On Topic</h4>
                  <p className="text-gray-600">
                    Keep discussions focused on Web3 security and related topics to maintain a productive environment.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4 text-dark-600">Join Our Social Channels</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with over 5,000 Web3 security professionals and enthusiasts. Learn, share, and build a more secure blockchain ecosystem together.
          </p>
          <Button className="bg-white text-primary-600 hover:bg-white/90" size="lg">
            Join VerityChain Community
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Community;
