<?php

namespace App\Http\Controllers;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }


    public function index()
    {



        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $user_ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $user_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $user_ip = $_SERVER['REMOTE_ADDR'];
        }

        // ------------------------------------------------
        // Get current page
        $actual_link = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        //echo $actual_link;

        // ------------------------------------------------
        // Generate Json code to provide
        // $submitJson = '{  "data": [    {      "action_source": "website",      "event_id": 3445,      "event_name": "ViewContent",      "event_time": 1676899305,      "user_data": {        "client_user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1",        "em": "f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"      }    }  ],  "test_event_code": "TEST7561"}';
        $submitJson = '{
            "data": [
                        {
                            "action_source": "website",
                            "event_id": ' . time() . ',
                            "event_name": "Lead",
                            "event_time": ' . time() . ',
                            "event_source_url": "' . $actual_link . '",
                            "user_data": {
                                "client_ip_address": "' . $user_ip . '",
                                "client_user_agent": "' . $_SERVER['HTTP_USER_AGENT'] . '"
                            }
                        }
                    ]
        }';

        // ------------------------------------------------
        // Set the Facebook Conversions API URL
        $url = "https://graph.facebook.com/v16.0/3550277378542891/events";

        // ------------------------------------------------
        // Use cURL to send the POST request

        $_curl_ = new CurlServer();
        $_curl_->post_request($url, $submitJson);
    }
    //
}
