# 🚀 Deploy no Cloudflare Pages

Guia passo-a-passo para colocar seu site no ar gratuitamente!

## O que você precisa

- Uma conta no [Cloudflare](https://www.cloudflare.com) (grátis)
- Sua conta do [GitHub](https://github.com) (grátis)
- Este projeto no GitHub

## 📋 Pré-requisitos

1. **Git instalado** no seu PC
   - Baixe em: https://git-scm.com

2. **Conta GitHub** criada
   - Vá em: https://github.com/signup

3. **Código push no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit: site de pudins"
   git remote add origin https://github.com/seu-usuario/pudim-site.git
   git branch -M main
   git push -u origin main
   ```

## ✅ Opção 1: Deploy via Dashboard (Mais Fácil)

### Passo 1: Acesse o Cloudflare Pages

1. Vá para: https://dash.cloudflare.com
2. Faça login (ou crie conta se não tiver)
3. Clique em "Pages" no menu esquerdo

### Passo 2: Crie um novo projeto

1. Clique em "Criar projeto"
2. Selecione "Conectar seu repositório Git"
3. Autorize o Cloudflare a acessar seu GitHub
4. Selecione seu repositório `pudim-site`

### Passo 3: Configurar build

Preencha os campos assim:

- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Environment variables**: (deixe em branco por enquanto)

### Passo 4: Deploy!

Clique em "Salvar e Deploy"

⏳ Aguarde 2-3 minutos para o site ficar pronto!

### Seu site estará em:
```
https://seu-projeto.pages.dev
```

## ✅ Opção 2: Deploy via CLI (Mais Rápido)

### Passo 1: Instale Wrangler

```bash
npm install -g wrangler
```

### Passo 2: Faça login

```bash
wrangler login
```

Isso abrirá seu navegador para autorizar. Confirme.

### Passo 3: Build

```bash
npm run build
```

### Passo 4: Deploy!

```bash
wrangler pages deploy out/
```

Pronto! ✨

## 🎯 Adicionar Domínio Customizado

Depois que o site estiver no ar:

1. Vá em **Pages** → Seu projeto → **Configurações**
2. Clique em **Domínios Customizados**
3. Clique em **Configurar Domínio**
4. Digite seu domínio (ex: `pudimdafoz.com.br`)
5. Siga as instruções para apontar seu domínio

## 🔄 Atualizações Automáticas

Depois que fizer o deploy inicial:

- **Sempre que você fizer `git push`**, o Cloudflare automaticamente:
  1. Detecta as mudanças
  2. Faz o build
  3. Deploy automático!

Nenhum comando manual necessário! 🎉

## 🐛 Solucionar Problemas

### Site não aparece / Erro 404

1. Verifique se `Build output directory` está configurado como `out`
2. Rode `npm run build` localmente e verifique se funciona
3. Verifique os logs de build no Cloudflare

### Imagens não aparecem

- Certifique-se de que estão em `public/products/`
- Rode `npm run build` novamente
- Deploy novamente

### Tema não funciona

- Limpe o cache do navegador (Ctrl+Shift+Del)
- Ou abra em modo anônimo/privado

## 📊 Monitorar Performance

No dashboard do Cloudflare Pages, você pode ver:
- Tempo de deploy
- Requisições
- Status dos builds
- Histórico de deployments

## 💾 Domínios Gratuitos (Alternativa)

Se não quiser comprar domínio, pode usar:
- `seu-projeto.pages.dev` (gratuito do Cloudflare)
- Ou usar serviços como Freenom para domínios `.tk` grátis

## 🔐 Variáveis de Ambiente

Se precisar adicionar senhas ou chaves secretas:

1. Vá em **Pages** → Seu projeto → **Configurações** → **Variáveis de ambiente**
2. Clique em **Produção**
3. Adicione suas variáveis (RECOMENDADO: não coloque dados sensíveis públicos)

## 🚀 Resumo Rápido

```bash
# 1. Crie repositório no GitHub
git init
git add .
git commit -m "Site de pudins"
git remote add origin URL_DO_SEU_REPO
git push -u origin main

# 2. Vá em dash.cloudflare.com/pages
# 3. Conecte seu repositório
# 4. Configure:
#    - Build command: npm run build
#    - Output dir: out
# 5. Deploy!
```

## 📞 Suporte

Se algo não funcionar:
- Documentação Cloudflare Pages: https://developers.cloudflare.com/pages/
- Documentação Next.js: https://nextjs.org/docs

---

**Seu site estará no ar em minutos!** 🎉
