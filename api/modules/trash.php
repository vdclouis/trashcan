<?php

// test routes
$app->get('/', function() {
  echo "I R THE AWESOME API!";
});
$app->get('/hello/:name', function($name) {
  echo "Hello, $name!";
});

// get all trash
$app->get('/activity', function() use ($app) {
  $trash = R::find('trash');
  $app->response()->header('Content-Type', 'application/json');
  echo json_encode(R::exportAll($trash));
});

// post
$app->post('/report', function() use ($app) {
  //get body, decode into PHP object
  $request = $app->request();
  $body = $request->getBody();
  $input = json_decode($body);

  //create and save element record
  $trash = R::dispense('trash');
  $size = $request->params('size');
  $trash->size = $size;
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