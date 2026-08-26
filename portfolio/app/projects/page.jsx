import Reveal from "../../components/Reveal";
import ProjectIndex from "../../components/ProjectIndex";
import { projects } from "../../lib/data";

export const metadata = {
  title: "Projects — Saral Singhal",
  description: "Machine learning and decision-intelligence projects, with source on GitHub.",
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <Reveal as="header" className="section-head">
        <p className="eyebrow">02 — Projects</p>
        <h1 className="display">Projects</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Two builds carried past the notebook stage: one clinical computer-vision system, one
          retention platform. Source is on GitHub; each page carries the metrics that matter.
        </p>
      </Reveal>

      <Reveal>
        <ProjectIndex projects={projects} />
      </Reveal>
    </div>
  );
}
