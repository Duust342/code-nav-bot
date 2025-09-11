export class TechResponse {
  private knowledgeBase = {
    react: {
      keywords: ['react', 'component', 'jsx', 'hook', 'usestate', 'useeffect', 'props', 'state'],
      responses: [
        'O **React** é uma biblioteca JavaScript para construção de interfaces de usuário. Ele utiliza um paradigma baseado em componentes, onde cada componente pode ter seu próprio estado e ciclo de vida.',
        'Para gerenciar estado no React, você pode usar o hook **useState** para estado local ou **useContext** para estado global. Exemplo:\n\n```jsx\nconst [count, setCount] = useState(0);\n```',
        'Os **hooks** do React permitem usar estado e outros recursos sem escrever classes. Os principais são useState, useEffect, useContext e useReducer.'
      ]
    },
    tailwind: {
      keywords: ['tailwind', 'css', 'style', 'design', 'responsive', 'utility'],
      responses: [
        'O **Tailwind CSS** é um framework CSS utility-first que permite estilizar aplicações rapidamente usando classes predefinidas. Exemplo: `bg-blue-500 text-white p-4 rounded-lg`',
        'Para criar designs responsivos com Tailwind, use prefixos como `sm:`, `md:`, `lg:`. Exemplo: `text-sm md:text-lg lg:text-xl`',
        'O Tailwind permite customização através do arquivo `tailwind.config.js`, onde você pode definir cores personalizadas, fontes e breakpoints.'
      ]
    },
    typescript: {
      keywords: ['typescript', 'type', 'interface', 'generic', 'typing'],
      responses: [
        'O **TypeScript** adiciona tipagem estática ao JavaScript, ajudando a prevenir erros e melhorar a manutenibilidade do código. Exemplo:\n\n```typescript\ninterface User {\n  name: string;\n  age: number;\n}\n```',
        'Use **interfaces** para definir a estrutura de objetos e **tipos** para criar alias. Isso melhora a documentação do código e fornece autocompletar no IDE.',
        'Os **generics** no TypeScript permitem criar componentes reutilizáveis que funcionam com diferentes tipos. Exemplo: `Array<T>` ou `Promise<T>`.'
      ]
    },
    supabase: {
      keywords: ['supabase', 'backend', 'database', 'auth', 'api', 'postgresql'],
      responses: [
        'O **Supabase** é uma alternativa open-source ao Firebase, fornecendo backend como serviço (BaaS) com PostgreSQL, autenticação, APIs em tempo real e storage.',
        'Para autenticação no Supabase, use a biblioteca `@supabase/auth-ui-react`. O Supabase gerencia o fluxo completo e retorna tokens JWT válidos.',
        'O Supabase oferece **Row Level Security (RLS)** para controlar acesso aos dados no nível de linha, garantindo que usuários vejam apenas dados autorizados.'
      ]
    },
    jwt: {
      keywords: ['jwt', 'token', 'authentication', 'authorization', 'security'],
      responses: [
        'O **JWT (JSON Web Token)** é um padrão para transmitir informações de forma segura entre partes. Ele consiste em header, payload e signature codificados em Base64.',
        'No front-end, armazene o JWT no `localStorage` ou `sessionStorage` e inclua-o no header Authorization das requisições: `Bearer <token>`',
        '**Importante**: Nunca armazene informações sensíveis no payload do JWT, pois ele pode ser decodificado. Use apenas para identificação e claims básicos.'
      ]
    },
    nodejs: {
      keywords: ['node', 'nodejs', 'npm', 'express', 'server', 'backend'],
      responses: [
        'O **Node.js** permite executar JavaScript no servidor. É ideal para APIs REST, aplicações em tempo real e microserviços.',
        'Use o **npm** (Node Package Manager) para gerenciar dependências. Comandos essenciais: `npm install`, `npm run`, `npm start`.',
        'Para criar APIs, o **Express.js** é o framework mais popular. Ele fornece middleware, roteamento e facilita a criação de endpoints.'
      ]
    }
  };

  private getRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private identifyTechnology(message: string): string | null {
    const lowerMessage = message.toLowerCase();
    
    for (const [tech, data] of Object.entries(this.knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return tech;
      }
    }
    
    return null;
  }

  generateResponse(userMessage: string): string {
    const technology = this.identifyTechnology(userMessage);
    
    if (technology && this.knowledgeBase[technology as keyof typeof this.knowledgeBase]) {
      const techData = this.knowledgeBase[technology as keyof typeof this.knowledgeBase];
      const response = this.getRandomResponse(techData.responses);
      
      return `${response}\n\n💡 **Dica de Segurança**: ${this.getSecurityTip()}`;
    }
    
    // Resposta genérica
    return this.getGenericResponse(userMessage);
  }

  private getSecurityTip(): string {
    const tips = [
      'Sempre valide dados no backend, mesmo que validados no frontend.',
      'Use HTTPS em produção para proteger tokens JWT em trânsito.',
      'Implemente rate limiting para prevenir ataques de força bruta.',
      'Mantenha dependências atualizadas para evitar vulnerabilidades.',
      'Use variáveis de ambiente para armazenar informações sensíveis.'
    ];
    
    return tips[Math.floor(Math.random() * tips.length)];
  }

  private getGenericResponse(message: string): string {
    if (message.toLowerCase().includes('como') || message.toLowerCase().includes('how')) {
      return `Essa é uma ótima pergunta! Para fornecer uma resposta mais específica, preciso de mais contexto sobre qual tecnologia você está usando:\n\n🔹 **React** - para questões de componentes e hooks\n🔹 **TypeScript** - para tipagem e interfaces\n🔹 **Supabase** - para backend e autenticação\n🔹 **Tailwind** - para estilização\n🔹 **JWT** - para autenticação e tokens\n\nPode reformular sua pergunta mencionando a tecnologia específica?`;
    }
    
    return `Entendi sua pergunta! Sou especializado no stack **React + TypeScript + Tailwind + Supabase + JWT**.\n\nPara uma resposta mais precisa, tente perguntar sobre:\n\n🚀 **Autenticação**: "Como implementar login com Supabase?"\n⚛️ **React**: "Como usar useEffect para buscar dados?"\n🎨 **Tailwind**: "Como criar layouts responsivos?"\n📝 **TypeScript**: "Como definir interfaces para componentes?"\n🔐 **JWT**: "Como armazenar tokens de forma segura?"\n\nComo posso ajudá-lo especificamente?`;
  }
}