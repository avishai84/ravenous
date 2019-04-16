
const apiKey = 'D4KbU5XQxdebmhLT6v1re2a3YGqLLEgms1kBYUscNnOOeQbaNbKDP1wsboDtm3Sl9zgKNsmaj8DgDpU5qoIL08-riI_0OGjykYriJMFWFJfRG-77utx-v93GO_m0XHYx';

 const Yelp = {

    search: function(term, location, sortBy){
         return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}` 
              }
        })
        .then((response) => response.json())
        .then((response) => {
            const jsonResponse = JSON.stringify(response); 
            if(jsonResponse.indexOf('businesses') > -1){
                console.log(response)
                return response.businesses.map((business, i) => {
                    return({
                        id: `${business.id}`,
                        imageSrc: `${business.image_url}`,
                        name: `${business.name}`,
                        address: `${business.location.address1}`,
                        city: `${business.location.city}`,
                        state: `${business.location.state}`,
                        zipCode: `${business.location.zip_code}`,
                        category: `${business.categories[0]['title']}`,
                        rating: `${business.rating}`,
                        reviewCount: `${business.review_count}`
                        }  
                    );
                });
            }else{
                return (`${jsonResponse}`);
            }
        
        })
    }
};

export default Yelp;