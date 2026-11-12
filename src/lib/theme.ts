export interface ColorTheme {
  id: string;
  name: string;
  label: string;
  primary: string;
  light: string;
  dark: string;
  dim: string;
  glow: string;
  border: string;
  borderHover: string;
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: "emerald",
    name: "Teal",
    label: "Cyber Teal",
    primary: "#01d8b4",
    light: "#00F0C0",
    dark: "#00a88c",
    dim: "#003D35",
    glow: "rgba(1, 216, 180, 0.28)",
    border: "rgba(1, 216, 180, 0.2)",
    borderHover: "rgba(1, 216, 180, 0.4)",
  },
  {
    id: "purple",
    name: "Purple",
    label: "Classic Violet",
    primary: "#a78bfa",
    light: "#c4b5fd",
    dark: "#7c3aed",
    dim: "#6d28d9",
    glow: "rgba(167, 139, 250, 0.25)",
    border: "rgba(167, 139, 250, 0.12)",
    borderHover: "rgba(167, 139, 250, 0.3)",
  },
  {
    id: "indigo",
    name: "Indigo",
    label: "Electric Indigo",
    primary: "#818cf8",
    light: "#a5b4fc",
    dark: "#4f46e5",
    dim: "#4338ca",
    glow: "rgba(129, 140, 248, 0.25)",
    border: "rgba(129, 140, 248, 0.12)",
    borderHover: "rgba(129, 140, 248, 0.3)",
  },
  {
    id: "blue",
    name: "Cobalt",
    label: "Electric Blue",
    primary: "#3b82f6",
    light: "#93c5fd",
    dark: "#1d4ed8",
    dim: "#1e40af",
    glow: "rgba(59, 130, 246, 0.25)",
    border: "rgba(59, 130, 246, 0.12)",
    borderHover: "rgba(59, 130, 246, 0.3)",
  },
  {
    id: "cyan",
    name: "Cyan",
    label: "Cyber Sky",
    primary: "#06b6d4",
    light: "#67e8f9",
    dark: "#0891b2",
    dim: "#0e7490",
    glow: "rgba(6, 182, 212, 0.25)",
    border: "rgba(6, 182, 212, 0.12)",
    borderHover: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: "teal",
    name: "Teal",
    label: "Mint Teal",
    primary: "#14b8a6",
    light: "#5eead4",
    dark: "#0d9488",
    dim: "#115e59",
    glow: "rgba(20, 184, 166, 0.25)",
    border: "rgba(20, 184, 166, 0.12)",
    borderHover: "rgba(20, 184, 166, 0.3)",
  },
  {
    id: "olive",
    name: "Olive",
    label: "Lime Olive",
    primary: "#84cc16",
    light: "#bef264",
    dark: "#65a30d",
    dim: "#4d7c0f",
    glow: "rgba(132, 204, 22, 0.25)",
    border: "rgba(132, 204, 22, 0.12)",
    borderHover: "rgba(132, 204, 22, 0.3)",
  },
  {
    id: "amber",
    name: "Amber",
    label: "Luxury Gold",
    primary: "#f59e0b",
    light: "#fcd34d",
    dark: "#d97706",
    dim: "#b45309",
    glow: "rgba(245, 158, 11, 0.25)",
    border: "rgba(245, 158, 11, 0.12)",
    borderHover: "rgba(245, 158, 11, 0.3)",
  },
  {
    id: "orange",
    name: "Orange",
    label: "Sunset Tangerine",
    primary: "#f97316",
    light: "#fdba74",
    dark: "#ea580c",
    dim: "#c2410c",
    glow: "rgba(249, 115, 22, 0.25)",
    border: "rgba(249, 115, 22, 0.12)",
    borderHover: "rgba(249, 115, 22, 0.3)",
  },
  {
    id: "red",
    name: "Crimson",
    label: "Crimson Red",
    primary: "#ef4444",
    light: "#fca5a5",
    dark: "#dc2626",
    dim: "#b91c1c",
    glow: "rgba(239, 68, 68, 0.25)",
    border: "rgba(239, 68, 68, 0.12)",
    borderHover: "rgba(239, 68, 68, 0.3)",
  },
  {
    id: "maroon",
    name: "Maroon",
    label: "Velvet Wine",
    primary: "#e11d48",
    light: "#fda4af",
    dark: "#be123c",
    dim: "#9f1239",
    glow: "rgba(225, 29, 72, 0.25)",
    border: "rgba(225, 29, 72, 0.12)",
    borderHover: "rgba(225, 29, 72, 0.3)",
  },
  {
    id: "rose",
    name: "Rose",
    label: "Neon Fuchsia",
    primary: "#ec4899",
    light: "#f472b6",
    dark: "#db2777",
    dim: "#be185d",
    glow: "rgba(236, 72, 153, 0.25)",
    border: "rgba(236, 72, 153, 0.12)",
    borderHover: "rgba(236, 72, 153, 0.3)",
  },
];

const THEME_STORAGE_KEY = "portfolio-accent-color";

export function getSavedColorTheme(): string {
  if (typeof window === "undefined") return "emerald";
  try {
    localStorage.setItem(THEME_STORAGE_KEY, "emerald");
    return "emerald";
  } catch {
    return "emerald";
  }
}

export function applyColorTheme(themeId: string): ColorTheme {
  const theme = COLOR_THEMES.find((t) => t.id === themeId) || COLOR_THEMES[0];
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.setAttribute("data-color", theme.id);

    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-light", theme.light);
    root.style.setProperty("--color-primary-dark", theme.dark);
    root.style.setProperty("--color-primary-dim", theme.dim);
    root.style.setProperty("--color-primary-glow", theme.glow);
    root.style.setProperty("--color-border", theme.border);
    root.style.setProperty("--color-border-hover", theme.borderHover);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme.id);
    } catch {
    }
  }
  return theme;
}

