<?php

// Get all users
$app->get('/users', function() {
  $users = R::findAll('users');
  echo json_encode(R::exportAll($users));
});

// Get specific user
$app->get('/users/:id', function ($id) {
  $user = R::findOne('users', ' id = ? ',array($id));
  echo json_encode(R::exportAll($user));
});

// Register new user
$app->post('/register', function() use ($app) {
  $request = $app->request();
  $name = $request->params('name');
  $password = $request->params('password');
  $registered = $request->params('registered');

  // Create a 'user' object, to be stored in a table named users
  $user = R::dispense('users');
  $user->name = $name;

  // Password hashing
  $hash = password_hash($password, PASSWORD_BCRYPT);

  // Check if valid
  if  (password_verify($password, $hash)) {
    // Valid
    $user->password = $hash;
  } else {
    // Invalid
  }
  $user->registered = $registered;

  // Save user
  R::store($user);
});