<?php


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
    $tag = '<link rel="modulepreload" crossorgin href="' . esc_url( $src ) . '"></link>';
    return $tag;
}