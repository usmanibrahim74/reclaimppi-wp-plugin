<?php


namespace App\Http\Controllers;

class CurlServer
{
    private $access_token;

    function __construct()
    {
        $this->access_token = "EAAj5tY0IB64BABrTYQzfB3fR1bLUZAql0FznawCtzUAy5ksjEIT6bAUURhYNvD2iSS155p3zPBjNkfZAYyZCdLdXhE9UhpYN94bg5jHm7v8Uiu0BWfde8Mfhmeo92qoUQdbKPDGZBhsuqu6KkfLgssqeujRZCjIn1korOHc4cVLgVZBgQJ5khRG9j7R6fKt5sZD";
    }

    function post_request($url, $submitJson)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $submitJson);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $this->access_token, 'Content-Type: application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output = curl_exec($ch);
        curl_close($ch);
        $serverReponseObject = json_decode($server_output);

        // Debug
        //print_r ( $server_output );
        print_r($serverReponseObject);
    }
    function get_request($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, false);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $this->access_token));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output = curl_exec($ch);
        curl_close($ch);
        $serverReponseObject = json_decode($server_output);

        // Debug
        //print_r ( $server_output );
        print_r($serverReponseObject);
    }
}