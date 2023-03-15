<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use App\Http\Controllers\ExampleController;
use App\Http\Controllers\LeadController;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return response()->json(['asd' => 'asdasd']);
});



$router->get('/fb', "ExampleController@index");

// $router->get('/', [ExampleController::class, '']);
$router->post('/lead/', 'LeadController@lead');
$router->post('/lead2', 'LeadController@lead2');
$router->post('/thanks', 'LeadController@thanks');
$router->post('/lead/{form}', 'LeadController@lead');
