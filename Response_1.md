Hi {{Client_Name}},

Thanks for writing in, I'm more than happy to help you out with this.

After taking a look at your code snippet, it looks like you're almost there. You're receiving a 402Error since you haven't turned on or selected any MFA types. Please reference the sample below:

```js
client := plaid.NewClient("test_id", "test_secret", plaid.Tartan)

// POST /auth
postRes, mfaRes, err := client.AuthAddUser("plaid_test", "plaid_good", "", "bofa", nil)
if err != nil {
    fmt.Println(err)
} else if mfaRes != nil {
    /api/#auth-mfa.
    switch mfaRes.Type {
    case "device":
        fmt.Println("--Device MFA--")
        fmt.Println("Message:", mfaRes.Device.Message)
    case "list":
        fmt.Println("--List MFA--")
        fmt.Println("Mask:", mfaRes.List[0].Mask, "\nType:", mfaRes.List[0].Type)
    case "questions":
        fmt.Println("--Questions MFA--")
        fmt.Println("Question:", mfaRes.Questions[0].Question)
    case "selections":
        fmt.Println("--Selections MFA--")
        fmt.Println("Question:", mfaRes.Selections[1].Question)
        fmt.Println("Answers:", mfaRes.Selections[1].Answers)
    }
``` 
Hope this helps out! Let me know if you have any further questions.

Best,

Jared