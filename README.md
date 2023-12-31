# itens-informatica
Controle de Itens de Informática

# Descrição
Uma aplicação que permite com que uma empresa consiga manter o controle da quantidade e dos itens de informática que possui para uso. O usuário poderá cadastrar os itens com as quantidades, consultar, entre outros. 

# Funcionalidades
Cadastro de itens com campos como nome, marca, tipo, quantidade, data de aquisição; 
Permitir lista itens existentes; 
Possuir uma interface que vise ser fácil uso e intuitiva. 

# Link Protótipos de Tela
https://www.figma.com/proto/QLgj9YwBjtwBD6avYhWsKS/Untitled?type=design&node-id=1-2&t=TSF273P2F2tc9P8V-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2

# Como Executar o Projeto
É obrigatório ter o Node.js instalado na máquina, antes de começar verifique se ele está instalado.

1.Clone o repositório com a branch desejada em seu ambiente local.

2.Instale as dependências utilizando o npm:
```bash
npm install
```
3.Inicie o Json Server:
```bash
json-server --watch db.json
```
4.Execute o Aplicativo:
```bash
ng serve --open
```
# Link GitHub Pages

Importante: Antes de executar o projeto clone a branch main em seu ambiente local e execute:

Instala Dependências

```bash
npm install
```
Inicia o Servidor Json para que a aplicação funcione

```bash
json-server --watch db.json
```

Link para acessar: https://alexssanrosa.github.io/itens-informatica/

# Link Vídeo Apresentação Projeto

Link Video Apresentação: https://www.youtube.com/watch?v=YGBm5bHHp4Y

# 📖 Tópicos/Checklist

[x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop. <br>
[x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro). <br>
[x] Apresentar as telas com layout responsivo usando ou não algum framework CSS. <br>
[x] Construir páginas web com o conceito de componentes. <br>
[x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes. <br>
[x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding). 
<br>[X] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output. 
<br>[X] Mapear componentes à rotas no módulo de rotas. 
<br>[X] Criar navegação entre páginas por meio de rotas. 
<br>[X] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas. 
<br>[X] Validar campos do formulário com REGEX e apresentar os erros. 
<br>[X] Desabilitar o botão de submit enquanto o formulário está inválido. 
<br>[X] Fazer requisições a API com tratamento da resposta com Promises ou Observables. 
<br>[X] Cadastrar uma entidade usando uma API (JSON Server). 
<br>[X] Apresentar uma lista de dados com a diretiva estrutural ngFor. 
<br>[X] Usar a diretiva ngIf. 
<br>[X] Formatar a apresentação de dados com Pipes. 
<br>[X] Build e deploy da aplicação.
