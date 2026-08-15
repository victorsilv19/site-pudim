# ⚡ Início Rápido - Pudim Artesanal

Bem-vindo! Aqui está tudo que você precisa para começar.

## 🚀 5 Minutos para o Primeiro Teste

### 1. Instalar dependências (2 min)
```bash
npm install
```

### 2. Rodar o site localmente (1 min)
```bash
npm run dev
```

Abra o navegador: http://localhost:3000

### 3. Pronto! ✨
Seu site está funcionando localmente.

---

## 🎨 Personalize Seu Site

### Adicionar Suas Fotos dos Produtos

1. Crie a pasta `public/products` (se não existir)
2. Coloque suas imagens lá:
   - `pudim.jpg`
   - `pave.jpg`
   - `mousse.jpg`
   - `brownie.jpg`
   - `cookie.jpg`

3. As fotos aparecerão automaticamente no carrossel!

### Mudar Cores

Abra: `components/ThemeProvider.jsx`

Procure por:
```javascript
const themes = {
  light: {
    '--color-primary': '#ec4899',    // ← Mude esta cor
```

Substitua `#ec4899` pela cor que quiser. Veja [GUIA_DE_TEMAS.md](GUIA_DE_TEMAS.md) para paletas prontas.

### Editar Informações de Contato

- **Telefone**: Edite em `components/Header.jsx`
- **Localização**: Edite em `components/ContactSection.jsx` e `pages/index.jsx`

Procure por `45999409316` e `Foz do Iguaçu` e mude conforme necessário.

---

## 🌍 Deploy na Internet

Quando quiser colocar online:

1. Leia: [DEPLOY_CLOUDFLARE.md](DEPLOY_CLOUDFLARE.md)
2. Faça o passo-a-passo
3. Em 5 minutos seu site está no ar!

**Melhor ainda**: É **GRÁTIS** no Cloudflare Pages! ✨

---

## 📁 Estrutura do Projeto

```
pudim/
├── components/        ← Componentes do site
│   ├── Carousel.jsx   ← Carrossel de fotos
│   ├── Header.jsx     ← Topo do site
│   ├── Footer.jsx     ← Rodapé
│   └── ThemeProvider.jsx ← Sistema de cores
├── pages/
│   ├── _app.jsx       ← Setup global
│   └── index.jsx      ← Página principal (seu conteúdo)
├── styles/
│   └── globals.css    ← Estilos globais
├── public/
│   └── products/      ← SUAS FOTOS AQUI
├── README.md          ← Documentação completa
├── GUIA_DE_TEMAS.md   ← Como mudar cores
└── DEPLOY_CLOUDFLARE.md ← Como fazer deploy
```

---

## 🎯 Próximos Passos

### Hoje
- [x] Entender a estrutura
- [ ] Adicionar suas fotos
- [ ] Escolher cores que gosta
- [ ] Testar no navegador

### Esta Semana
- [ ] Fazer deploy no Cloudflare Pages
- [ ] Testar no celular
- [ ] Compartilhar com amigos

### Mês que vem
- [ ] Adicionar mais produtos
- [ ] Otimizar fotos
- [ ] Melhorar descrições

---

## ❓ Dúvidas Frequentes

### Como adiciono fotos?
Coloque na pasta `public/products/` com os nomes:
- pudim.jpg, pave.jpg, mousse.jpg, brownie.jpg, cookie.jpg

### Como mudo o tema?
Edite `components/ThemeProvider.jsx` e mude os códigos HEX das cores.

### Como faço deploy?
Siga [DEPLOY_CLOUDFLARE.md](DEPLOY_CLOUDFLARE.md) - é bem simples!

### É de graça?
SIM! Cloudflare Pages é 100% gratuito.

### Posso ter meu próprio domínio?
Sim! Você pode usar um domínio (.com, .com.br, etc) por ~R$30/ano.

### E se precisar de ajuda?
Veja os comentários nos arquivos `.jsx` - tem muita dica lá!

---

## ⚡ Comandos Úteis

```bash
# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run start

# Checar se tem erros
npm run lint
```

---

## 🎉 Resumo

Seu site está **PRONTO** para usar!

1. ✅ Estrutura completa
2. ✅ Sistema de temas flexível
3. ✅ Carrossel de fotos
4. ✅ Contato direto via WhatsApp
5. ✅ Pronto para deploy grátis

**Agora é só adicionar suas fotos e colocar online!**

---

**Sucesso com seus pudins! 🍮✨**
