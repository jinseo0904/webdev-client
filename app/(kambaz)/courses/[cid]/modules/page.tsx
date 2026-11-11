"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "@/app/(kambaz)/store/modulesStore";


export default function Modules() {
  const { cid } = useParams();
  const modules = useModulesStore((state) => state.modules);

  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules">
        {modules.filter((module) => module.course === cid).map((module) => (
          <Module key={module._id} module={module}/>
        ))}
      </ul>
    </div>
  );
}