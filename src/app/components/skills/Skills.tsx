import ProgrammingLanguages from "./ProgrammingLanguages";
import BackendSkills from "./BackendSkills";
import FrontendSkills from "./FrontendSkills";
import DevOpsSkills from "./DevOpsSkills";
import PracticesSkills from "./PracticeSkills";

export default function Skills() {
  return (
    <div className="space-y-16">
      <ProgrammingLanguages fromLeft={true} />
      <FrontendSkills fromLeft={false} />
      <BackendSkills fromLeft={true} />
      <DevOpsSkills fromLeft={false} />
      <PracticesSkills fromLeft={true} />
    </div>
  );
}
