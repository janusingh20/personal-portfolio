import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";

export const Experience = () => {
  const experiences = [
    {
      company: "Zyglio",
      position: "Software Engineer Intern",
      location: "Reston, VA",
      period: "May 2025 - Present",
      description: [
        "Built an AI-powered restaurant training simulation in Python, integrating visual recognition and multilingual voice prompts to replicate real-world workflows. Worked directly with clients to gather requirements, design tailored solutions, present interactive demos, and deploy a scalable AI platform, reducing onboarding time and improving training consistency across locations."
      ],
      technologies: ["Python", "AI/ML", "TensorFlow", "Computer Vision", "NLP", "Agile"],
      isActive: true
    },
    {
      company: "Altius",
      position: "Software Engineer Intern",
      location: "Remote",
      period: "June 2025 - Present",
      description: [
        "Developed a responsive Next.js portal with dedicated student and startup dashboards, real-time internship listings, advanced candidate filtering, and status tracking. Integrated Firebase for secure authentication, automated onboarding/offboarding, and live data synchronization, cutting manual steps by 50% and increasing platform engagement by 30%."
      ],
      technologies: ["Next.js", "React", "Firebase", "TypeScript", "Tailwind CSS", "Real-time Database"],
      isActive: true
    },
    {
      company: "JK Medical Transportation Services LLC",
      position: "Full Stack Developer Intern",
      location: "Manassas, VA",
      period: "June 2024 - August 2024",
      description: [
        "Designed and deployed a full-stack booking platform using React, Node.js/Express, and MongoDB with secure JWT authentication for 200+ user accounts. Improved operational efficiency by automating reservations, increased monthly bookings by 25%, and reduced page load times by 30% through front-end optimization with Tailwind CSS."
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Docker", "AWS EC2"],
      isActive: false
    },
    {
      company: "STEM exCEL",
      position: "STEM Instructor",
      location: "Fairfax, VA",
      period: "December 2023 - June 2024",
      description: [
        "Developed and delivered robotics, game programming, and Python coding curricula for 50+ students. Organized and led 10+ hands-on workshops and camps, fostering collaboration and problem-solving skills, while boosting student engagement by 40% and improving coding fluency and logical reasoning."
      ],
      technologies: ["Python", "Robotics", "Game Development", "Educational Technology", "Curriculum Development"],
      isActive: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">EXPERIENCE</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey building innovative solutions and leading impactful projects
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={`${exp.company}-${exp.position}`} delayMs={140 * index} y={14}>
                <div
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-2 z-10 ${
                      exp.isActive ? "bg-gradient-primary shadow-glow" : "bg-muted border-2 border-border"
                    }`}
                  ></div>

                  {/* Content card */}
                  <Card
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } md:w-96 bg-card border-border hover:shadow-glow transition-smooth hover:scale-105`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg">
                            <p className="text-lg font-semibold text-primary">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        {exp.isActive && (
                          <Badge className="bg-gradient-primary text-primary-foreground">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        {exp.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-sm text-muted-foreground leading-relaxed">
                            • {desc}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
