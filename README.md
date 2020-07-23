
# Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.



![Screenshot_1](https://user-images.githubusercontent.com/45580434/79641791-06e1c100-8170-11ea-8ecf-b6c889805d55.png)
<br>

# Spotenu  
**_FULL STACK_**

O *Spotenu* é um projeto que visa facilitar o acesso a músicas pelo mundo. Para isso, vamos dar suporte para dois tipos de usuários: as bandas (ou músicos) e os ouvintes (usuários que consomem as músicas). Além disso, nós vamos montar uma operação com funcionários próprios que precisam gerenciar os dados que circulam no nosso sistema. Eles serão os nossos administradores.

**Usuários músicos**

Vamos começar a explicar os usuários que são uma banda. Mesmo que haja músicos solos, nós vamos representar todos eles por uma banda, que deve possuir um nome, um nickname, uma descrição (onde se possa escrever qualquer texto de qualquer tamanho) e uma senha. Quando uma banda de cadastra, ela precisa esperar que um administrador aprove o seu cadastro para pode utilizar a nossa aplicação. 

As funcionalidades relacionadas a músicos são: criação, edição e deleção de álbuns; e criação, edição e deleção de músicas. Para criar um álbum, devemos informar o nome e relacioná-lo com um conjunto de gêneros. Um álbum pode ser de mais de um gênero musical. Na edição, é possível alterar o nome do álbum e os gêneros dele. Para criar uma música, os músicos devem informar o nome da música e o álbum a qual ela está relacionada. Só é possível alterar o nome da música. Por fim, sobre a deleção de músicas, não há muito o que explicar, mas a de álbuns tem um comportamento importante: ao se deletar um álbum todas as músicas devem ser deletadas também.  

Para se logar, o usuário músico pode fornecer o email ou o nickname (junto com a senha). Caso ele não tenha sido aprovado ainda, ele não deve ser capaz de se logar na aplicação.

**Usuários ouvintes**

Os ouvintes são divididos em duas categorias: pagantes e não pagantes. Os não pagantes só podem acessar a funcionalidade de busca da música, que deve fazer uma busca por termos dos nomes das músicas, com filtro de gênero opcional.

Já os pagantes tem acesso a isso e mais: playlists próprias. Ao criar uma playlist, basta fornecer um nome. Podem ser adicionadas músicas da playlist, ou retira-las. Todas as playlist são inicialmente privadas e só podem ser modificadas (ou adicionar e retirar músicas) pelo usuário criador. Ele pode tornar a playlist colaborativa, permitindo que qualquer um a veja; e, então, quem for seguidor da playlist também pode a modificar.

Um usuário ouvinte deve fornecer o nome, o email, nickname e senha no cadastro. Para logar, ele pode usar tanto o email como o nickname (junto com a senha).  

**Usuários administradores**

Os usuários administradores são responsáveis pelo gerenciamento do nosso projeto. Somente um usuário administrador pode cadastrar outro usuário administrador, passando as informações: nome, email, nickname e senha. 

Eles podem aprovar os músicos (como explicado acima). Além disso, eles também são capazes de adicionar gêneros musicais, passando somente um nome.

Por fim, há a possibilidade de bloquear qualquer usuário (que não seja um administrador). Quando um usuário for bloqueado ele não pode mais logar na aplicação. Para se logar, um administrador pode informar o email ou o nickname (junto com a senha)


**BACKEND**

- **1. Signup de usuário ouvinte**

    Um usuário ouvinte tem que fornecer o nome, o email, o nickname uma senha. Faça as validações básicas e garanta que a senha tenha, no mínimo, 6 caracteres. **Em todos os cadastros e logins**, vamos usar somente o *access token*

- **2. Cadastro de administrador**

    Os administradores também se cadastram com nome, email, nickname e senha. Aqui, a senha tem que possuir, no mínimo, 10 carácteres. Somente um usuário administrador pode adicionar outro (ou seja, esse endpoint deve ser autenticado e verificar se o token é de um administrador)

- **3. Signup de bandas**

    A banda precisa informar o seu nome, o nickname, o email, a sua descrição e uma senha, com, no mínimo 6 caracteres. Uma banda deve começar com o status de não aprovada (ou seja, não retorne um *access token* nesse endpoint)
    
- **4. Ver todas as bandas**

    Esse endpoint deve retornar uma lista com todas as bandas registradas no banco, com as informações: nome, email,  nickname e um booleano indicando se está aprovado ou não. Somente administradores podem ter acesso a essa funcionalidade

- **5. Aprovação de bandas**

    Um administrador pode aprovar uma banda, para que ela, então, consiga se logar. Caso um administrador tente aprovar uma banda que já tinha sido aprovada, um erro deve ser retornado (e, obviamente, se a banda não existir também).

- **6. Login**

    Todos os usuários (ouvintes, administradores ou bandas) devem se logar pelo mesmo endpoint. Eles podem fornecer o email ou o nickname e a senha correta. 

- **7. Adicionar Gênero**

    Somente um administrador pode adicionar gêneros na nossa aplicação. Para isso, deve fornecer um nome. Caso já exista um gênero com esse nome, um erro deve ser retornado


- **8. Ver gêneros músicias**

    Tanto um administrador como um usuário banda podem ver todos os gêneros músicas. Retorne uma lista com id e nome

- **9. Criação de álbuns**

    Uma banda pode criar um álbum para colocar as suas músicas. Deve fornecer o nome e uma lista de gêneros. Quando o álbum for criado, ele deve ser diretamente atrelado à banda que estiver autenticada na aplicação. Só bandas podem criar álbuns.


- **10. Criação de músicas**

    Para criar uma música, um nome e um álbum devem ser informados. Caso o álbum não exista, um erro deve ser informado. Se já existir uma música com esse nome no álbum, outro erro deve ser retornado. 


**INFRAESTRUTURA**



**FRONTEND**

- **1. Tela de cadastro de usuário ouvinte**

    Um usuário ouvinte tem que fornecer o nome, o email, o nickname uma senha para se cadastrar

- **2. Tela de cadastro de usuários administradores**

    Os administradores também se cadastram com nome, email, nickname e senha. Aqui, a senha tem que possuir, no mínimo, 10 carácteres. Somente um usuário administrador pode adicionar outro (ou seja, algum usuário admin deve estar logado para fazer essa funcionalidade

- **3. Tela de cadastro de usuários bandas**

    A banda precisa informar o seu nome, o nickname, o email, a sua descrição e uma senha, com, no mínimo 6 caracteres. 

- **4. Tela de aprovação de bandas**

    Deve possuir uma lista com todas as bandas e um botão que permita aprovar cada uma delas

- **5. Tela de Login**

    Todos os usuários (ouvintes, administradores ou bandas) devem se logar pelo mesma tela. Eles podem fornecer o email ou o nickname e a senha correta. 

- **6. Tela de home**

    A tela de home pode ser acessada por todos os usuários. Ela deve possuir um menu que permita navegar pelas funcionalidades de cada um deles. 
    Por exemplo, para o usuário administrador, deve haver as possibilidades de: aprovar bandas, gerenciar gêneros musicais e adicionar administradores

- **7. Tela de ver e adicionar gêneos**

    Um administrador deve ser capaz de ver todos os gêneros musicais e adicionar quantos gêneros quiser passando as informações básica (no caso, só o nome).

- **8. Tela de criação de álbuns**

    Essa funcionalidade é para banda criarem álbuns próprios. Para isso, ela deve passar um nome e selecionar os gêneros apropriados. 

- **9. Tela de criação de músicas**

    Aqui é o onde as bandas criam músicas Para isso, devem fornecer o nome e o selecionar um álbum que já tenham criado.


## Tecnologias/Ferramentas:
- React
- Material-UI
- Styled-components
- Axios
- Redux
- AWS
- Typescript
- SQL
- Git
- Typescript
- Node.js
- MVC
- Programação Orientada a Objetos
- MySQL
- Postman
<br>
<br>

## O que a plataforma é capaz de fazer 🏁

🏆 _Fornecer uma aplicação backend para uma rede social de músicas._

🏆 _Coletar, verificar, armazenar os dados em banco de dados próprio para o sistema._

🏆 _Fornecer uma aplicação Front end para uma rede social de músicas._

🏆 _Logar, verificar usuários, validar informações._
<br>

## Linguagens e libs utilizadas 📚
_**Back end**_

- Typescript: versão 3.8.3
- bcryptjs: versão 5.0.1 @types/2.4.2
- dotenv: versão 8.2.0
- express: versão 4.17.0 @types/4.17.0
- jsonwebtoken: versão 8.5.1 @types/8.3.9
- knex: versão 0.21.1 @types/0.16.1
- moment: versão 2.25.3
- mysql: versão 2.18.1
- uuid: versão 8.0.0 @types/7.0.3

_**Front end**_

- @material-ui/core: 4.10.2,
- @material-ui/icons: 4.9.1,
- axios: 0.19.0,
- connected-react-route: 6.5.2,
- history: 4.10.1,
- jss: 10.0.0,
- react: 16.8.6,
- react-dom: 16.8.6,
- react-input-mask: 2.0.4,
- react-jss: 8.6.1,
- react-number-format: 4.4.1,
- react-redux: 7.1.1,
- react-router-dom: 5.1.2,
- react-scripts: 3.0.1,
- redux: 4.0.4,
- redux-thunk: 2.3.0,
- styled-components: 4.4.1

### Como rodar a aplicação ▶️

No terminal, clone o projeto:

```
git clone https://github.com/EloisaFagundes/projeto-fullstack
```
Navegue para dentro da raiz do projeto e escolha a pasta frontend ou backend

```
cd projeto-fullstack
```

```
cd frontend
```
Instale as dependências

```
npm i
```

```
npm start
```


## Excluisvo para o Back end
**Crie um arquivo .env com as configurações do seu banco de dados** (preferencialmente MySQL, caso deseje utilizar outro, adaptações no código e dependências serão necessárias).

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_sehna
DB_DATABASE_NAME = seu_banco_de_dados
JWT_KEY = chave_para_jwt
JWT_EXPIRE_TIME = tempo_expiração (exemplo: 15 minutes)
BCRYPT_COST = cost_encriptação (idealmente um valor minimo de 12)
Execute a aplicação
```



Você poderá utilizar os endpoints através de um cliente HTTP (ex. Postman) tendo o endereço localhost:3003 como URL base para as requisições. 

<br>
