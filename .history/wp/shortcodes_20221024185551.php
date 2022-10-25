<?php
add_shortcode('reclaimppi_claim','reclaimppi_claim');
function reclaimppi_claim($arr){
    if(isset($arr) && gettype($arr) == "array" && count($arr) && isset($arr['claim'])){
        $claim = (int) $arr['claim'];
        if($claim){
            print_r($claim);exit;
            $claim_file = get_claim_file(1);
            $doc = new DOMDocument();
            $doc->loadHTMLFile($claim_file);
            load_scripts($doc);
            load_styles($doc);
            echo "<div id='app'></div>";
            return ;
        }
    }

    echo INCORRECT_SHORTCODE;
    
    
}