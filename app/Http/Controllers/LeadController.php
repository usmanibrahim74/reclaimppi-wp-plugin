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

  public function get($id, Request $request){

    if($request->secret != "synergi"){
      return null;
    }

    $post_data = [
      "claimID" => $id,
      "type" => 1,
    ];
    $token = $this->authenticate();



    $headers = [
      'Content-Type: application/json',
      'Accept: application/json',
      'Authorization: Bearer  ' . $token
    ];

    $s = curl_init();
    curl_setopt($s, CURLOPT_URL, $this->getApiUrl('/Claim/Customer/GetByClaimID?claimID='.$id.'&type=1'));
    curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($s, CURLOPT_HTTPHEADER, $headers);
    // curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($post_data));
    $response = curl_exec($s);
    curl_close($s);

    return $response;

  }

  public function lead(Request $request)
  {
    // echo "kabeer";exit;
    // print_r([]);
    // return ;
    $email = $request->email;
    $title = $request->title;
    $first_name = $request->first_name;
    $last_name = $request->last_name;
    $phone_number = $request->phone;
    $dob = $request->year . '-' . $request->month . '-' . $request->day;
    $streat_address = $request->address;
    $postal_code = $request->postcode;
    $referral_code = $request->referral_code;
    $year_1 = $request->year_1;
    $year_2 = $request->year_2;
    $year_3 = $request->year_3;
    $year_4 = $request->year_4;
    $signature = $request->signature;
    $earningLevel = $request->less_earning ? 4 : 3;
    $ni_number = $request->ni_number;

    $years = [];
    if ($year_1) {
      $years[] = [
        "year" => 2019,
        "declaredPPI" => "{$year_1}",
        "declaredPayBeforeTax" => 0
      ];
    }
    if ($year_2) {
      $years[] = [
        "year" => 2020,
        "declaredPPI" => "{$year_2}",
        "declaredPayBeforeTax" => 0
      ];
    }
    if ($year_3) {
      $years[] = [
        "year" => 2021,
        "declaredPPI" => "{$year_3}",
        "declaredPayBeforeTax" => 0
      ];
    }
    if ($year_4) {
      $years[] = [
        "year" => 2022,
        "declaredPPI" => "{$year_4}",
        "declaredPayBeforeTax" => 0
      ];
    }

    $externalID = [
      'id' => $request->externalID ?? "No External ID Given",
      'user_agent' => $request->userAgent(),
      "ip" => $request->ip(),
    ];
    $externalID = json_encode($externalID);



    $post_data = [
      "externalID" => $externalID,
      "claimID" => 0,
      "type"  => 1,
      "referralCode" => "{$referral_code}",
      "company" => 1,
      "source" => $request->source ?? "PetrichorDigital",
      "customerSource" => "Website",
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
          "postcode" => "{$postal_code}",
          "earningLevel" => $earningLevel,
          "ni" => $ni_number
        ]
      ],
      "years" => $years,
    ];
    // print_r(($post_data));exit;

    $token = $this->authenticate();


    $headers = [
      'Content-Type: application/json',
      'Accept: application/json',
      'Authorization: Bearer  ' . $token
    ];

    $s = curl_init();
    curl_setopt($s, CURLOPT_URL, $this->getApiUrl('/Claim/Claim/CreateNew'));
    curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($s, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($post_data));
    $response = curl_exec($s);
    curl_close($s);

    // $authenticate = Http::withHeaders([
    //     'Content-Type' => 'application/json',
    //     ])->post($this->getApiUrl('/Account/Authenticate'), $this->getCredentials());
    //     print_r($post_data);exit;
    // $authenticate = json_decode($authenticate->body(), true);
    // $token = $authenticate['token'];

    // $client = Http::withHeaders([
    //   'Authorization' => 'Bearer ' . $token,
    //   'Accept' => 'application/json',
    //   'Content-Type' => 'application/json',
    // ])->post($this->getApiUrl('/Claim/Claim/CreateNew'), $post_data);


    if ($signature != '') {
      $body = json_decode($response, true);
      // dd($response);
      $customerID = $body["customers"][0]["customerID"];
      $this->uploadSignature($customerID, $signature, $token);
    }
    return ($response);
    exit;
  }


  public function lead2(Request $request)
  {
    // echo "kabeer";exit;
    // print_r([]);
    // return ;
    $email = $request->email;
    $title = $request->title;
    $first_name = $request->first_name;
    $last_name = $request->last_name;
    $phone_number = $request->phone;
    $dob = $request->year . '-' . $request->month . '-' . $request->day;
    $streat_address = $request->address;
    $postal_code = $request->postcode;
    $referral_code = $request->referral_code;
    $year_1 = $request->year_1;
    $year_2 = $request->year_2;
    $year_3 = $request->year_3;
    $year_4 = $request->year_4;
    $signature = $request->signature;
    $earningLevel = $request->less_earning ? 4 : 3;
    $ni_number = $request->ni_number;

    $years = [];
    if ($year_1) {
      $years[] = [
        "year" => 2020,
        "declaredPPI" => "{$year_1}",
        "declaredPayBeforeTax" => 0
      ];
    }
    if ($year_2) {
      $years[] = [
        "year" => 2021,
        "declaredPPI" => "{$year_2}",
        "declaredPayBeforeTax" => 0
      ];
    }
    if ($year_3) {
      $years[] = [
        "year" => 2022,
        "declaredPPI" => "{$year_3}",
        "declaredPayBeforeTax" => 0
      ];
    }
    if ($year_4) {
      $years[] = [
        "year" => 2023,
        "declaredPPI" => "{$year_4}",
        "declaredPayBeforeTax" => 0
      ];
    }

    $externalID = [
      'id' => $request->externalID ?? "No External ID Given",
      'user_agent' => $request->userAgent(),
      "ip" => $request->ip(),
    ];
    $externalID = json_encode($externalID);



    $post_data = [
      "externalID" => $externalID,
      "claimID" => 0,
      "type"  => 1,
      "referralCode" => "{$referral_code}",
      "company" => 1,
      "source" => $request->source ?? "PetrichorDigital",
      "customerSource" => "Website",
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
          "postcode" => "{$postal_code}",
          "earningLevel" => $earningLevel,
          "ni" => $ni_number
        ]
      ],
      "years" => $years,
    ];
    // print_r(($post_data));exit;

    $token = $this->authenticate();


    $headers = [
      'Content-Type: application/json',
      'Accept: application/json',
      'Authorization: Bearer  ' . $token
    ];

    $s = curl_init();
    curl_setopt($s, CURLOPT_URL, $this->getApiUrl('/Claim/Claim/CreateNew'));
    curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($s, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($post_data));
    $response = curl_exec($s);
    curl_close($s);

    // $authenticate = Http::withHeaders([
    //     'Content-Type' => 'application/json',
    //     ])->post($this->getApiUrl('/Account/Authenticate'), $this->getCredentials());
    //     print_r($post_data);exit;
    // $authenticate = json_decode($authenticate->body(), true);
    // $token = $authenticate['token'];

    // $client = Http::withHeaders([
    //   'Authorization' => 'Bearer ' . $token,
    //   'Accept' => 'application/json',
    //   'Content-Type' => 'application/json',
    // ])->post($this->getApiUrl('/Claim/Claim/CreateNew'), $post_data);


    if ($signature != '') {
      $body = json_decode($response, true);
      $customerID = $body["customers"][0]["customerID"];
      $this->uploadSignature($customerID, $signature, $token);
    }
    return ($response);
    exit;
  }

  private function uploadSignature($customerID, $signature, $token)
  {



    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => $this->getApiUrl('/Claim/Customer/Signature'),
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_POSTFIELDS => array('customerID' => $customerID, 'base64' => str_replace('data:image/png;base64,', '', $signature)),
      CURLOPT_HTTPHEADER => array(
        'Authorization: Bearer ' . $token,
      ),
    ));

    $response = curl_exec($curl);
    curl_close($curl);
    return response()->json($response);

    // ->header('Access-Control-Allow-Origin','*');
  }

  private function authenticate()
  {
    $s = curl_init();
    curl_setopt($s, CURLOPT_URL, $this->getApiUrl('/Account/Authenticate'));
    curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($s, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($this->getCredentials()));
    $response = curl_exec($s);
    curl_close($s);
    $authenticate = json_decode($response, true);
    return $authenticate['token'];
  }

  private function getApiUrl($url = '')
  {
    if(request()->test == "true"){
      return "http://reclaimmytax.uat.transitioncomputing.com/api/api" . $url;  
    }
    return "https://reclaimmytax.taxadvisorygroup.co.uk/api/api" . $url;
  }

  private function getCredentials()
  {
    if (request()->test == "true") {
      return [
        'username' => 'reclaimclient',
        'password' => 'Password1'
      ];
    }
    return [
      'username' => 'reclaimclient',
      'password' => 'PasswordL1v3'
    ];
  }

  public function thanks(Request $request)
  {

    $potentialClaims = [];
    if ($request->covid) {
      $potentialClaims[] = [
        "type" => 2
      ];
    }
    if ($request->covid) {
      $potentialClaims[] = [
        "type" => 3
      ];
    }
    if (count($potentialClaims)) {
      $post_data = [
        "claimID" => $request->claim_id,
        "potentialClaims" => $potentialClaims
      ];
      // print_r(($post_data));exit;

      $token = $this->authenticate();


      $headers = [
        'Content-Type: application/json',
        'Accept: application/json',
        'Authorization: Bearer  ' . $token
      ];

      $s = curl_init();
      curl_setopt($s, CURLOPT_URL, $this->getApiUrl('/Claim/Claim/CreateNew'));
      curl_setopt($s, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($s, CURLOPT_HTTPHEADER, $headers);
      curl_setopt($s, CURLOPT_POSTFIELDS, json_encode($post_data));
      $response = curl_exec($s);
      curl_close($s);

      return [
        $response, $post_data
      ];
    }
  }
}
