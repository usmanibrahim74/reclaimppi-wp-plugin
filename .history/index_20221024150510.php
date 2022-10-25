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




add_shortcode('reclaimppi_claim_1','reclaimppi_claim_1');
function reclaimppi_claim_1(){
    $claim_file = get_claim_file(1);
    $doc = new DOMDocument();
    $doc->loadHTMLFile($claim_file);
    load_scripts($doc);
    load_styles($doc);
    echo "<div id='app'></div>";
    
}

