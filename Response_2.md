Hi {{Client_Name}},

Thank you for reaching out to the Plaid Support Team! Apologies for the difficulties you've been having, but let's make sure we get them quickly sorted for you :).

Diving into your code, it looks as though you're not passing in an ```access_token``` parameter. This is a required parameter, and must be included in the POST as shown below:

```curl
curl -X POST https://tartan.plaid.com/auth/step \
  -d client_id={CLIENT_ID} \
  -d secret={SECRET} \
  -d access_token={ACCESS_TOKEN} \
  -d mfa="Sarah" \
  -d options='{
        "login_only":true,
        "webhook":"http://requestb.in/" }'
```

This should help, but please let me know if you're still experiencing issues of any sort. Don't hesitate to reach back out! 

Best,

Jared

PS. Our error codes are housed [here](https://support.plaid.com/customer/en/portal/topics/973215-error-code-resolution/articles), just in case you happen to run into any speedbumps. 