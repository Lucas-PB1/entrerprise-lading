```markdown
# Projeto Landing Page React

Este é um projeto de landing page construído com React, que inclui animações de rolagem usando a biblioteca AOS, integração com a API JSON Placeholder para posts de blog, e componentes interativos como um formulário de contato e um botão flutuante para o WhatsApp.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para construir a interface de usuário.
- **AOS**: Biblioteca para animações ao rolar a página.
- **Bootstrap**: Framework CSS para layout e componentes rápidos.
- **Styled-Components**: Biblioteca para componentes de estilo em JavaScript.
- **Axios**: Cliente HTTP para requisições API.
- **Helmet**: Biblioteca para manipular o `<head>` do HTML (títulos e metadados).
- **React-Router**: Para navegação entre páginas (caso o projeto seja expandido no futuro).

## Requisitos

- Node.js >= 14.x
- npm (gerenciador de pacotes do Node) ou Yarn

## Configuração

### 1. Clonando o Repositório

Clone o repositório para sua máquina local usando o comando:

```bash
git clone https://github.com/Lucas-PB1/entrerprise-lading
```

### 2. Instalando Dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
cd entrerprise-lading
npm install
```

Ou, se você estiver usando Yarn:

```bash
cd entrerprise-lading
yarn install
```

### 3. Rodando o Projeto Localmente

Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm start
```

Ou, se você estiver usando Yarn:

```bash
yarn start
```

Isso iniciará o servidor e abrirá o projeto no navegador. O projeto estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
src/
├── api/                  # Funções para buscar dados (por exemplo, de uma API)
├── components/           # Componentes reutilizáveis (Cabeçalho, Rodapé, Formulário, etc.)
├── pages/                # Páginas da aplicação (LandingPage)
├── styles/               # Estilos globais e personalizados
├── App.js                # Componente principal da aplicação
└── index.js              # Ponto de entrada da aplicação
```

### Explicação das Páginas e Componentes

- **App.js**: O componente principal que gerencia o estado da aplicação e a estrutura geral da página.
- **LandingPage.js**: A página principal que exibe o conteúdo da landing page.
- **BlogFeed.js**: Componente que exibe os posts de blog.
- **ContactForm.js**: Formulário de contato simples.
- **Header.js**: Componente do cabeçalho com logo e links de navegação.
- **Footer.js**: Componente do rodapé com links de navegação e redes sociais.
- **Cookie.js**: Componente de consentimento de cookies.
- **FloatingWhatsAppButton.js**: Componente para exibir um botão flutuante de WhatsApp.

## Scripts

Aqui estão alguns dos comandos mais úteis para trabalhar com o projeto:

- **`npm start`**: Inicia o servidor de desenvolvimento em `http://localhost:3000`.
- **`npm run build`**: Cria uma versão otimizada do projeto para produção.
- **`npm test`**: Executa os testes do projeto.
- **`npm run lint`**: Executa o linter para garantir que o código siga as convenções.

## Contribuindo

Se você deseja contribuir para este projeto, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature ou correção: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -am 'Adicionando nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request com a descrição das mudanças.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
