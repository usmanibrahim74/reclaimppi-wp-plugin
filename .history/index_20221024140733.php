<?php
/**
* Plugin Name: ReclaimPPI
* Description: ReclaimPPI.
* Version: 0.1
* Author: SynergiDigital
* Author URI: http://synergidigital.com
**/

define('PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CLAIMS_DIR', PLUGIN_DIR."public/dist/");

function get_claim_content($claim_number = null){
    $claim_number = (int) $claim_number;
    if(!$claim_number){
        return "";
    }
    $claim_dir = CLAIMS_DIR."claim$claim_number/";
    $claim_file = $claim_dir."index.html";
}


add_shortcode('reclaimppi_claim_1','reclaimppi_claim_1');
function reclaimppi_claim_1(){
    
    $content = "";
}

