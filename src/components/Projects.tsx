import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

export const Projects = () => {
  const projects = [
    {
      title: "AI Bill Explainer",
      description: "Built a Flask application using Cohere's LLM to parse utility bills into one-sentence summaries, actionable cost-saving tips, and detailed spend breakdowns under 5 seconds.",
      technologies: ["Python", "Flask", "Cohere API", "SQLAlchemy", "Tailwind CSS", "Docker", "AWS EC2"],
      githubUrl: "https://github.com/janusingh20/ai-bill-explainer.git",
      liveUrl: null,
      date: "June 2025",
      category: "AI/ML",
      features: [
        "LLM-powered bill parsing",
        "One-sentence summaries",
        "Cost-saving recommendations",
        "5-second processing time",
        "Containerized deployment"
      ]
    },
    {
      title: "AI/ML Image Captioning Pipeline",
      description: "Developed an end-to-end TensorFlow (Keras) pipeline with InceptionV3 and LSTM to auto-generate image captions, improving metadata accuracy by 45%.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV"],
      githubUrl: "https://github.com/janusingh20/image-captioning.git",
      liveUrl: null,
      date: "June 2025",
      category: "AI/ML",
      features: [
        "InceptionV3 feature extraction",
        "LSTM sequence generation",
        "45% accuracy improvement",
        "End-to-end pipeline",
        "Automated captioning"
      ]
    },
    {
      title: "Two-Player Matching Game",
      description: "Built a turn-based, real-time two-player card-matching app using Firebase Realtime Database for instant state syncing.",
      technologies: ["Java", "XML", "Firebase Realtime Database", "Android Studio"],
      githubUrl: "https://github.com/janusingh20/two-player-matching-game.git",
      liveUrl: null,
      date: "May 2025",
      category: "Mobile",
      features: [
        "Real-time multiplayer",
        "Firebase synchronization",
        "Turn-based gameplay",
        "Instant state updates",
        "Native Android app"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">PROJECTS</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of innovative solutions and technical achievements
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={120 * index}>
              <Card className="bg-card border-border hover:shadow-glow transition-smooth hover:scale-105 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-secondary/50 text-foreground">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 py-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border hover:border-primary/50 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 hover:bg-primary/10 hover:border-primary/50 transition-smooth"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="bg-transparent border-primary/50 hover:bg-gradient-primary hover:border-transparent hover:shadow-glow transition-smooth px-8 py-3"
              asChild
            >
              <a href="https://github.com/janusingh20" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
