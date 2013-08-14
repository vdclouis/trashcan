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
$app->post('/users', function() use ($app) {
  $request = $app->request();
  $name = $request->params('name');
  $user = R::dispense('users');
  $user->name = $name;
  $id = R::store($user);
});