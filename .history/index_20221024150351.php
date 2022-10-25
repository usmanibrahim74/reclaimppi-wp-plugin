<?php
/**
* Plugin Name: ReclaimPPI
* Description: ReclaimPPI.
* Version: 0.1
* Author: SynergiDigital
* Author URI: http://synergidigital.com
**/

include_once('wp/constants.php');
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
function load_scripts(DOMDocument $doc){
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
}


function load_styles(DOMDocument $doc){
    $scripts = $doc->getElementsByTagName('link');
    // print_r($scripts);
    $link_sources = [];
    foreach($scripts as $script){
        $href = $script->getAttribute('href');
        $rel = $script->getAttribute('rel');
        if($href){
            $style_url = CLAIMS_URL.$href;
            if($rel == "modulepreload"){
                wp_enqueue_style( RECLAIM_PREMODULE_STYLE,$style_url, array(), '11',  true );
            }else{
                wp_enqueue_style( RECLAIM_STYLE,$style_url, array(), '11',  true );

            }
        }
        
    }
}
add_filter('script_loader_tag', 'add_reclaim_script_tag' , 10, 3);
function add_reclaim_script_tag($tag, $handle, $src) {
    if ( RECLAIM_MODULE_SCRIPT !== $handle ) {
        return $tag;
    }
    $tag = '<script type="module" crossorgin src="' . esc_url( $src ) . '"></script>';
    return $tag;
}
add_filter('style_loader_tag', 'add_reclaim_style_tag' , 10, 3);
function add_reclaim_style_tag($tag, $handle, $src) {
    if ( RECLAIM_PREMODULE_STYLE !== $handle ) {
        return $tag;
    }
    $tag = '<link rel="premodule" crossorgin href="' . esc_url( $src ) . '"></link>';
    return $tag;
}



add_shortcode('reclaimppi_claim_1','reclaimppi_claim_1');
function reclaimppi_claim_1(){
    $claim_file = get_claim_file(1);
    $doc = new DOMDocument();
    $doc->loadHTMLFile($claim_file);
    load_scripts($doc);
    load_styles($doc);
    echo "<div id='app'></div>";
    
}

