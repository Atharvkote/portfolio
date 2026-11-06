// TechIcon.tsx
import React from "react";
import { TECH_ICONS } from "../lib/tech-icons";

interface Props {
  name: string;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
}

const TechIcon: React.FC<Props> = ({
  name,
  size = 20,
  className = "",
  "aria-hidden": ariaHidden = true,
  "aria-label": ariaLabel,
}) => {
  const tech = TECH_ICONS[name];

  if (!tech) return null;

  const Icon = tech.icon;

  return (
    <Icon
      size={size}
      color={tech.color}
      className={className}
      aria-hidden={ariaHidden ? "true" : undefined}
      aria-label={!ariaHidden ? (ariaLabel || name) : undefined}
    />
  );
};

export default TechIcon;