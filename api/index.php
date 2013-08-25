<?php

// Load all dependencies
require 'vendor/autoload.php';
require 'rb.php';

// Start a new Slim instance
$app = new \Slim\Slim;

// Load config
include 'redbean-config.php';

// Load API modules
include 'modules/trash.php';
//include 'modules/users.php';

// Run the Slim app
$app->run();