<?php

// Test routes
$app->get('/', function() {
  echo "I R THE AWESOME API!";
});
$app->get('/hello/:name', function($name) {
  echo "Hello, $name!";
});

// Get all trash
$app->get('/activities', function() use ($app) {
  $trash = R::find('trash');
  echo json_encode(R::exportAll($trash));
});

// Get specific trash
$app->get('/activity/:id', function ($id) {
  $trash = R::findOne('trash', 'id = ?', array($id));
  echo json_encode(R::exportAll($trash));
});

// Update trash
$app->put('/edit/:id', function($id) use ($app) {
  $request = $app->request();

  $trash = R::findOne('trash', 'id = ?', array($id));

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
  $picture = $request->params('picture');
  $trash->picture = $picture;

  R::store($trash);
});

// Add new trash
$app->post('/report', function() use ($app) {
  $request = $app->request();

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
  $picture = $request->params('picture');
  $trash->picture = $picture;

  R::store($trash);
});

// Delete trash
$app->delete('/activity/:id', function($id) use($app) {
  //$request = $app->request();

  $trash = R::findOne('trash', 'id = ?', array($id));

  R::trash($trash);
});