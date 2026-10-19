import Reveal from "../../components/Reveal";
import ProjectIndex from "../../components/ProjectIndex";
import GithubRepos from "../../components/GithubRepos";
import { projects } from "../../lib/data";

export const metadata = {
  title: "Projects — Saral Singhal",
  description: "Generative AI, computer vision, machine learning and data engineering projects, plus all public repositories.",
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <Reveal as="header" className="section-head">
        <p className="eyebrow">Projects</p>
        <h1 className="display">Projects</h1>
        <p className="lede" style={{ marginTop: 14 }}>
          End-to-end builds, from raw data to a working model or tool. Each one says what I did, the
          problem, the result, and how the pipeline works. Everything else public is listed further down.
        </p>
      </Reveal>

      <Reveal>
        <ProjectIndex projects={projects} />
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-head">
          <p className="eyebrow">More on GitHub</p>
          <h2 className="display">All public repositories</h2>
          <p className="lede" style={{ marginTop: 12 }}>
            Pulled live from GitHub — newest first.
          </p>
        </div>
        <GithubRepos />
      </Reveal>
    </div>
  );
}
