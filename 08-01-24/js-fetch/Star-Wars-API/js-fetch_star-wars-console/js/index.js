console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log("the response: ", response);

    const data = await response.json();
    console.log("data: ", data);


    const results = data.results;
    console.log("results: ", results);


    console.log(results[2].eye_color);
  } catch {
    console.log("error");
  }
}

fetchData();

// async function fetchSomething() {
//   try {
//     const response = await fetch("/bad/url/oops");

//     if (response.ok) {
//       // Success (Good Response)
//       const data = await response.json();
//       return data;
//     } else {
//       // Failure (Bad Response)
//       console.error("Bad Response");
//     }
//   } catch (error) {
//     // Failure (Network error, etc)
//     console.error("An Error occurred");
//   }
// }
