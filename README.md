# Dra. Aura Estética - Premium Landing Page

Esta é uma landing page de alta performance e luxo para a clínica Dra. Aura Estética, desenvolvida com React, Vite e Tailwind CSS.

## 🚀 Como implantar na Vercel

O projeto já está preparado para implantação automática na Vercel. Siga os passos abaixo:

1. **Conecte seu repositório:** No painel da Vercel, clique em "Add New" -> "Project" e selecione o seu repositório do GitHub/GitLab/Bitbucket.
2. **Configurações de Build:** A Vercel detectará automaticamente o Vite. Certifique-se de que as configurações sejam:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. **Variáveis de Ambiente:** Se você estiver usando a API do Gemini ou outras integrações, adicione as chaves necessárias no painel "Environment Variables" da Vercel:
   - `GEMINI_API_KEY` (se aplicável)
4. **Deploy:** Clique em "Deploy" e seu site estará no ar em segundos!

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite 6**
- **Tailwind CSS 4**
- **Motion (Framer Motion)** para animações fluidas
- **Lucide React** para ícones sofisticados

## 📄 Estrutura do Projeto

- `src/App.tsx`: Componente principal contendo toda a lógica e seções da landing page.
- `src/index.css`: Estilos globais e personalização de temas (cores, fontes).
- `vercel.json`: Configuração de roteamento para garantir que o SPA funcione corretamente após o deploy.

---
Desenvolvido com foco em conversão e experiência de luxo.
