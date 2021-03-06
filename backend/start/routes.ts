/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

const API_PREFIX: string = '/api'
Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/sign-in', 'UserController.signIn').prefix(API_PREFIX)

Route.group(() => {
  Route.get('/users', 'UserController.getUser')
  Route.get('/user/:userId/detail', 'UserController.getDetail')
  Route.get('/user/like', 'UserController.getListLikedPersons')
  Route.post('/user/like', 'UserController.likePerson')
  Route.post('/user/pass', 'UserController.passPerson')
  Route.get('/user/match', 'UserController.getListMachtedPersons')
})
  .middleware(['auth'])
  .prefix(API_PREFIX)
