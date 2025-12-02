# CRUD con JavaScript Vanilla

Proyecto de ejemplo que implementa un CRUD (Create, Read, Update, Delete) usando:
- HTML5 + Bootstrap 5
- JavaScript (Vanilla, ES6 Modules)
- Persistencia local opcional con `localStorage`
- Control de versiones con Git (instrucciones abajo)

  
## Requisitos
- Navegador moderno (Chrome, Firefox, Edge)
- No necesita servidor, funciona abriendo `index.html`
- (Opcional) VS Code para edición

## Cómo ejecutar
1. Clonar o descargar el repositorio.
2. Abrir `index.html` en un navegador.
3. Usar el formulario para agregar, editar y eliminar registros.
4. Los datos se guardan en `localStorage` (persisten al recargar).

## Git — comandos básicos usados en el proyecto
```bash
git init
git add .
git commit -m "Estructura inicial del proyecto"
git commit -m "Agregar UI y Data.json"
git commit -m "Implementar READ (cargarTabla)"
git commit -m "Implementar CREATE (agregarGift)"
git commit -m "Implementar UPDATE (MostrarModal + giftUpdate)"
git commit -m "Implementar DELETE (BorrarGift)"


---

# 4) Comandos Git completos 

```bash
# 1. Inicializar repo
git init

# 2. Añadir archivos
git add .

# 3. Primer commit (estructura)
git commit -m "Estructura inicial: index.html, js, Data.json, clases.js"

# 4. Implementación parcial (ejemplo: UI y READ)
git add .
git commit -m "Implementada UI y función cargarTabla() (READ)"

# 5. Implementar CREATE
git add .
git commit -m "Implementada CREATE: agregarGift y form"

# 6. Implementar UPDATE
git add .
git commit -m "Implementada UPDATE: MostrarModal y giftUpdate"

# 7. Implementar DELETE
git add .
git commit -m "Implementada DELETE: BorrarGift()"

# 8. Agregar persistencia localStorage (opcional)
git add .
git commit -m "Agregar persistencia con localStorage"

# 9. Subir a GitHub (después de crear el repo en GitHub)
git branch -M main
git remote add origin https://github.com/tuusuario/CRUD-JavaScript.git
git push -u origin main

git remote add origin https://github.com/tuusuario/CRUD-JavaScript.git
git push -u origin main
