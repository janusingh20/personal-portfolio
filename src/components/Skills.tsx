import Reveal from "@/components/Reveal";
import {
  Code2,
  Braces,
  Sigma,
  Database as DatabaseIcon,
  Cloud,
  Boxes,
  Smartphone,
  Terminal,
  FileCode2,
  Palette,
  BookOpen,
  FlaskConical,
} from "lucide-react";

/* ---------------------------- Deep eggplant tile ---------------------------- */

function SkillTile({
  label,
  Icon,
}: {
  label: string;
  Icon?: React.ComponentType<any>;
}) {
  const I = Icon ?? Code2;
  return (
    <div
      className="rounded-2xl
                 bg-[#1A1528] text-foreground
                 border border-[#A78BFA1F]
                 shadow-[0_6px_20px_rgba(0,0,0,0.25)]
                 w-28 h-28 flex flex-col items-center justify-center gap-2
                 select-none"
      role="listitem"
      aria-label={label}
    >
      <div className="inline-grid h-9 w-9 place-items-center rounded-lg
                      bg-primary/10 border border-primary/25">
        <I className="h-5 w-5 text-primary" />
      </div>
      <div className="text-[12px] font-medium text-center leading-tight px-2">
        {label}
      </div>
    </div>
  );
}

/* ------------------------------ Skills data ------------------------------- */
/* Single pile (no categories) — exactly the skills you listed.               */

const SKILLS: Array<{ label: string; Icon?: React.ComponentType<any> }> = [
  // Languages
  { label: "Java", Icon: Code2 },
  { label: "Python", Icon: Code2 },
  { label: "C", Icon: Braces },
  { label: "C++", Icon: Braces },
  { label: "JavaScript", Icon: Code2 },
  { label: "Kotlin", Icon: Code2 },
  { label: "PHP", Icon: Code2 },

  // Frameworks / Tools
  { label: "Flask", Icon: FlaskConical },
  { label: "AWS EC2", Icon: Cloud },
  { label: "Angular", Icon: Boxes },
  { label: "React.js", Icon: Boxes },
  { label: "Node.js", Icon: Boxes },
  { label: "Express.js", Icon: Boxes },
  { label: "Next.js", Icon: Boxes },
  { label: "Android SDK", Icon: Smartphone },
  { label: "Flutter", Icon: Smartphone },
  { label: "Firebase Realtime DB", Icon: DatabaseIcon },

  // Databases
  { label: "MongoDB", Icon: DatabaseIcon },
  { label: "SQL", Icon: DatabaseIcon },
  { label: "PostgreSQL", Icon: DatabaseIcon },

  // Other tech
  { label: "HTML", Icon: FileCode2 },
  { label: "CSS", Icon: Palette },
  { label: "Docker", Icon: Cloud },
  { label: "RStudio", Icon: BookOpen },
  { label: "MATLAB", Icon: Sigma },
  { label: "UNIX / LINUX", Icon: Terminal },
];

/* ----------------------------- Pyramid layout ----------------------------- */
/**
 * Builds rows that form a pyramid: few at the top, wider at the base.
 * Adjust:
 *  - PYRAMID_START: tiles in the top row
 *  - PYRAMID_MAX:   max tiles in the base rows (on wide screens)
 */
const PYRAMID_START = 3;
const PYRAMID_MAX = 10;

function makePyramid<T>(items: T[], start = PYRAMID_START, max = PYRAMID_MAX): T[][] {
  const rows: T[][] = [];
  let i = 0;
  let count = start;

  while (i < items.length) {
    const next = items.slice(i, i + count);
    rows.push(next);
    i += next.length;
    count = Math.min(count + 1, max);
  }
  return rows;
}

/* -------------------------------- Component -------------------------------- */

export const Skills = () => {
  const rows = makePyramid(SKILLS);

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">MY SKILLS</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills I’m Proficient In
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              
            </p>
          </div>
        </Reveal>

        {/* Pyramid rows */}
        <div role="list" aria-label="Skills (pyramid)">
          {rows.map((row, r) => (
            <Reveal key={r} y={8} delayMs={r * 40}>
              <div className="flex flex-wrap justify-center gap-3 mb-3">
                {row.map((s) => (
                  <SkillTile key={s.label} label={s.label} Icon={s.Icon} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
