<?php

// Test routes
$app->get('/', function() {
  echo "I R THE AWESOME API!";
});
$app->get('/hello/:name', function($name) {
  echo "Hello, $name!";
});

// Get all trash
$app->get('/activity', function() use ($app) {
  $trash = R::find('trash');
  echo json_encode(R::exportAll($trash));
});

// Get specific trash
$app->get('/activity/:id', function ($id) {
  $trash = R::findOne('trash', ' id = ? ',array($id));
  echo json_encode(R::exportAll($trash));
});

// Add new trash
$app->post('/report', function() use ($app) {
  // Get body, decode into PHP object
  $request = $app->request();
  $body = $request->getBody();
  $input = json_decode($body);

  // Create and save element record
  $trash = R::dispense('trash');
  $howmuch = $request->params('howmuch');
  $trash->howmuch = $howmuch;
  $type = $request->params('type');
  $trash->type = $type;
  $lat = $request->params('lat');
  $trash->lat = $lat;
  $long = $request->params('long');
  $trash->long = $long;
  $details = $request->params('details');
  $trash->details = $details;
  R::store($trash);
});