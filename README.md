# Ollama Web App

## Sobre
O **Ollama Web App** é um agente de IA (Chat Bot) desenvolvido para responder perguntas utilizando modelos de IA disponíveis no [Ollama](https://ollama.com/). Atualmente, o projeto utiliza os seguintes modelos:
- `gemma:2b`
- `deepseek-r1:1.5b`

## Como Usar

### 1. Instalar o Ollama
Baixe e instale o Ollama seguindo as instruções disponíveis no [site oficial](https://ollama.com/).

### 2. Baixar os modelos necessários
Execute os seguintes comandos para baixar os modelos necessários:
```sh
ollama pull gemma:2b
ollama pull deepseek-r1:1.5b
```

### 3. Iniciar o Ollama
Inicie o serviço do Ollama com:
```sh
ollama serve
```

### 4. Clonar o repositório
Clone este repositório e acesse a pasta do projeto:
```sh
git clone git@github.com:Hudson512/Ollama-web-app.git
cd Ollama-web-app
```

### 5. Instalar dependências
Instale as dependências do projeto:
```sh
npm install
```

### 6. Executar o projeto
Para iniciar o projeto, utilize o comando:
```sh
npm run start
```

O servidor estará disponível e pronto para uso!

## Contribuição
Sinta-se à vontade para contribuir com melhorias para este projeto. Para isso:
1. Faça um fork do repositório.
2. Crie uma branch com sua funcionalidade (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionando nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request!

## Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo conforme necessário.

