# ORMs - Exemplo CRUD com Express + Sequelize + SQLite

## Requisitos

* Node.js 22+
* Docker (opcional)

---

## Executando com Docker

Suba a aplicação:

```bash
docker compose up --build
```

A API ficará disponível em:

```text
http://localhost:3000
```

---

## Executando manualmente

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run server
```

A API ficará disponível em:

```text
http://localhost:3000
```

---

## Banco de Dados

O projeto utiliza SQLite através do Sequelize.

O arquivo do banco é criado automaticamente na primeira execução:

```text
data/database.sqlite
```

---

## Endpoints

### Listar usuários

```http
GET /users
```

Resposta:

```json
[
  {
    "id": 1,
    "name": "Jonatas",
    "email": "jonatas@email.com"
  }
]
```

---

### Buscar usuário por ID

```http
GET /users/:id
```

Exemplo:

```http
GET /users/1
```

---

### Criar usuário

```http
POST /users
Content-Type: application/json
```

Body:

```json
{
  "name": "Jonatas",
  "email": "jonatas@email.com"
}
```

---

### Atualizar usuário

```http
PUT /users/:id
Content-Type: application/json
```

Body:

```json
{
  "name": "Jonatas Martins",
  "email": "jonatas@email.com"
}
```

---

### Atualização parcial

```http
PATCH /users/:id
Content-Type: application/json
```

Body:

```json
{
  "name": "Novo Nome"
}
```

---

### Remover usuário

```http
DELETE /users/:id
```

---

## Testando a API

O projeto possui o arquivo:

```text
endpoints.http
```

com exemplos prontos para todos os endpoints.

### VS Code

Instale a extensão:

REST Client (humao.rest-client)

Após instalar:

1. Abra o arquivo `endpoints.http`
2. Clique em **Send Request** acima da requisição
3. Visualize a resposta diretamente no VS Code

Exemplo:

```http
GET http://localhost:3000/users
```

---

## Estrutura

```text
src/
├── controllers/
├── database/
├── models/
├── routes/
├── app.js
└── server.js
```

---

## Tecnologias

* Express
* Sequelize
* SQLite
* Docker
* REST Client (VS Code)
