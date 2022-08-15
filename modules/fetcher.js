export default function fetchData(requestData, url) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                console.log('terrr:', data);
                return data;
            }, 0);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
