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
    
    En el archivo ContadorScreens  creamos un View con:

    ```javascript	
    {
        flex: 1,
        backgroundColor:'red',
    }
    ```	