import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mugen",
  lastName: "Advisory Services",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Asset Management",
  avatar: "/images/nf12.PNG",
  location: "Europe/Brussels", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French","Dutch"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      We occasionally send financial updates and insights on market trends and investment strategies. 
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing our work as a Advisor in ${person.role}`,
  headline: <>Discreet Wealth Management. Exceptional Results.</>,
  subline: (
    <>
     We are <InlineCode>MAS</InlineCode>, an independent financial advisory firm offering discreet, 
    <br /> personalized portfolio management dedicated to achieving exceptional results for every client.
 
      
    </>
  ),
};

const about = {
  label: "About",
  title: "About us",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      <strong>Mugen Advisory Services</strong> is an independent financial advisory firm dedicated to managing and growing our clients’ asset portfolios with precision, discretion, and a deeply personalized approach.
  <br /><br />
  We serve individuals and families seeking long-term financial clarity, offering tailored strategies that adapt to their evolving needs and ambitions.
  <br /><br />
  Our investment philosophy is grounded in trust, long-term value creation, and disciplined risk management. We take the time to understand your goals, then craft clear, strategic solutions to protect and grow your wealth over time.
       The term Mugen  means <strong>infinity</strong>  
       It reflects our commitment to enduring relationships, timeless strategies, and a vision of wealth that extends beyond the present. 
       It symbolizes our belief in financial guidance that is not only intelligent and adaptable, 
       but also infinite in its capacity to support your life’s journey.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Last portfolio",
    experiences: [
      {
        company: "A's Portfolio",
        timeframe: "April 2025 - ...",
        role: "Current Profit 4% ",
        achievements: [
          <>
            Designed and structured a cryptocurrency portfolio framework, maximizing long-term returns through strategic asset composition — consistently outperforming market benchmarks during periods of high volatility.
          </>,
          <>
            Implemented a disciplined risk management strategy that ensured portfolio value remained above breakeven across all market cycles, including major downturns.
          </>,
        ],
        
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "N's Portfolio",
        timeframe: "November 2023 - May 2024",
        role: "Net Profit 30,22% ",
        achievements: [
          <>
            Designed and structured a cryptocurrency portfolio framework, maximizing long-term returns through strategic asset composition — consistently outperforming market benchmarks during periods of high volatility.
          </>,
          <>
            Implemented a disciplined risk management strategy that ensured portfolio value remained above breakeven across all market cycles, including major downturns.
          </>,
        ],
        
        images: [
           
        ],
      },
      {
        company: "V's Portfolio",
        timeframe: "August 2024 -December 2024",
        role: "120% Net Profit",
        achievements: [
          <>
            Developed a comprehensive investment strategy that integrated  alternative assets, resulting in a 120% net profit over 3 months.
          </>,
          <>
            Conducted in-depth market analysis to identify emerging trends, leading to early investments in high-growth sectors and significant capital appreciation .
          </>,
          
        ],
         
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Meet the team",
    skills: [
      {
        title: "Naj",
        description: <>CEO and Founder</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Chatgpt",
        description: <>Best Assistant Ever</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-4.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
