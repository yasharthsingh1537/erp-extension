import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "ERP Redesign",
  version: "0.1.0",
  description: "A redesigned interface for the ERP student portal",
  permissions: ["storage"],
  host_permissions: ["https://erp.psit.ac.in/*"],
  content_scripts: [
    {
      matches: ["https://erp.psit.ac.in/*"],
      js: ["src/content/main.tsx"],
      css: ["src/index.css"],
      run_at: "document_idle",
    },
  ],
});
