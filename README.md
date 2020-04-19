## Explicação da abordagem escolhida para fetch e estado
- No primeiro load da aplicação, fazemos o load de todos os usuários
  ```json
	{
		"users": [
			{
				"id": 1,
				"name": "Jhon Doe"
			},
			{
				"id": 2,
				"name": "Jhon Doe"
			},
			{
				"id": 3,
				"name": "Jhon Doe"
			},
			{
				"id": 4,
				"name": "Jhon Doe
			"}
		]
	}
	```

- Ainda neste primeiro acesso, identificamos o usuário que está sendo acessado via url e carregamos os posts e fotos deste usuário, populamos apenas este usuário com estes dados. <br>
  `/2/photos` ou `/2/posts`
- ```json
	{
		"users": [
			{
				"id": 1,
				"name": "Jhon Doe",
				"posts": [],
				"photos": []
			},
			{
				"id": 2,
				"name": "Jhon Doe",
				"posts": [
					{"id": 1, "title": "Blog tittle"},
					{"id": 2, "title": "Blog tittle"},
					{"id": 3, "title": "Blog tittle"},
				],
				"photos": [
					{"albumId": 1, "url": "http://foo.bar"},
					{"albumId": 2, "url": "http://foo.bar"},
					{"albumId": 3, "url": "http://foo.bar"},
				]
			},
			{
				"id": 3,
				"name": "Jhon Doe",
				"posts": [],
				"photos": []
			},
			{
				"id": 4,
				"name": "Jhon Doe",
				"posts": [],
				"photos": []
			},
		]
	}
	```
	- Durante a primeira navegação para um usuário ainda não acessado, fazemos buscamos na api os pots e fotos deste usuário e populamos o estado, a partir do segundo request, os dados já estarão disponíveis no estados

  `/3/photos` ou `/3/posts`
	```json
	{
		"users": [
			{
				"id": 1,
				"name": "Jhon Doe",
				"posts": [],
				"photos": []
			},
			{
				"id": 2,
				"name": "Jhon Doe",
				"posts": [
					{"id": 1, "title": "Blog tittle"},
					{"id": 2, "title": "Blog tittle"},
					{"id": 3, "title": "Blog tittle"},
				],
				"photos": [
					{"albumId": 1, "url": "http://foo.bar"},
					{"albumId": 2, "url": "http://foo.bar"},
					{"albumId": 3, "url": "http://foo.bar"},
				]
			},
			{
				"id": 3,
				"name": "Jhon Doe",
				"posts": [
					{"id": 1, "title": "Blog tittle"},
					{"id": 2, "title": "Blog tittle"},
					{"id": 3, "title": "Blog tittle"},
				],
				"photos": [
					{"albumId": 1, "url": "http://foo.bar"},
					{"albumId": 2, "url": "http://foo.bar"},
					{"albumId": 3, "url": "http://foo.bar"},
				]
			},
			{
				"id": 4,
				"name": "Jhon Doe",
				"posts": [],
				"photos": []
			},
		]
	}
	```

## Notas

- Não quis adicionar muita complexidade ao projeto adicionando Redux, Saga, etc. Preferi uma abordatem mais simplista utilizando os hooks do próprio React, creio que para projetos pequenos, eles se saiam muito bem.

- Não havia utilizado o StoryBook anteriormente.
Uma grande dificuldade foi utiliza-lo com as tecnologias mais atuais como o root import, styled-components com `<ThemeProvider />`, hooks do react-router-dom como o useHistory, por exemplo, não consegui encontrar uma solução de fácil implementação que resolvesse o problema para todos os componentes, a cada componente surgia um problema novo, não quis demandar muito tempo neste problema.

## Node version

`node => v12.16.x` <br />
`npm => v6.14.x`

## Available Scripts

In the project directory, you can run:
```bash
$ yarn start
```
```bash
$ yarn build
```
```bash
$ yarn test
```
```bash
$ yarn lint
```
```bash
$ yarn storybook
```
```bash
$ yarn build-storybook
```
