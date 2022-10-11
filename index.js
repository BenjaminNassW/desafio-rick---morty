
function Count(){

  var startTime = performance.now()
  let arrLocation=[]
  let count=0
  
  fetch("https://rickandmortyapi.com/api/location")
            .then((res) => res.json())
            .then((data) =>{ 
              for(let i=0;i<data.info.pages;i++){
                fetch("https://rickandmortyapi.com/api/location?page="+i)
              data.results.map((obj) => {
              arrLocation=[...arrLocation,obj.name.toLowerCase()];
              });
              }
              let arr = arrLocation.join('');
              for(let i = 0;i<arr.length;i++){
              if(arr[i]=="l")count++
              }
              console.log("There are "+count+" l")
              })
            .catch((err) => console.error(err))
  
  
  
  
  let arrEpisode=[]
  let count2=0
  fetch("https://rickandmortyapi.com/api/episode")
            .then((res) => res.json())
            .then((data) =>{ 
              for(let i=0;i<data.info.pages;i++){
                fetch("https://rickandmortyapi.com/api/episode?page="+i)
              data.results.map((obj) => {
              arrEpisode=[...arrEpisode,obj.name.toLowerCase()];
              })};
              let arr = arrEpisode.join('');
              for(let i = 0;i<arr.length;i++){
              if(arr[i]=="e")count2++
              }
              console.log("There are "+count2+" e")})
            .catch((err) => console.error(err))

            
  
  
  let locations=[]
  let count3=0
  fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) =>{ 
            for(let i=0;i<data.info.pages;i++){
                fetch("https://rickandmortyapi.com/api/character?page="+i)
              data.results.map((obj) => {
              locations=[...locations,obj.name.toLowerCase()];
              })};
              let arr = locations.join('');
              for(let i = 0;i<arr.length;i++){
              if(arr[i]=="c")count3++
              }
              console.log("There are "+count3+" c")})
            .catch((err) => console.error(err))
  var endTime = performance.now()
  console.log(`Call to count took ${endTime - startTime} milliseconds`)
  }
