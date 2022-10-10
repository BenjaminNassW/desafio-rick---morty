function buscaCharL(){
    let arrLocation=[]
    let count=0
    fetch("https://rickandmortyapi.com/api/location")
              .then((res) => res.json())
              .then((data) =>{ 
                data.results.map((obj) => {
                arrLocation=[...arrLocation,obj.name.toLowerCase()];
                });
                let arr = arrLocation.join('');
                for(let i = 0;i<arr.length;i++){
                if(arr[i]=="l")count++
                }
                console.log(count)})
              .catch((err) => console.error(err))
    
    
    }