<?php
add_shortcode('reclaimppi_claim','reclaimppi_claim');
function reclaimppi_claim($arr){
    if(isset($arr) && gettype($arr) == "array" && count($arr) && isset($arr['claim'])){
        $claim = (int) $arr['claim'];
        if($claim){
            $claimName = "claim$claim";
            $claim_file = get_claim_file($claimName);
            $doc = new DOMDocument();
            $doc->loadHTMLFile($claim_file);

            // add_action( 'wp_enqueue_scripts', function()use($doc){
                load_scripts($doc);
                load_styles($doc);
            // } );
            
            ob_start();
            include PLUGIN_DIR.'public/claim.php' ;
            return ob_get_clean();
        }
    }

    echo INCORRECT_SHORTCODE;
    
    
}

add_shortcode('reclaimppi_unbounce','reclaimppi_unbounce');
function reclaimppi_unbounce($arr){
    if(isset($arr) && gettype($arr) == "array" && count($arr) && isset($arr['claim'])){
        $claim = $arr['claim'];
        if($claim){
            $claim_file = get_claim_file($claim);
            $doc = new DOMDocument();
            $doc->loadHTMLFile($claim_file);

            // add_action( 'wp_enqueue_scripts', function()use($doc){
                load_scripts($doc);
                load_styles($doc);
            // } );
            
            ob_start();
            include PLUGIN_DIR.'public/claim.php' ;
            return ob_get_clean();
        }
    }

    echo INCORRECT_SHORTCODE;
    
    
}
