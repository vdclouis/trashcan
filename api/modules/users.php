<?php

// Get all users
$app->get('/users', function() {
  $users = R::findAll('users');
  echo json_encode(R::exportAll($users));
});

// Return specific user
$app->get('/users/:id', function ($id) {
  $user = R::findOne('users', $id);
  echo json_encode(R::exportAll($user));
});

// Register new user
$app->post('/register', function() use ($app) {
  $request = $app->request();
  $name = $request->params('name');
  $password = $request->params('password');
  $registered = $request->params('registered');

  //create a 'user' object, to be stored in a table named users
  $user = R::dispense('users');
  $user->name = $name;
  $user->password = $password;
  $user->registered = $registered;

  R::store($user);
});