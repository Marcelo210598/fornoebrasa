import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // O projeto vive dentro de ~/Desktop/Projetos AI; fixa a raiz do Turbopack aqui.
  turbopack: {
    root: path.join(__dirname),
  },
  // Não gerar AGENTS.md/CLAUDE.md automáticos dentro do projeto.
  agentRules: false,
};

export default nextConfig;
