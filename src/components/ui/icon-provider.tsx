import React from "react";
import { getTechIcon, TECH_ICONS } from "../../lib/tech-icons";
import { Code2 } from "lucide-react";

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
  const tech = getTechIcon(name) || TECH_ICONS[name];

  if (!tech) {
    return (
      <Code2
        size={size}
        color="#01d8b4"
        className={className}
        aria-hidden={ariaHidden ? "true" : undefined}
        aria-label={!ariaHidden ? ariaLabel || name : undefined}
      />
    );
  }

  const Icon = tech.icon;

  return (
    <Icon
      size={size}
      color={tech.color}
      className={className}
      aria-hidden={ariaHidden ? "true" : undefined}
      aria-label={!ariaHidden ? ariaLabel || name : undefined}
    />
  );
};

export default TechIcon;