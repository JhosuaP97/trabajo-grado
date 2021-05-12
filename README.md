Primero entrar en el directorio `client` luego escribir:

### `yarn start` para ejecutar el proyecto.

Estoy haciendo un formulario que crea dinámicamente unos grupos (por ahora hasta 6) y en uno de los campos estoy usando react-select para tomar todos los nombres de los "integrantes" pertenecientes a ese grupo, pero ahora el detalle es que debo hacer que si en un campo de "integrantes" ya aparece un nombre de un integrante no debería aparecer ese nombre en otro campo (mejor dicho, no deben tener los mismos valores).

Lo que he hecho:

1. Dentro del archivo _useGroup.js_ Cree un state llamado _filterNames_ y lo inicio como un arreglo vacio.

2. Luego creo la función handleChangeMultiSelectGroup que recibe un indice y un evento, donde el indice es traido del mapeado del estado groups con este se sabe cual es la fila que se desea actualizar y con el evento se obtiene el nombre del campo y el valor del mismo.

3. Despues hago una copia del todos los grupos, y a este le asigno el indice el nombre del campo y luego modifico los grupos.

4. Luego tomo los "integrantes" de ese campo y los añado al de _filterNames_

5. Creo otra función selectedMembers que lo que hace es recibir un arreglo y devuelve un mapeo con el nombre de los "integrantes"

6. Por último dentro del parametro options del componente _MultiSelectAll_ lo que hago es que me devuelva los nombres de los integrantes que no esten en _filterNames_ .

Tengo un bug porque algunas veces lo toma y otras no.
