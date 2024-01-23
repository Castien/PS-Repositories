  const inputThing = document.querySelector(".inputHere");
  const buttonThing = document.querySelector(".thingybutton");

  buttonThing.addEventListener("click", translate);

  const apiURL = "https://api.funtranslations.com/translate/yoda.json";

  function translate() {

    let inputText = inputThing.value;

    const newURL = `${apiURL}?text=${encodeURIComponent(inputText)}`;

    fetch(newURL)
      .then(response => response.json())
      .then(data => {
        if (data && data.contents.translated) {
          console.log(data.contents.translated);
          showResponse(data.contents.translated);
        } else {
          throw new Error('I have a bad feeling about this...');
        }
      })
      .catch(error => {
        console.error('That is why you fail.', error);
      });
  }

  function showResponse (translatedText) {
    const outputElement = document.querySelector('.outputHere');
    if (outputElement) {
      outputElement.textContent = translatedText;
    }
  }