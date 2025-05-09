---
layout: post
title: Creación de Fluent UI Dark CSS para Markdown
description: Explicación del proceso para diseñar un CSS basado en Fluent UI en modo oscuro.
categoria: Desarrollo
fechapublicacion: 2025-04-02
fechamodificacion: 2025-04-03
etiquetas: CSS, Fluent UI, Markdown
---

# Creación de Fluent UI Dark CSS para Markdown

Fluent UI es el lenguaje de diseño moderno de Microsoft, caracterizado por su estética limpia, tipografía clara y efectos sencillos.
En este proyecto, se diseñó un **tema oscuro inspirado en Fluent UI**, adaptado para ser utilizado en sitios generados con **Jekyll y Markdown**, sin necesidad de librerías externas ni JavaScript adicional.

## 1. Objetivo del Estilo

El objetivo es replicar la sensación de **Fluent UI**:
- Respetando la **tipografía "Segoe UI"**.\
- Manteniendo un **modo oscuro accesible**.\
- Incluyendo **botones, tarjetas y enlaces con efectos suaves**.\
- Mejorando estilos de **código (**`**, **`**) y tablas**.
- Sin perder rendimiento en la carga del **portafolio**.

## 2. Estructura del Archivo CSS

El archivo `fluent-dark.css` contiene:

### **1. Estilos Base**

```css
body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #1e1e1e;
    color: #f3f2f1;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}
```

### **2. Barra de Navegación**

```css
nav {
    background-color: #005a9e;
    color: #ffffff;
    padding: 16px 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
```

### **3. Botones**

```css
button, .btn {
    background-color: #0078d4;
    color: #ffffff;
    font-weight: 600;
    padding: 10px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.1s ease;
}
button:hover {
    background-color: #005a9e;
    transform: scale(1.03);
}
```

### **4. Tablas**

```css
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #252526;
}
th, td {
    padding: 12px;
    border: 1px solid #3e3e3e;
}
th {
    background-color: #0078d4;
    color: #ffffff;
}
```

## Implementación en Jekyll

Para aplicar este CSS a todo el sitio, primero el archivo `fluent-dark.css` se debe guardar en `_assets/css/`
Luego, se debe incluir en el head de los archivos html de los que corresponda:
Por defecto en `_layouts/default.html`.
Implementado actualmente en `_layouts/tm638231-default.html`.

```html
<link rel="stylesheet" href="/assets/css/fluent-dark.css">
```

## Resultado Final

Al aplicar lo anterior, este portafolio obtiene un estilo similar a Fluent UI siendo desarrollado en MarkDown.

### **Conclusión**

Al ser un estilo basado en **Fluent UI** brinda una experiencia visual limpia y moderna. Además que al no utilizar librerías externas ni javascript adicional permite una navegación fluida en el entorno MarkDown sin afectar el rendimiento.

### **Planes Futuros**

En el futuro quisiera agregar **modo claro/oscuro dinámico**.
