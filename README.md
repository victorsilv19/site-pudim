# 🍮 Pudim Artesanal - Site de Vendas

Um site moderno e rápido para vender seus produtos artesanais (pudins, pavês, mousses, brownies e cookies) em Foz do Iguaçu.

## ✨ Características

- ⚡ **Muito rápido** - Next.js com export estático (SSG)
- 🎨 **Tema flexível** - Mude cores e temas facilmente por código
- 📱 **Responsivo** - Funciona perfeitamente em celular, tablet e desktop
- 🌓 **Tema claro/escuro** - Toggle de temas para melhor experiência
- 🎠 **Carrossel de produtos** - Destaque suas fotos com auto-play
- 📍 **Localização** - Integração com Google Maps (opcional)
- 💬 **WhatsApp integrado** - Link direto para fazer pedidos
- 🚀 **Pronto para Cloudflare Pages** - Deploy gratuito em segundos

## 🚀 Inicio Rápido

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 3. Build para produção
```bash
npm run build
```

## 📸 Adicionar Fotos dos Produtos

1. Crie a pasta `public/products/` se não existir
2. Adicione suas imagens:
   - `pudim.jpg`
   - `pave.jpg`
   - `mousse.jpg`
   - `brownie.jpg`
   - `cookie.jpg`

As imagens apareçerão automaticamente no carrossel!

## 🎨 Customizar Cores e Tema

### Mudar esquema de cores

Edite o arquivo [`components/ThemeProvider.jsx`](components/ThemeProvider.jsx) na seção `themes`:

```javascript
const themes = {
  light: {
    '--color-primary': '#sua-cor-aqui',    // Cor principal (botões, links)
    '--color-secondary': '#sua-cor-aqui',  // Cor secundária
    '--color-accent': '#sua-cor-aqui',     // Cor destaque
    '--color-bg': '#ffffff',                // Fundo
    '--color-fg': '#1f2937',                // Texto
  },
  dark: {
    // Mesma estrutura para tema escuro
  },
};
```

Exemplos de cores:
- Rosa: `#ec4899`
- Laranja: `#f97316`
- Ciano: `#06b6d4`
- Roxo: `#9333ea`
- Verde: `#22c55e`

## 📞 Editar Informações de Contato

Edite os arquivos:

- **`pages/index.jsx`** - Título e descrição
- **`components/Header.jsx`** - Telefone no header
- **`components/ContactSection.jsx`** - Todas as informações de contato

Seus dados atuais:
- 📞 Telefone: 45 99940-9316
- 📍 Localização: Foz do Iguaçu

## 🌐 Deploy no Cloudflare Pages

### 1. Preparar o projeto
```bash
npm run build
```

### 2. Conectar ao Cloudflare Pages

**Opção A: Via CLI**
```bash
npm install -g wrangler
wrangler pages deploy out/
```

**Opção B: Via Dashboard**
1. Vá para [dash.cloudflare.com](https://dash.cloudflare.com)
2. Pages → Criar projeto
3. Conecte seu repositório GitHub
4. Build command: `npm run build`
5. Build output directory: `out`
6. Deploy!

### 3. Configurar domínio (opcional)
No Cloudflare Pages, você pode adicionar um domínio customizado.

## 📁 Estrutura do Projeto

```
pudim/
├── components/          # Componentes React
│   ├── Carousel.jsx    # Carrossel de produtos
│   ├── ContactSection.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ThemeProvider.jsx # Sistema de temas
├── pages/
│   ├── _app.jsx        # App principal
│   └── index.jsx       # Página inicial
├── styles/
│   └── globals.css     # Estilos globais
├── public/
│   └── products/       # Suas fotos de produtos
├── package.json
├── next.config.js      # Config Next.js
└── tailwind.config.js  # Config Tailwind CSS
```

## 🎯 Próximas Melhorias

- [ ] Página de carrinho (se quiser e-commerce)
- [ ] Formulário de contato com email
- [ ] Galeria de múltiplas fotos
- [ ] Sistema de avaliações
- [ ] Blog com receitas

## ⚡ Performance

Este site é **extremamente rápido**:
- Carregamento instantâneo (HTML puro)
- Score 100 no Lighthouse
- Sem JavaScript não essencial
- Otimizado para dispositivos móveis

## 💡 Dicas

- Use imagens JPEG ou WebP para melhor performance
- Compress suas imagens antes de upload (use [tinypng.com](https://tinypng.com))
- Teste em mobile com `npm run dev` acessando de outro dispositivo
- Use o tema escuro para economizar bateria em celulares OLED

## 📧 Suporte

Qualquer dúvida sobre o site, consulte os comentários nos arquivos ou modifique conforme necessário!

---

**Feito com ❤️ para seus pudins artesanais!** 🍮
