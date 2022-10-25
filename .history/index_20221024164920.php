<?php
/**
* Plugin Name: ReclaimPPI
* Description: ReclaimPPI.
* Version: 0.1
* Author: SynergiDigital
* Author URI: http://synergidigital.com
**/

include_once('wp/constants.php');
include_once('wp/helpers.php');
include_once('wp/filters.php');
include_once('wp/shortcodes.php');



use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use FatPanda\Illuminate\Support\Facades\Hashids;
use FatPanda\Illuminate\Support\Exceptions\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;

call_user_func(function() {

	$namespace = 'ReclaimPPI';
	
	$version = 'v1';

	/**
	 * Create and/or get access to the Lumen application container.
	 * @param $make Can be null, a string, or a function.
	 * @return If `$make` is a string, returns Application::make($make); if `$make`
	 *   is a function, that function is invoked with the Application instance as the
	 *   first and only argument, returning the result of that function call; otherwise,
	 *   the Application instance is returned.
	 */
	$app = function($make) {
		static $app;
		if (empty($app)) {
			$app = require __DIR__.'/bootstrap/app.php';
		}
		if (is_callable($make)) {
			return $make($app);
		}
		return $make ? $app->make($make) : $app;
	};

	/**
	 * Register an activation hook that executions any database migrations.
	 */
	register_activation_hook(__FILE__, function() use ($app) {
		$app(function($app) {
			if (!Schema::hasTable('fpc_migrations')) {
				Artisan::call('migrate:install');
			}			
			Artisan::call('migrate', ['--force' => '1']);
		});
	});
	
	/**
	 * Run Laravel artisan from within this plugin
	 */
	if (class_exists('WP_CLI')) {
		WP_CLI::add_command($namespace, function($args) use ($app) {
			$app(function($app) use ($args) {
				if (empty($args))	{
					WP_CLI::error("Unknown artisan command"); 
					exit;
				}
				Artisan::call(array_shift($args), array_reduce($args, function($result, $arg) {
					@list($name, $value) = explode('=', $arg);
					$result[$name] = $value ? $value : 1;
					return $result;
				}, []));
				WP_CLI::log(Artisan::output());
			});
		});
	}

	add_action('init', function() use ($app, $namespace, $version) {

		add_action('rest_api_init', function() use ($app, $namespace, $version) {

			/**
			 * Create a simple function for each of the standard HTTP methods,
			 * each with default (and strong) permissions
			 */
			foreach(['get', 'post', 'put', 'patch', 'delete'] as $method) {
				/**
				 * @param $route The route to configure
				 * @param $callback The function invoke when the route is requested
				 * @param $options Other options to pass to register_rest_route
				 * @see register_rest_route
				 */
				$$method = function($route, $callback = null, $options = []) use ($method, $namespace, $version) {
					$defaults = [
						'permission_callback' => function(WP_REST_Request $request) {
							return is_user_logged_in();
						},
						'methods' => strtoupper($method),
						'callback' => $callback,
					];
                    print_r($route);
                    exit;
					register_rest_route("{$namespace}/{$version}", $route, array_merge($defaults, $options));
				};
			}

			/**
			 * Create variables for matching IDs and other parameters in URLs
			 */
			$exampleIdString = "(?P<id>\w+)";
			
			/**
			 * Default pagination arguments
			 */
			$pagingArgs = [
				'limit' => [
					'default' => 15,
					'validate_callback' => function($param, $request, $key) {
						return is_numeric($param);
					}
				]
			];

			///////////////////////////////////////////////////////////////////////////////////////////
			//
			// Your Routes
			//
			///////////////////////////////////////////////////////////////////////////////////////////
			
			// GET /resources
			$get("/resources", function(){
                print_r('sdfdsf');
            });
			
			// // GET /resources/{$id}
			// $get("/resources/{$exampleIdString}", function(WP_REST_Request $request) use ($app) {
			//   return $app(function() use ($request) {
			//      // assert ownership of the resource
			//      // query it, e.g., $resource = Resource::findOrFail($request['id'])
			//      // return it, e.g., return $resource
			//   });
			// });
			
			// // other actions:
			// $post("/resource", function() {}); // CREATE
			// $put("/resource/{$exampleIdString}", function() {}); // UPDATE
			// $delete("resource/{$exampleIdString}", function() {}); // DELETE

		});

	});

});



