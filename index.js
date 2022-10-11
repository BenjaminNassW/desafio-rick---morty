function buscaLocation() {
  var startTime = performance.now()
  let arrLocation = []
  let count = 0
  fetch("https://rickandmortyapi.com/api/location")
    .then((res) => res.json())
    .then((data) => {
      data.results.map((obj) => {
        arrLocation = [...arrLocation, obj.name.toLowerCase()];
      });
      let arr = arrLocation.join('');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "l") count++
      }
      console.log(count)
    })
    .catch((err) => console.error(err))
  var endTime = performance.now()
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
}


function buscaEpisode() {
  var startTime = performance.now()
  let arrEpisode = []
  let count = 0
  fetch("https://rickandmortyapi.com/api/episode")
    .then((res) => res.json())
    .then((data) => {
      data.results.map((obj) => {
        arrEpisode = [...arrEpisode, obj.name.toLowerCase()];
      });
      let arr = arrEpisode.join('');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "e") count++
      }
      console.log(count)
    })
    .catch((err) => console.error(err))
  var endTime = performance.now()
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
}

function buscaCharacter() {
  var startTime = performance.now()
  let array = []
  let count = 0
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      data.results.map((obj) => {
        array = [...array, obj.name.toLowerCase()];
      });
      let arr = array.join('');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "e") count++
      }
      console.log(count)
    })
    .catch((err) => console.error(err))
  var endTime = performance.now()
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
}