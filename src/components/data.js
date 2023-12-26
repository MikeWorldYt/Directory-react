// data.js
const levelsData = {
  alldata: [
    { id: '100' , level: 1, label: 'Personal', data: [
      { id: '110' , level: 2, label: 'Documentation' }
    ] },

    { id: '200' , level: 1, label: 'Work', data: [
      { id: '210' , level: 2, label: 'Photography', data:[
        { id: '211' , level: 3, label: 'Travel Photography', data:[
          { id: '211_01' , level: 4, label: 'Japan (testing)'},
        ] },
      ] },
      { id: '220' , level: 2, label: 'Frontend', data:[
        { id: '221' , level: 3, label: 'React (Testing)' },
      ]
    },
    ] },

    { id: '300' , level: 1, label: 'Projects' , data: [

    ] },

    { id: '400' , level: 1, label: 'College', data: [
      { id: '410' , level: 2, label: 'Lenguage'},
      { id: '420' , level: 2, label: 'ForeignLenguage'},
      { id: '430' , level: 2, label: 'Math'},
    ] },

    { id: '500' , level: 1, label: 'Hobbies', data: [
      { id: '510' , level: 2, label: '(lvl 2) Games'}, 
    ] }
  ]
};
  
export default levelsData;

/*

  X     X     X
  1     2     0
  lv1  lv2   lv3
*/

/*
# Segunda columna - pinta la tercera
siguiendo esa logica seria:

click en `Rojos`

`<li id: '110' , level: '2' ><Rojos> </></>`
FILTRO 1 = 
✅ toma el valor de la propiedad id =  `2` 
✅ entonces `2++` y devuelve  `level3`
  (levelsData[allData] || []).filter((obj) => obj.id === "200")

FILTRO 2= cual es el id del click? `110` = 
ok, entonces el dato numero de la posicion `2`  
que es  `1`  y filtro aquellos id que tengan en la 
posicion `2` el `1`

  (levelsData[allData] || []).filter((obj) => obj.id.startsWith(4))

RESULTADO: devuelvo un array nuevo con:
```
[  { id: 112 , level: 3, label: 'Ruby' },
    { id: 113 , level: 3, label: 'Carmesi' } ]
```
INNER: ahora donde pinto? = 
- toma la propiedad actual `level: '2'`
- `2++`  = `3` 
entonces tomas id  `level${3}` = `level 3` y pintas alli el `<ul><li></></>`
con  `el nuevo array`

```html
<li id: '112' , level: '3' ><Rubi> </></>
<li id: '113' , level: '3' ><Carmesi> </></>
```



function getNumberPosition(num, pos) {
  const position = pos - 1
  const number = `${num}`
  const capture = number.codePointAt(`${position}`);

  if (position.length >= 4) {
      return `nothing`
  } 
    
  `el numero de la posición ${pos} es: ${String.fromCodePoint(`${capture}`)}`


}

function getNumberPosition(num, pos) {
  const position = pos - 1
  const number = `${num}`
  const capture = number.codePointAt(`${position}`);

  if(number.length >= 3 ){
  return `el numero de la posición ${pos} es: ${String.fromCodePoint(`${capture}`)}`
  } 
  else if(number.length <= 4 ) {
    return `number.length <= 4`
  }
  
  else {
    return `parametros inavlidos`
  }
    return `fuera`
}

*/