# 🎨 Guia de Temas - Pudim Artesanal

Este guia ajuda você a customizar as cores do seu site de forma fácil!

## Como Funciona

O site usa **CSS Variables** (variáveis CSS) que são definidas no arquivo `components/ThemeProvider.jsx`. Ao mudar essas variáveis, o site inteiro muda de cor automaticamente.

## Cores Disponíveis Atualmente

### Tema Claro (light)
```
Cor Principal:   #ec4899 (Rosa)
Cor Secundária:  #f97316 (Laranja)
Cor Destaque:    #06b6d4 (Ciano)
Fundo:           #ffffff (Branco)
Texto:           #1f2937 (Cinza escuro)
```

### Tema Escuro (dark)
```
Cor Principal:   #ec4899 (Rosa)
Cor Secundária:  #f97316 (Laranja)
Cor Destaque:    #06b6d4 (Ciano)
Fundo:           #111827 (Cinza muito escuro)
Texto:           #f3f4f6 (Branco/Cinza claro)
```

## 🎨 Paletas de Cores Sugeridas

### Paleta 1: Quente e Aconchegante (Para doces!)
```javascript
light: {
  '--color-primary': '#d97706',    // Âmbar (quente)
  '--color-secondary': '#f59e0b',  // Amarelo quente
  '--color-accent': '#f97316',     // Laranja
  '--color-bg': '#fffbf0',         // Branco quente
  '--color-fg': '#78350f',         // Marrom escuro
}
```

### Paleta 2: Moderna e Limpa
```javascript
light: {
  '--color-primary': '#2563eb',    // Azul
  '--color-secondary': '#7c3aed',  // Roxo
  '--color-accent': '#06b6d4',     // Ciano
  '--color-bg': '#ffffff',         // Branco puro
  '--color-fg': '#1e293b',         // Cinza escuro
}
```

### Paleta 3: Frutas Tropicais
```javascript
light: {
  '--color-primary': '#dc2626',    // Vermelho (morango)
  '--color-secondary': '#ea580c',  // Laranja (manga)
  '--color-accent': '#16a34a',     // Verde (abacaxi)
  '--color-bg': '#fef3c7',         // Amarelo muito claro
  '--color-fg': '#451a03',         // Marrom escuro
}
```

### Paleta 4: Luxuosa e Sofisticada
```javascript
light: {
  '--color-primary': '#9333ea',    // Roxo
  '--color-secondary': '#db2777',  // Rosa/Magenta
  '--color-accent': '#0891b2',     // Ciano escuro
  '--color-bg': '#fafafa',         // Cinza muito claro
  '--color-fg': '#1f2937',         // Cinza escuro
}
```

## 🔧 Como Mudar as Cores

### Passo 1: Abra o arquivo
Abra: `components/ThemeProvider.jsx`

### Passo 2: Encontre a seção de temas
Procure por:
```javascript
const themes = {
  light: {
    '--color-primary': '#ec4899',
    // ... mais cores
  },
  dark: {
    // ... mesma estrutura
  },
};
```

### Passo 3: Substitua os códigos HEX
Por exemplo, para usar a paleta "Quente e Aconchegante":

**Antes:**
```javascript
light: {
  '--color-primary': '#ec4899',
  '--color-secondary': '#f97316',
  '--color-accent': '#06b6d4',
  '--color-bg': '#ffffff',
  '--color-fg': '#1f2937',
}
```

**Depois:**
```javascript
light: {
  '--color-primary': '#d97706',
  '--color-secondary': '#f59e0b',
  '--color-accent': '#f97316',
  '--color-bg': '#fffbf0',
  '--color-fg': '#78350f',
}
```

### Passo 4: Salve o arquivo
Pronto! O site já muda automaticamente.

## 🎨 Ferramentas para Escolher Cores

- **Coolors.co** - Gerar paletas: https://coolors.co
- **Adobe Color** - Selecionar cores: https://color.adobe.com
- **Color Hunt** - Inspiração: https://colorhunt.co
- **Tailwind Colors** - Cores do Tailwind: https://tailwindcss.com/docs/customizing-colors

## 💡 Dicas de Cores para Pudins

Como os pudins são doces e gostosos, considere usar cores:
- 🟠 **Quentes** (laranja, marrom, ouro) - Transmitem aconchego
- 🔴 **Vermelhas/Rosas** - Associadas a doces e frutas
- 🟣 **Roxo/Magenta** - Sofisticado e premium
- 🟡 **Amarelo/Ouro** - Delicioso e alegre

Evite cores muito pálidas ou muito escuras, que podem dificultar a leitura.

## 🌓 Tema Escuro vs. Claro

- **Tema Claro**: Perfeito para dia, mais alegre
- **Tema Escuro**: Melhor para noite, economiza bateria

Você pode ter cores diferentes para cada tema!

## Exemplo Completo

Para criar uma paleta roxo-luxuosa com tema escuro diferente:

```javascript
const themes = {
  light: {
    '--color-primary': '#9333ea',    // Roxo vibrante
    '--color-secondary': '#db2777',  // Rosa/Magenta
    '--color-accent': '#0891b2',     // Ciano escuro
    '--color-bg': '#fafafa',         // Cinza muito claro
    '--color-fg': '#1f2937',         // Cinza escuro
  },
  dark: {
    '--color-primary': '#c084fc',    // Roxo claro
    '--color-secondary': '#ec4899',  // Rosa claro
    '--color-accent': '#22d3ee',     // Ciano claro
    '--color-bg': '#1f1f2e',         // Cinza muito escuro (com toque roxo)
    '--color-fg': '#f3f4f6',         // Branco
  },
};
```

## 🚀 Próximas Mudanças

Quando quiser mudar de tema novamente:
1. Edite `components/ThemeProvider.jsx`
2. Mude os códigos HEX
3. Salve o arquivo
4. Atualize seu browser (Ctrl+Shift+R para limpar cache)
5. Done! ✨

---

**Divirta-se customizando seu site!** 🎨
