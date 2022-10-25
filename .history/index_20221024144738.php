<?php
/**
* Plugin Name: ReclaimPPI
* Description: ReclaimPPI.
* Version: 0.1
* Author: SynergiDigital
* Author URI: http://synergidigital.com
**/

define('PLUGIN_DIR', plugin_dir_path(__FILE__));
define('CLAIMS_DIR', PLUGIN_DIR."public/dist");
define('PLUGIN_URL', plugin_dir_url(__FILE__));
define('CLAIMS_URL', PLUGIN_URL."public/dist");


define('RECLAIM_MODULE_SCRIPT', "RECLAIM_MODULE_SCRIPT");
define('RECLAIM_SCRIPT', "RECLAIM_SCRIPT");

function get_claim_file($claim_number = null){
    $claim_number = (int) $claim_number;
    if(!$claim_number){
        return "";
    }
    $claim_dir = CLAIMS_DIR."/claim$claim_number/";
    $claim_file = $claim_dir."index.html";
    // $content = file_get_contents($claim_file);
    return $claim_file;
}
add_filter('script_loader_tag', 'add_type_attribute' , 10, 3);
function add_type_attribute($tag, $handle, $src) {
    if ( RECLAIM_MODULE_SCRIPT !== $handle ) {
        return $tag;
    }
    $tag = '<script type="module" crossorgin src="' . esc_url( $src ) . '"></script>';
    return $tag;
}


add_shortcode('reclaimppi_claim_1','reclaimppi_claim_1');
function reclaimppi_claim_1(){
    $doc = new DOMDocument();
    $claim_file = get_claim_file(1);
    $doc->loadHTMLFile($claim_file);
    $scripts = $doc->getElementsByTagName('script');
    foreach($scripts as $script){
        $script_url = CLAIMS_URL.$script->getAttribute('src');
        $type = $script->getAttribute('type');
        if($type == "module"){
            wp_enqueue_script( RECLAIM_MODULE_SCRIPT,$script_url, array(), '11',  true );
        }else{
            wp_enqueue_script( RECLAIM_SCRIPT,$script_url, array(), '11',  true );
        }
        
    }

    $scripts = $doc->getElementsByTagName('link');
    print_r($scripts);
    $link_sources = [];
    foreach($scripts as $script){
        $link_sources[] = CLAIMS_URL.$script->getAttribute('src');
    }
    var_dump($link_sources);
}

