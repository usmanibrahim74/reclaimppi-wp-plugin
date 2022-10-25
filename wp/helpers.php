<?php 
function get_claim_file($claim_number = null){
    $claim_number = (int) $claim_number;
    if(!$claim_number){
        return "";
    }
    $claim_dir = CLAIMS_DIR."/claim$claim_number/";
    $claim_file = $claim_dir."index.html";
    // print_r($claim_file);exit;
    // $content = file_get_contents($claim_file);
    return $claim_file;
}
function load_scripts(DOMDocument $doc){
    $scripts = $doc->getElementsByTagName('script');

    // print_r($scripts);exit;
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
    $link_sources = [];
    foreach($scripts as $script){
        $href = $script->getAttribute('href');
        $rel = $script->getAttribute('rel');
        if($href){

            $style_url = CLAIMS_URL.$href;

    // print_r($style_url);exit;
            if($rel == "modulepreload"){
                wp_enqueue_style( RECLAIM_MODULEPRELOAD_STYLE,$style_url, array(), '11',  true);
            }else{
                wp_enqueue_style( RECLAIM_STYLE,$style_url );

            }
        }
        
    }
}