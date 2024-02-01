export async function getAllStarships() {
    const apiUrl = 'https://swapi.dev/api/starships/';
    
    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`I have a bad feeling about this... Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Do or do not, there is no try:', error);
      throw error;
    }
  }