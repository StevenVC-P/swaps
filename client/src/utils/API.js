import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    scrapeURL: function(query) {
        return axios.get('https://app.scrapingbee.com/api/v1', {
            params: {
                'api_key': 'EYMXF6OZH9PGRM44C86M64AEWWF6FJTJAPTRVV2253J9Y48NGY2PFQNDE1G8RQQEHBX5Q1AD5P4EK2D3',
                'url': 'https://www.blueland.com/products/garden-hand-soap-duo',  
                "json_response": true,
                "render_js": false
            } 
        }).then(function (response) {
            // handle success
            console.log(response);
            return response
        });
    }
}