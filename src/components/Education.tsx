import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  Brain,
  Cpu,
  Code2,
  Smartphone,
  Database,
  Layers,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Reveal from "@/components/Reveal";

/* ────────────────────────────────────────────────────────────────────────── */
/* Types & Constants                                                          */
/* ────────────────────────────────────────────────────────────────────────── */

type Area = "AI" | "Systems" | "Web" | "Mobile" | "Data" | "Software";

const AREA_ICON: Record<Area, any> = {
  AI: Brain,
  Systems: Cpu,
  Web: Code2,
  Mobile: Smartphone,
  Data: Database,
  Software: Layers,
};

const ALL_COURSES: Array<{ name: string; area: Area; blurb: string }> = [
  { name: "Data Structures & Algorithms", area: "Software", blurb: "Time/space trade-offs, trees/graphs, greedy/DP." },
  { name: "Operating Systems", area: "Systems", blurb: "Processes, threads, schedulers, memory/FS, concurrency." },
  { name: "Object Oriented Programming", area: "Software", blurb: "Design principles, patterns, testing, refactors." },
  { name: "Artificial Intelligence", area: "AI", blurb: "Search, heuristics, planning, adversarial agents." },
  { name: "Machine Learning", area: "AI", blurb: "Supervised/unsupervised, metrics, regularization." },
  { name: "Mobile Application Development", area: "Mobile", blurb: "Android, realtime sync, auth, state mgmt." },
  { name: "Database Systems", area: "Data", blurb: "ER modeling, SQL, transactions, indexing." },
  { name: "Software Engineering", area: "Software", blurb: "Agile, code reviews, CI/CD, testing strategy." },
  { name: "Computer Networks", area: "Systems", blurb: "TCP/IP, routing, HTTP, latency/throughput." },
  { name: "Web Development", area: "Web", blurb: "React/Next.js, API design, accessibility, performance." },
];

/* ────────────────────────────────────────────────────────────────────────── */
/* Component                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

export const Education = () => {
  const education = {
    institution: "George Mason University",
    degree: "B.S. in Computer Science",
    college: "College of Engineering and Computing",
    location: "Fairfax, VA",
    period: "August 2022 - December 2025",
    status: "In Progress",
  };

  const AREAS: Array<{ key: Area | "All"; label: string }> = useMemo(
    () => [
      { key: "All", label: "All" },
      { key: "AI", label: "AI/ML" },
      { key: "Systems", label: "Systems" },
      { key: "Web", label: "Web" },
      { key: "Mobile", label: "Mobile" },
      { key: "Data", label: "Data" },
      { key: "Software", label: "Software Eng" },
    ],
    []
  );

  const [activeArea, setActiveArea] = useState<Area | "All">("All");
  const filtered = activeArea === "All" ? ALL_COURSES : ALL_COURSES.filter((c) => c.area === activeArea);

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">EDUCATION</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* ── Degree Card (Upgraded, no CTAs) ────────────────────────────── */}
          <Reveal y={10}>
            <div className="relative">
              {/* soft outer glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-0.5 rounded-2xl
                           bg-[linear-gradient(135deg,rgba(167,139,250,.25),rgba(129,140,248,.15),rgba(56,189,248,.12))]
                           blur-md"
              />
              <Card className="relative rounded-2xl bg-card/95 backdrop-blur border border-border shadow-card hover:shadow-glow transition-smooth">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-5">
                      {/* icon puck */}
                      <div className="h-20 w-20 rounded-full grid place-items-center border border-primary/25 bg-background">
                        <GraduationCap className="h-9 w-9 text-primary" />
                      </div>

                      <div>
                        <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                          {education.degree}
                        </CardTitle>

                        <a
                          href="https://www.gmu.edu/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-lg font-semibold text-primary hover:underline"
                        >
                          {education.institution}
                        </a>

                        <p className="text-muted-foreground">{education.college}</p>
                      </div>
                    </div>

                    {/* Status chip */}
                    <Badge className="shrink-0 bg-secondary/60 text-foreground rounded-full px-3 py-1">
                      {education.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* meta row */}
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>

                  {/* focus areas */}
                 
                </CardContent>
              </Card>
            </div>
          </Reveal>

          {/* ── Coursework (Interactive) ───────────────────────────────────── */}
          <Reveal y={10} delayMs={120}>
            <Card id="coursework" className="bg-card border-border hover:shadow-glow transition-smooth">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl text-foreground">Relevant Coursework</CardTitle>
                  </div>

                  {/* Filters (desktop) */}
                  <div className="hidden md:flex items-center gap-2">
                    {AREAS.map((a) => (
                      <Button
                        key={a.key}
                        size="sm"
                        variant={activeArea === a.key ? "default" : "outline"}
                        onClick={() => setActiveArea(a.key as any)}
                        className={
                          activeArea === a.key
                            ? "bg-gradient-primary text-primary-foreground"
                            : "border-primary/30 hover:border-primary/60"
                        }
                      >
                        {a.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Filters (mobile) */}
                <div className="mt-3 md:hidden flex flex-wrap gap-2">
                  {AREAS.map((a) => (
                    <Button
                      key={a.key}
                      size="sm"
                      variant={activeArea === a.key ? "default" : "outline"}
                      onClick={() => setActiveArea(a.key as any)}
                      className={
                        activeArea === a.key
                          ? "bg-gradient-primary text-primary-foreground"
                          : "border-primary/30 hover:border-primary/60"
                      }
                    >
                      {a.label}
                    </Button>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filtered.map((course, index) => {
                    const Icon = AREA_ICON[course.area];
                    return (
                      <Reveal key={course.name} delayMs={70 * index} y={8}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className="group cursor-default rounded-xl border border-border/70 bg-secondary/30 px-4 py-3
                                         hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent
                                         transition-smooth flex items-center justify-between"
                              role="listitem"
                            >
                              <div className="flex items-center gap-3">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20">
                                  <Icon className="h-4 w-4 text-primary" />
                                </span>
                                <span className="text-foreground font-medium">{course.name}</span>
                              </div>
                              <Badge variant="outline" className="text-xs border-border group-hover:border-primary/50">
                                {course.area}
                              </Badge>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs text-center">
                            <p className="text-sm">{course.blurb}</p>
                          </TooltipContent>
                        </Tooltip>
                      </Reveal>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
