<?php
   /*
   * Collect all Details from Angular HTTP Request.
   */
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$message = $request->text;

    $to      = 'info@francescanucciarelli.it';
    $subject = 'Francesca Nucciarelli';

    echo mail($to, $subject, $message, $headers);

?>
