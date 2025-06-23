import BackendSkills from "./BackendSkills";
import FrontendSkills from "./FrontendSkills";
import DevOpsSkills from "./DevOpsSkills";
import PracticesSkills from "./PracticeSkills";
import ToolsSkills from "./ToolsSkills";

export default function Skills() {
    return (
        <div className="space-y-10">
            <BackendSkills />
            <FrontendSkills />
            <DevOpsSkills />
            <PracticesSkills />
            <ToolsSkills />
        </div>
    );
}
