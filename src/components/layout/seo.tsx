import { useEffect } from "react";
import { updateSEO } from "../../lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export function SEO({ title, description, path, ogImage }: SEOProps) {
  useEffect(() => {
    updateSEO({ title, description, path, ogImage });
  }, [title, description, path, ogImage]);

  return null;
}

