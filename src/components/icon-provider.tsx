// TechIcon.tsx
import React from "react";
import { TECH_ICONS } from "../lib/tech-icons";

interface Props {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon: React.FC<Props> = ({
  name,
  size = 20,
  className = "",
}) => {
  const tech = TECH_ICONS[name];

  if (!tech) return null;

  const Icon = tech.icon;

  return <Icon size={size} color={tech.color} className={className} />;
};

export default TechIcon;