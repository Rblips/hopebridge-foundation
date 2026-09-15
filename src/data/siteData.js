export const siteConfig = {
  name: "HopeBridge Foundation",
  tagline: "Creating Opportunities. Building Stronger Communities.",
  subtext: "HopeBridge Foundation works to create meaningful opportunities through education, skill development, and community-focused initiatives.",
  disclaimer: "Demonstration website created for an AI website generation project (InAmigos Foundation Internship). All statistics, phone numbers, and operational details are illustrative.",
  contact: {
    email: "hello@hopebridge.example",
    phone: "+91 00000 00000",
    location: "India (Demonstration Model)",
    hours: "Mon – Fri: 9:00 AM – 6:00 PM IST",
  },
  socials: [
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "X (Twitter)", href: "#", icon: "Twitter" },
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Impact", href: "#impact" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "Volunteer", href: "#volunteer" },
  { name: "Contact", href: "#contact" },
];

export const valuesList = [
  {
    title: "Inclusion",
    description: "Ensuring equal learning opportunities regardless of socio-economic background.",
    icon: "Users",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Empowerment",
    description: "Equipping youth with practical skills and self-reliance to shape their own futures.",
    icon: "Sparkles",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Transparency",
    description: "Maintaining clear accountability in every planned initiative and volunteer engagement.",
    icon: "ShieldCheck",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Community",
    description: "Fostering collective action by bridging volunteers, educators, and local neighborhoods.",
    icon: "HeartHandshake",
    color: "from-rose-500 to-pink-600"
  },
  {
    title: "Sustainability",
    description: "Designing long-lasting, repeatable educational frameworks that scale responsibly.",
    icon: "Leaf",
    color: "from-teal-500 to-emerald-700"
  },
];

export const programsData = [
  {
    id: "education-support",
    category: "Education",
    title: "Education Support",
    shortDesc: "Supporting learners with educational resources, mentoring, and learning opportunities.",
    icon: "BookOpen",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    keyHighlights: [
      "Foundational literacy & numeracy study circles",
      "After-school mentorship by volunteer educators",
      "Curated learning materials & book distribution drives"
    ],
    fullDetails: {
      overview: "Our Education Support initiative is dedicated to bridging learning gaps for children and youth from underserved communities. Through weekend study hubs, peer tutoring, and donated study kits, we foster a supportive space where every child can discover the joy of learning.",
      curriculum: [
        "Interactive math & language learning modules",
        "Weekend homework help and exam preparation clubs",
        "Storytelling & critical thinking reading hours"
      ],
      targetAudience: "School students aged 8-16 in under-resourced local clusters",
      deliveryFormat: "Hybrid — Local community learning circles + weekend volunteer sessions",
      volunteerRole: "Academic mentor, storytelling guide, curriculum organizer"
    }
  },
  {
    id: "digital-skills",
    category: "Technology",
    title: "Digital Skills",
    shortDesc: "Helping young people develop practical digital and technology skills for the modern workplace.",
    icon: "Laptop",
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    keyHighlights: [
      "Basic computer literacy & internet navigation",
      "Productivity tools (Docs, Sheets, Presentations)",
      "Introductory coding, AI basics, and digital safety"
    ],
    fullDetails: {
      overview: "Digital literacy is no longer optional—it is essential for employment and personal empowerment. Our Digital Skills bootcamp offers hands-on computer training in community centers and partner labs to transform digital novices into proficient computer users.",
      curriculum: [
        "Computer essentials and cloud software fundamentals",
        "Spreadsheet data handling and professional email writing",
        "Safe web navigation, online research, and cyber safety basics"
      ],
      targetAudience: "Youth aged 15-24 looking for foundational workplace tech competence",
      deliveryFormat: "Hands-on weekend computer lab workshops with guided projects",
      volunteerRole: "Tech tutor, lab assistant, digital literacy instructor"
    }
  },
  {
    id: "career-readiness",
    category: "Professional Growth",
    title: "Career Readiness",
    shortDesc: "Providing guidance around communication, professional skills, resumes, interviews, and career preparation.",
    icon: "Briefcase",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    keyHighlights: [
      "Resume building & personal branding workshops",
      "Mock interviews & spoken English practice",
      "Industry mentor 1-on-1 guidance sessions"
    ],
    fullDetails: {
      overview: "Bridging the jump between education and the workplace requires confidence and professional readiness. This program connects college students and first-time job seekers with working professionals who provide actionable feedback and industry insights.",
      curriculum: [
        "Actionable resume & LinkedIn profile formulation",
        "Effective workplace communication & presentation skills",
        "Simulated mock interviews with personalized feedback rubrics"
      ],
      targetAudience: "First-generation college students and vocational trainees entering the workforce",
      deliveryFormat: "Interactive masterclasses and 1-on-1 virtual mentoring pairs",
      volunteerRole: "Mock interviewer, resume reviewer, industry guest speaker"
    }
  },
  {
    id: "community-development",
    category: "Welfare & Action",
    title: "Community Development",
    shortDesc: "Supporting community-focused initiatives designed to encourage participation, awareness, and long-term development.",
    icon: "Users",
    gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    keyHighlights: [
      "Health, hygiene, and environmental awareness drives",
      "Neighborhood cleanups and tree plantation activities",
      "Parent engagement workshops for youth education"
    ],
    fullDetails: {
      overview: "Sustainable social progress takes root when local communities take ownership. Our Community Development wing mobilizes residents, youth leaders, and volunteers to collaborate on community wellness and awareness drives.",
      curriculum: [
        "Community stakeholder forums and grievance mapping",
        "Health, clean water, and sanitation awareness campaigns",
        "Youth leadership circles for neighborhood problem-solving"
      ],
      targetAudience: "Local families, community leaders, and neighborhood youth groups",
      deliveryFormat: "Grassroots weekend community campaigns and active field drives",
      volunteerRole: "Field coordinator, outreach advocate, event organizer"
    }
  }
];

export const impactMetrics = [
  {
    id: "learners",
    target: "1,000+",
    label: "Learners Targeted",
    description: "Across foundational education and academic support circles.",
    progress: 75,
    icon: "GraduationCap",
    color: "emerald"
  },
  {
    id: "workshops",
    target: "100+",
    label: "Skill Workshops Planned",
    description: "Covering digital tools, communication, and workplace skills.",
    progress: 60,
    icon: "Presentation",
    color: "blue"
  },
  {
    id: "initiatives",
    target: "50+",
    label: "Community Initiatives Targeted",
    description: "Grassroots awareness drives and community enrichment activities.",
    progress: 80,
    icon: "Compass",
    color: "amber"
  },
  {
    id: "hours",
    target: "500+",
    label: "Volunteer Hours Targeted",
    description: "Dedicated to 1-on-1 mentoring, teaching, and event management.",
    progress: 68,
    icon: "Clock",
    color: "teal"
  }
];

export const howWeWorkSteps = [
  {
    number: "01",
    title: "Identify Needs",
    description: "Understand challenges within communities through direct interaction, surveys, and grassroots listening sessions.",
    icon: "Search",
    highlight: "Community Assessment & Listening"
  },
  {
    number: "02",
    title: "Build Programs",
    description: "Design practical initiatives around education, skills, and opportunity with structured learning roadmaps.",
    icon: "LayoutGrid",
    highlight: "Curriculum & Program Design"
  },
  {
    number: "03",
    title: "Engage People",
    description: "Work with passionate volunteers, industry mentors, and community members to bring programs to life.",
    icon: "UserCheck",
    highlight: "Volunteer & Mentor Mobilization"
  },
  {
    number: "04",
    title: "Measure Progress",
    description: "Track outcomes, gather learner feedback, and improve programs continuously for sustained positive change.",
    icon: "TrendingUp",
    highlight: "Continuous Review & Scaling"
  }
];

export const faqs = [
  {
    question: "Is HopeBridge Foundation a real registered charity?",
    answer: "HopeBridge Foundation is a fictional nonprofit organization created specifically for the InAmigos Foundation Internship Task 3 (AI Website Generation). It serves as a proof-of-concept demonstrating how modern AI tools and frontend technologies can produce production-quality social impact web applications."
  },
  {
    question: "How can someone get involved as a volunteer?",
    answer: "You can submit the volunteer form on this website with your preferred area of interest (Education, Digital Skills, Career Mentoring, Community Development, or Event Support). In an active organizational setup, team coordinators would match your profile with relevant upcoming initiatives."
  },
  {
    question: "Are the impact numbers verified real-world metrics?",
    answer: "No, all figures presented in the Impact section are clearly designated as 'Illustrative Goals' representing targeted benchmarks for demonstration purposes."
  },
  {
    question: "What skills are needed to volunteer in digital or career programs?",
    answer: "Basic computer familiarity, proficiency with tools like spreadsheets or word processors, or experience in resume writing and interview coaching are all highly valuable."
  }
];
