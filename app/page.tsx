import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Star,
  Search,
  Download,
  Check,
  X,
  ChevronRight,
  Gamepad2,
  Zap,
  Crown,
  Users,
  Code,
  Stethoscope,
  Briefcase,
  MessageSquare,
  Mail,
  FileText,
  Triangle,
  Shield,
  Heart,
  Linkedin,
  Twitter,
} from "lucide-react"
import { SplineSceneBasic } from "@/components/ui/splite"
import { CardSpotlightDemo } from "@/components/ui/card-spotlight"

export default function AugusLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-semibold">Augus</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-300 hover:text-white">
              Solutions
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              AI Agents
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Playstore
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Integrations
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </nav>
      <div className="my-8 px-6">
        <SplineSceneBasic />
      </div>
      <div className="flex justify-center my-8 px-6">
        <CardSpotlightDemo />
      </div>

      {/* 6 Key Differentiators */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30">⭐ Why Choose Augus</Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">6 Key Differentiators</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We didn't just build another AI tool. We built the future of professional work assistance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-blue-100 border-blue-200 text-gray-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-auto -mt-16 mb-8">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Role-Specific Intelligence</h3>
                <p className="text-black mb-6">
                  AI agents trained specifically for your profession, understanding your unique challenges and
                  workflows.
                </p>
                <div className="h-1 bg-blue-300 rounded"></div>
              </CardContent>
            </Card>

            <Card className="bg-pink-100 border-pink-200 text-gray-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-auto -mt-16 mb-8">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Seamless Integrations</h3>
                <p className="text-black mb-6">
                  Connect with 20+ tools you already use. From Slack to GitHub to your CRM.
                </p>
                <div className="h-1 bg-pink-300 rounded"></div>
              </CardContent>
            </Card>

            <Card className="bg-green-100 border-green-200 text-gray-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-auto -mt-16 mb-8">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Built by & for Professionals</h3>
                <p className="text-black mb-6">
                  Created by industry experts who understand the real challenges you face daily.
                </p>
                <div className="h-1 bg-green-300 rounded"></div>
              </CardContent>
            </Card>

            <Card className="bg-orange-100 border-orange-200 text-gray-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-auto -mt-16 mb-8">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Machine Playbook</h3>
                <p className="text-black mb-6">
                  Pre-built workflows and templates that work out of the box for your specific role.
                </p>
                <div className="h-1 bg-orange-300 rounded"></div>
              </CardContent>
            </Card>

            <Card className="bg-purple-100 border-purple-200 text-gray-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-auto -mt-16 mb-8">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Knowledge Access</h3>
                <p className="text-black mb-6">
                  Instant access to industry-specific knowledge, regulations, and best practices.
                </p>
                <div className="h-1 bg-purple-300 rounded"></div>
              </CardContent>
            </Card>

            <Card className="bg-red-100 border-red-200 text-gray-800">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-auto -mt-16 mb-8">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Fast, Secure, Compliant</h3>
                <p className="text-black mb-6">
                  Enterprise-grade security with SOC 2 compliance and GDPR adherence.
                </p>
                <div className="h-1 bg-red-300 rounded"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Agents Tailored Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Agents Tailored to <span className="text-blue-400">Your Profession</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Agents that work like they're on your team—from day one. Choose your role below to discover how Augus makes
            your daily work easier.
          </p>

          {/* Role Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Executive",
              "Developer",
              "HR Manager",
              "Freelancer",
              "Content Creator",
              "Startup Founder",
              "Investors",
              "Lawyers",
              "Police",
            ].map((role, index) => (
              <Button
                key={role}
                variant={role === "Police" ? "default" : "outline"}
                className={role === "Police" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-600 text-black"}
              >
                {role}
              </Button>
            ))}
          </div>

          {/* Police Agents Example */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-8">AI Agents for Police</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-white">Medical Research Assistant</h4>
                    <Badge className="bg-blue-600">AI Agent</Badge>
                  </div>
                  <p className="text-gray-400 mb-6">Summarizes latest papers and clinical studies</p>

                  <div className="text-left space-y-2 mb-6">
                    <h5 className="font-semibold text-sm text-white">KEY FEATURES</h5>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        PubMed integration
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Evidence grading
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Citation tracking
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Try This Agent</Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-white">Patient Query Bot</h4>
                    <Badge className="bg-blue-600">AI Agent</Badge>
                  </div>
                  <p className="text-gray-400 mb-6">Quick access to past cases and treatment options</p>

                  <div className="text-left space-y-2 mb-6">
                    <h5 className="font-semibold text-sm text-white">KEY FEATURES</h5>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Case history search
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Treatment recommendations
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Drug interactions
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Try This Agent</Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-white">Clinical Notes Organizer</h4>
                    <Badge className="bg-blue-600">AI Agent</Badge>
                  </div>
                  <p className="text-gray-400 mb-6">Saves time writing structured notes</p>

                  <div className="text-left space-y-2 mb-6">
                    <h5 className="font-semibold text-sm text-white">KEY FEATURES</h5>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        SOAP format
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        ICD-10 coding
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Voice-to-text
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Try This Agent</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explore Police AI Agents
          </Button>
        </div>
      </section>

      {/* AI Agent Playstore */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              AI Agent <span className="text-purple-400">Playstore</span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Like an app store—but for AI that does your job. Install agents with 1 click. Customize workflows. Get more
            done.
          </p>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search for AI agents..."
                  className="pl-10 bg-slate-800 border-slate-700 text-white"
                />
              </div>
              <Button variant="outline" className="border-gray-600 text-gray-300">
                Advanced Filters
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "All", "Most Popular", "Newest", "Free", "PRO", "Business"
              ].map((filter, index) => (
                <Button
                  key={filter}
                  variant={filter === "All" ? "default" : "outline"}
                  size="sm"
                  className={filter === "All" ? "bg-blue-600 hover:bg-blue-700" : "border-gray-600 text-black"}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Agent Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Legal Research Assistant",
                description: "Find relevant case law and legal precedents instantly",
                rating: 4.9,
                downloads: "2.1k",
                price: "Free",
                tags: ["Research", "Case Law"],
                icon: "⚖️",
              },
              {
                name: "Code Optimizer Pro",
                description: "Automatically optimize code performance and reduce complexity",
                rating: 4.8,
                downloads: "3.5k",
                price: "$9/mo",
                tags: ["Performance", "Optimization"],
                icon: "🚀",
              },
              {
                name: "Lead Gen AI",
                description: "Identify and qualify potential customers from multiple sources",
                rating: 4.7,
                downloads: "1.8k",
                price: "$19/mo",
                tags: ["Sales", "CRM"],
                icon: "🎯",
              },
              {
                name: "Proposal Generator",
                description: "Create winning proposals and contracts in minutes",
                rating: 4.9,
                downloads: "4.2k",
                price: "Free",
                tags: ["Proposals", "Contracts"],
                icon: "📄",
              },
              {
                name: "HR Screener Bot",
                description: "Automate resume screening and candidate evaluation",
                rating: 4.6,
                downloads: "1.2k",
                price: "$15/mo",
                tags: ["HR", "Recruitment"],
                icon: "👥",
              },
              {
                name: "Patient Query Companion",
                description: "Quick access to medical history and treatment options",
                rating: 4.9,
                downloads: "2.8k",
                price: "$25/mo",
                tags: ["Medical", "Patient Care"],
                icon: "🏥",
              },
              {
                name: "Case Summary Assistant",
                description: "Generate comprehensive legal case summaries",
                rating: 4.8,
                downloads: "1.9k",
                price: "$12/mo",
                tags: ["Legal", "Summaries"],
                icon: "📋",
              },
              {
                name: "Content Strategy AI",
                description: "Plan and optimize your content marketing strategy",
                rating: 4.5,
                downloads: "3.1k",
                price: "$8/mo",
                tags: ["Content", "Marketing"],
                icon: "✏️",
              },
            ].map((agent, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-left">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-2xl">{agent.icon}</div>
                    <Badge
                      variant={agent.price === "Free" ? "secondary" : "default"}
                      className={agent.price === "Free" ? "bg-green-600" : "bg-blue-600"}
                    >
                      {agent.price}
                    </Badge>
                  </div>

                  <h3 className="font-semibold mb-2 text-white">{agent.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{agent.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-white">{agent.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      {agent.downloads}
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {agent.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Install Agent</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integrations */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="text-2xl mr-3">🔗</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Seamless <span className="text-blue-400">Integrations</span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Works where you work. From comms to code to compliance—we integrate everywhere you need us.
          </p>

          <Badge className="mb-12 bg-green-600/20 text-green-400 border-green-600/30">20+ Integrations Available</Badge>

          {/* Integration Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Communication */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Communication</h3>
                </div>
                <p className="text-gray-400 mb-6">Connect with your team anywhere</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Slack", status: "connected" },
                    { name: "Microsoft Teams", status: "connected" },
                    { name: "WhatsApp", status: "premium" },
                    { name: "Discord", status: "connected" },
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <span className="text-sm text-white">{integration.name}</span>
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Development */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Development</h3>
                </div>
                <p className="text-gray-400 mb-6">Streamline your coding workflow</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "GitHub", status: "connected" },
                    { name: "VS Code", status: "connected" },
                    { name: "GitLab", status: "connected" },
                    { name: "Jira", status: "connected" },
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <span className="text-sm text-white">{integration.name}</span>
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Productivity */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Productivity</h3>
                </div>
                <p className="text-gray-400 mb-6">Enhance your daily workflow</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Notion", status: "connected" },
                    { name: "Google Docs", status: "connected" },
                    { name: "Asana", status: "connected" },
                    { name: "Trello", status: "connected" },
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <span className="text-sm text-white">{integration.name}</span>
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Communication & Email */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Communication & Email</h3>
                </div>
                <p className="text-gray-400 mb-6">Never miss important messages</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Gmail", status: "connected" },
                    { name: "Outlook", status: "connected" },
                    { name: "Google Calendar", status: "connected" },
                    { name: "Zoom", status: "connected" },
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <span className="text-sm text-white">{integration.name}</span>
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="text-2xl mr-3">💎</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Simple, Transparent <span className="text-blue-400">Pricing</span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            No contracts. No surprises. Just results. Choose the plan that fits your needs.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Free Plan */}
            <Card className="bg-slate-800 border-slate-700 relative">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-6 h-6 text-gray-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <p className="text-gray-400 mb-6">Perfect for trying out Augus</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <div className="space-y-3 mb-8 text-left">
                  {["2 AI agents", "Limited prompts", "1 integration", "Email support", "Basic templates"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ),
                  )}
                </div>

                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">Start Free</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-slate-800 border-blue-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Most Popular</Badge>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <p className="text-gray-400 mb-6">For professionals who want it all</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$19</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Unlimited agents",
                    "Unlimited prompts",
                    "10+ integrations",
                    "Priority support",
                    "Agent customization",
                    "Advanced analytics",
                    "Team collaboration",
                    "Custom workflows",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2">Start 7-Day Free Trial</Button>
                <p className="text-xs text-gray-400">No credit card required</p>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800 border-slate-700 relative">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Crown className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-6">For teams and organizations</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>

                <div className="space-y-3 mb-8 text-left">
                  {[
                    "Everything in Pro",
                    "Dedicated onboarding",
                    "Custom data connectors",
                    "SLA & compliance reports",
                    "Advanced security",
                    "Single sign-on (SSO)",
                    "Custom integrations",
                    "24/7 phone support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex items-center justify-center space-x-3 bg-green-900/20 border border-green-700/30 rounded-lg px-6 py-4 max-w-md mx-auto">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-green-400">30-Day Money Back Guarantee</p>
              <p className="text-sm text-green-300">Not satisfied? Get a full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-slate-700 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-400">
                Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.
              </p>
            </div>

            <div className="border-b border-slate-700 pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards, PayPal, and enterprise invoicing for annual plans.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-400">No setup fees ever. You only pay for your monthly or annual subscription.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>4.9/5 Rating</span>
            </div>
            <span>•</span>
            <span>2,500+ Professionals</span>
            <span>•</span>
            <span>99.9% Uptime</span>
            <span>•</span>
            <span>SOC 2 Certified</span>
          </div>

          <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-600/30">
            ✅ Ready to Transform Your Work?
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to 10x Your Productivity?</h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Augus makes AI work for you—not the other way around. Join thousands of professionals who've already
            transformed their daily workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Zap className="w-4 h-4 mr-2" />
              Get Started Free
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300">
              Book a Demo
            </Button>
          </div>

          <p className="text-gray-400 mb-8">
            Try it now, <strong>no credit card required</strong>
          </p>

          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-1" />
              <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-1" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-1" />
              <span>30-day money back</span>
            </div>
          </div>

          {/* Productivity Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2 min</div>
              <div className="text-gray-400">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-gray-400">Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">AI Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-semibold text-white">Augus</span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-sm">
                Smart AI agents built for your work—not just work in general. Transform your daily workflow with
                profession-specific AI assistance.
              </p>
              {/* <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-gray-600">
                  <Triangle className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div> */}
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white">
                  About
                </Link>
                <Link href="#" className="block hover:text-white">
                  Careers
                </Link>
                <Link href="#" className="block hover:text-white">
                  Blog
                </Link>
                <Link href="#" className="block hover:text-white">
                  Security
                </Link>
                <Link href="#" className="block hover:text-white">
                  Terms
                </Link>
                <Link href="#" className="block hover:text-white">
                  Privacy
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white">
                  Doctors
                </Link>
                <Link href="#" className="block hover:text-white">
                  HR
                </Link>
                <Link href="#" className="block hover:text-white">
                  Developers
                </Link>
                <Link href="#" className="block hover:text-white">
                  Freelancers
                </Link>
                <Link href="#" className="block hover:text-white">
                  Investors
                </Link>
                <Link href="#" className="block hover:text-white">
                  Creators
                </Link>
              </div>
            </div>

            {/* Product & Connect */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <div className="space-y-2 text-gray-400 mb-6">
                <Link href="#" className="block hover:text-white">
                  AI Agents
                </Link>
                <Link href="#" className="block hover:text-white">
                  Integrations
                </Link>
                <Link href="#" className="block hover:text-white">
                  Pricing
                </Link>
                <Link href="#" className="block hover:text-white">
                  Agent Playstore
                </Link>
              </div>

              {/* <h4 className="font-semibold text-white mb-4">Connect</h4> */}
              {/* <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white">
                  Twitter
                </Link>
                <Link href="#" className="block hover:text-white">
                  LinkedIn
                </Link>
                <Link href="#" className="block hover:text-white">
                  Support
                </Link>
                <Link href="#" className="block hover:text-white">
                  Documentation
                </Link>
              </div> */}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Augus. All rights reserved.</p>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-400 text-sm">for professionals</span>
              <span className="text-gray-400">・</span>
              <span className="text-green-400 text-sm">🟢 All systems operational</span>
            </div>
          </div>

          {/* Compliance */}
          {/* <div className="flex justify-center space-x-6 mt-6 text-xs text-gray-500">
            <span>SOC 2 Compliant</span>
            <span>GDPR Compliant</span>
            <span>ISO 27001 Compliant</span>
            <span>CCPA Compliant</span>
          </div> */}

          {/* Built with Lovable */}
          {/* <div className="text-center mt-4">
            <span className="text-xs text-gray-500">
              Built with ❤️{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                Lovable
              </Link>
            </span>
          </div> */}
        </div>
      </footer>
    </div>
  )
}
