# JSONPlaceholder client

![CI](https://github.com/jay-es/jsonplaceholder-client/actions/workflows/ci.yml/badge.svg?event=push)
![NPM](https://img.shields.io/npm/l/@jay-es/jsonplaceholder-client)
![npm (scoped with tag)](https://img.shields.io/npm/v/@jay-es/jsonplaceholder-client/latest)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![types: TypeScript](https://shields.io/badge/types-TypeScript-3178C6)

Fully typed client of [the JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for TypeScript/JavaScript.

## Install

```sh
$ npm i @jay-es/jsonplaceholder-client
```

or

```sh
$ yarn add @jay-es/jsonplaceholder-client
```

## Features

```ts
// Getting a resource
const post = await getPost(1);

// Listing all resources
const allPosts = await getPosts();

// Filtering resources
const userPosts = await getPosts({ userId: 1 });

// Creating a resource
await createPost({ userId: 7, title: "Foo", body: "Lorem ipsum" });

// Updating a resource
await updatePost(1, { id: 1, userId: 7, title: "Foo", body: "Lorem ipsum" });

// Patching a resource
await patchPost(1, { title: "Foo" });

// Deleting a resource
await deletePost(1);
```

### Resources

|     post     |     comment     |     album     |     photo     |     todo     |     user     |
| :----------: | :-------------: | :-----------: | :-----------: | :----------: | :----------: |
|  `getPosts`  |  `getComments`  |  `getAlbums`  |  `getPhotos`  |  `getTodos`  |  `getUsers`  |
|  `getPost`   |  `getComment`   |  `getAlbum`   |  `getPhoto`   |  `getTodo`   |  `getUser`   |
| `createPost` | `createComment` | `createAlbum` | `createPhoto` | `createTodo` | `createUser` |
| `updatePost` | `updateComment` | `updateAlbum` | `updatePhoto` | `updateTodo` | `updateUser` |
| `patchPost`  | `patchComment`  | `patchAlbum`  | `patchPhoto`  | `patchTodo`  | `patchUser`  |
| `deletePost` | `deleteComment` | `deleteAlbum` | `deletePhoto` | `deleteTodo` | `deleteUser` |

### Listing nested resources

e.g. https://jsonplaceholder.typicode.com/posts/1/comments

```ts
const comments = await getPostComments(1);
const photos = await getAlbumPhotos(1);
const albums = await getUserAlbums(1);
const todos = await getUserTodos(1);
const posts = await getUserPosts(1);
```
