// data.js
const levelsData = {
  alldata: [
    { id: '100' , level: 1, label: 'Personal'},
    { id: '200' , level: 1, label: 'Work' },
    { id: '300' , level: 1, label: 'Projects' },
    { id: '400' , level: 1, label: 'College'},
      { id: '410' , level: 2, label: '(lvl 2) Math'}, //
    { id: '500' , level: 1, label: 'Hobbies'},
      { id: '510' , level: 2, label: '(lvl 2) Games'}, 
  ],

    Testing: [
      { label: 'element 1' },
      { label: 'element 2' },
      { label: 'element 3' },
      { label: 'element 4' }
    ],
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
FILTRO 1 = cual es el valor de la propiedad level =  `2` 
entonces `2++` filtro los del  `level3`

FILTRO 2= cual es el id del click? `110` = 
ok, entonces el dato numero de la posicion `2`  
que es  `1`  y filtro aquellos id que tengan en la 
posicion `2` el `1`

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

*/