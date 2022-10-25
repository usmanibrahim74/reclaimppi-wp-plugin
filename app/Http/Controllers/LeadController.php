<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LeadController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function lead(Request $request)
    {
      $email=$request->email;
      $title=$request->title;
      $first_name=$request->first_name;
      $last_name=$request->last_name;
      $phone_number=$request->phone;
      $dob=$request->year.'-'.$request->month.'-'.$request->day;
      $streat_address=$request->address;
      $postal_code=$request->postcode;
      $referal_code = $request->referal_code;
      $year_2019 = $request->year_2019;
      $year_2020 = $request->year_2019;
      $year_2021 = $request->year_2021;
      $year_2022 = $request->year_2022;

      $post_data = [
        "type"  => 1,
        "referalCode" => "{$referal_code}",
        "company"=> 1,
        "source" => "google",
        "customerSource" => "website",
        "customers" => [
          [
            "type" => 1,
            "title" => "{$title}",
            "firstName" => "{$first_name}",
            "lastName" => "{$last_name}",
            "phoneNumber" => "{$phone_number}",
            "email" => "{$email}",
            "dob" => "{$dob}",
            "address1" => "{$streat_address}",
            "postcode" => "{$postal_code}"
          ]
        ],
        "years" => [
          [
            "year" => 2019,
            "declaredPPI" => "{$year_2019}"
          ],
          [
            "year" => 2020,
            "declaredPPI" => "{$year_2020}"
          ],
          [
            "year" => 2021,
            "declaredPPI" => "{$year_2021}"
          ],
          [
            "year" => 2022,
            "declaredPPI" => "{$year_2022}"
          ],
        ],
      ];

      $credentials = [
        'username' => 'reclaimclient',
        'password' => 'PasswordL1v3'
      ];

      $s = curl_init();
      curl_setopt($s, CURLOPT_URL, 'https://reclaimmytax.taxadvisorygroup.co.uk/api/api/Account/Authenticate');
      curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($s, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
      curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($credentials));
      $response = curl_exec($s);
      curl_close($s);
      $authenticate = json_decode($response, true);
      $token = $authenticate['token'];



      $s = curl_init();
      curl_setopt($s, CURLOPT_URL, 'https://reclaimmytax.taxadvisorygroup.co.uk/api/api/Claim/Claim/CreateNew');
      curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($s, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/jso',
        'Authorization: Bearer  ' . $token
      ]);
      curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($post_data));
      $response = curl_exec($s);
      curl_close($s);
      return $response;

    //   $authenticate = Http::withHeaders([
    //       'Content-Type' => 'application/json',
    //       ])->post($this->getApiUrl('/Account/Authenticate'), $this->getCredentials());
    //       print_r($post_data);exit;
    //   $authenticate = json_decode($authenticate->body(), true);
    //   $token = $authenticate['token'];

    //   $client = Http::withHeaders([
    //     'Authorization' => 'Bearer ' . $token,
    //     'Accept' => 'application/json',
    //     'Content-Type' => 'application/json',
    //   ])->post($this->getApiUrl('/Claim/Claim/CreateNew'), $post_data);
    //   return $client->json();
    }

    private function getApiUrl($url = ''){
        return "https://reclaimmytax.taxadvisorygroup.co.uk/api/api".$url;
    }

    private function getCredentials(){
        return [
          'username' => 'reclaimclient',
          'password' => 'PasswordL1v3'
        ];
     }
}
