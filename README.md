
# Webpack-4 configuration setup with scss, lazyloading & dev server

## Intro

This is an webpack-4 configuration setup that can be used for develop & as well as for production.


## How to use!

  
- create the files `env.development` for local & `.env.production` for production

```sh

```
GRAPHQl API's - ([live-url](https://gql-node.herokuapp.com/graphql))

1. Register (Create User)

```sh
    mutation {
    	  register(input: { email: "techyaura@yopmail.com", password: "Hello@123" }){
    	    hashToken
			message
    	  }
    }
```

2. Register Verification(Verify User)

```sh
    mutation {
    	  registerVerificationByOtp(input: { otp: "<OTP>", hashToken: "<hashToken>" }){
    	    message
    	  }
    }
```

3. Login (with registered User)

```sh
    query {
	  login(
		  input: {
			email: "techyaura@yopmail.com", 
	  		password: "Hello@123"
		  }){
	    message
	    token
	    user {
	      email
	      id
	    }
	  }
	}
```

4. TODOS (create) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    mutation {
	  addTodo (input: { title: "Hello World" }) {
	    message
    	ok
	  }
	}
```

5. TODOS (read) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
   query {
		todoList (first:5, offset: 1, sort: {createdAt: ASC }, filter: {title_contains: "techyaura"}) {
			totalCount,
			data {
				createdAt
				title
				isCompleted
				user {
				email
				}
			}
		}
	}
```


6. TODOS (View) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    query {
	  todoView(id: "<<TODO-ID>>") {
	    title
	  }
	}
```


6. TODOS (update) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    mutation {
	  updateTodo (id: "<<TODO-ID>>", input: { title: "Hello World - 2" }) {
	    message
    	ok
	  }
	}
```

7. TODOS (delete)  - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    mutation {
	  deleteTodo(id: "<TODO-ID>") {
	    message
    	ok
	  }
	}
```