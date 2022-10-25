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

$url = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
$match = $_SERVER['SERVER_NAME']."/ReclaimPPI";

// var_dump($url,$match);exit;
if(strpos($url,$match) !== false){
    require_once('public/index.php');
    exit;
}
