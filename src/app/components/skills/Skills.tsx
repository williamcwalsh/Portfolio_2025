import BackendSkills from "./BackendSkills";
import FrontendSkills from "./FrontendSkills";
import DevOpsSkills from "./DevOpsSkills";
import PracticesSkills from "./PracticeSkills";
import ToolsSkills from "./ToolsSkills";

export default function Skills() {
    return (
        <div className="space-y-16">
            <BackendSkills fromLeft={true} />
            <FrontendSkills fromLeft={false} />
            <DevOpsSkills fromLeft={true} />
            <PracticesSkills fromLeft={false} />
            <ToolsSkills fromLeft={true} />
        </div>
    );
}
