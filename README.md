# This is the Machine test of Internettoons

The api call be like this: http://localhost:3000/api/project1/sp=getCustomers?custid=1

The sample response be like: 
{
    "response": {
        "user": [
            {
                "userId": 1,
                "name": "shahabaz kc",
                "email": "shahabazkc@gmail.com"
            }
        ],
        "address": [
            {
                "sl_no": 1,
                "userId": 1,
                "city": "Kuthuparamba",
                "street": "Sbi Branch Thokkilangadi",
                "pincode": 670643,
                "number": "7907408674"
            },
            {
                "sl_no": 3,
                "userId": 1,
                "city": "Kakkanad",
                "street": "edachira junction",
                "pincode": 672020,
                "number": "7964564344"
            }
        ],
        "status": true
    }
}
