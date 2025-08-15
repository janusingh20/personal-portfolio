import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Proficient in modern web technologies including React, Next.js, Node.js, and cloud platforms.",
    },
    {
      icon: Lightbulb,
      title: "AI & Machine Learning",
      description:
        "Experience with TensorFlow, Keras, and developing AI-powered applications and solutions.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Strong background in leading workshops, mentoring students, and working in cross-functional teams.",
    },
    {
      icon: Zap,
      title: "Innovation Focused",
      description:
        "Passionate about creating efficient solutions that improve user experience and business outcomes.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-white">ABOUT ME</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <Reveal>
              <p className="text-lg text-white leading-relaxed">
                I build tech that thinks, connects, and scales, fusing AI/ML,
                full-stack development, and cloud innovation to tackle
                real-world challenges.
              </p>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="text-lg text-white leading-relaxed">
                As a Computer Science senior at George Mason University, I’ve
                transformed ideas into high-impact solutions at Altius, Zyglio,
                and JK Medical, from AI-driven training simulators to
                cloud-powered platforms that cut inefficiencies and supercharge
                performance.
              </p>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="text-lg text-white leading-relaxed">
                Driven by a passion for innovation and problem-solving, I thrive
                where bold ideas meet execution, in fast-paced, collaborative
                environments where the products we create don’t just work —
                they make a difference.
              </p>
            </Reveal>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.title} delayMs={120 * i}>
                  <Card className="bg-card border-border hover:shadow-glow transition-smooth hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex p-3 rounded-full border border-primary/20">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-white">
                        {h.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {h.description}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
