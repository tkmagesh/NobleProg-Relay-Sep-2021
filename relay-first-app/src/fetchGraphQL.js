async function fetchGraphQL(text, variables){
    const response = await fetch('https://pet-library.moonhighway.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            query: text,
            variables : variables
        })
    });

    return await response.json();
}

export default fetchGraphQL;