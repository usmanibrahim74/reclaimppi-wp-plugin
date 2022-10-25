<?php
add_shortcode('reclaimppi_claim','reclaimppi_claim');
function reclaimppi_claim($arr){
    if(isset($arr) && gettype($arr) == "array" && count($arr) && isset($arr['claim'])){
        $claim = (int) $arr['claim'];
        if($claim){
            $claim_file = get_claim_file($claim);
            $doc = new DOMDocument();
            $doc->loadHTMLFile($claim_file);

            add_action( 'reclaim_enqueue_scripts', function() );
            load_scripts($doc);
            load_styles($doc);
            ob_start();
            include PLUGIN_DIR.'public/claim.php' ;
            return ob_get_clean();
        }
    }

    echo INCORRECT_SHORTCODE;
    
    
}


function reclaim_enqueue_scripts() {
    wp_enqueue_script( 'ajax-script', get_stylesheet_directory_uri() . '/js/synergi_custom_scripts.js', array('jquery') );
    
}
