<?php
/**
* Plugin Name: ReclaimPPI
* Description: ReclaimPPI.
* Version: 0.1
* Author: SynergiDigital
* Author URI: http://synergidigital.com
**/

define('PLUGIN_DIR', plugin_dir_path(__FILE__));

add_shortcode('reclaimppi_claim_1','reclaimppi_claim_1');
function reclaimppi_claim_1($arr){
    print_r(PLUGIN_DIR);
    $content = "";
}