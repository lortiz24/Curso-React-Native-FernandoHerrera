# Curso de React Native

Aorganizaremos esto por titulo de videos del curso

## 50. Hola mundo

para ponerle estilo usamos el style = {}
Los estilos se nombran con camilcase

Ejmplo: le ponemos ese estilo a un View

```javascript
{
    flex:1
    backgroundColor:'red',
    justifyContent: 'center',
}
```

Y ahora este a un Text

```javascript
{
    fontSize:45,
    textAlign: 'center',
}
```

## 51. Crear pantallas independientes

1. Aqui creamos una carpeta src
   1. Creamos dentro de src la carpeta screens y components
   2. En screens creamos HolaMundoScreens.tsx y alli pegamos el return del app.tsx
   3. En App iportamos el holaMundo...

## 52. Crear un contador

1. En la carpeta screens creamos un archivo llamado ContadorScreens.tsx

   En el archivo ContadorScreens creamos un View con:

   ```javascript
   {
       flex: 1, //Esto para que abarque todo el tamaño
       justifyContent:'center'
   }
   ```

   Al Text le colocamos el style de:

```javascript
    {
        textAlign: 'center',
        fontSize:40,
        position: 'relative', //Esto no es necesario ya que todos los elementos en React native tiene la position e relative
        top: 100,
    }
```

2. Creamos un useState para manejar el contador
Esta es la plantilla para configurarlo
```javascript
<Button
  title="Learn More"
  onPress={onPressLearnMore}
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```
## 54. TouchableOpacity

Estaaremos trabajando con touchableOpacity.

touchableOpacity lo hace un poco transparente.

1. Llamamos el componente touchableOpacity y le ponemos como hijo un Text 

2.  Al touchableOpacity le colocamos un onPress que haga setContador +1

3. Ahora crearemos un boton Personalizado con View (Los textos hay que enmarcarlos en un componente de texto, no se muestran asi como asi)

    1. Al view le colocamos un backgroundColor red y un borderRadius de 100

## 55. StyleSheet

¿Como podemos reutilizar el codigo y centralizarlo?

1. Importamos en el ContadorSccreen el StyleSheet
2. Usualmente se coloca al final del componente, creamos el eso con StyleSheet.create y lo guardamos en una variable llamda styles y le pasamos al metodo como parametro un objeto de la siguiente manera:

```javascript
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    }
});
```
3. En la etiqueta style del componente que queramos estilizar, le pasamos el ``style.container``


## 56. Boton personalizado flotante

Este elemento no existe como tal, sino que tenemos que crearlo. Se puede usar un paquete de terceros pero en este ccaso vamos a crearlo nosotros

1. Vamos a comentar el bottonIncrement del style y vamos a crear un style.fab
    1. Le agregamos un backgroundColor #5856D6
    2. width de 60
    3. height de 60
    4. borderRadius de 100
    5. justifyContent center y eso hace que se centro arriba y abajo
2. Agregamos un style.fabText que sirve para el text dentro del touchableOpacity
    1. color white
    2. fontSize de 25
    3. fontWeight de bold
    4. Le agregamos alignSelf center para que el texto se centro dentro de la bolita 
3. Creamos dentro del styleSheet un fabLocationBL  que es para el touchableOpacity
    1. Aqui le colocamos un position absolute, basado en el padre
    2. bottom en 0, le decimos que lo ponganal final del padre
    3. right de 0 para que este al inicio contando de derecha a izquierda basado en la posicon del padre
