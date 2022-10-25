<?php
/**
* Plugin Name: ReclaimPPI
* Description: ReclaimPPI.
* Version: 0.1
* Author: SynergiDigital
* Author URI: http://synergidigital.com
**/

add_shortcode('synergi_ppi_tax','synergi_ppi_tax_fun');
function synergi_ppi_tax_fun($arr){
    require_once 'shortcodes/form.php';
}