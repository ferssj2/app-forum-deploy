# 🎯 App Forum Deploy - Práctica Git y GitHub

Proyecto Angular para practicar Git Flow, Scrum, y despliegue continuo con Vercel.

## 📋 Descripción

Esta aplicación simula un foro de Angular y sirve como práctica para:
- **Git Flow**: Workflow con ramas main, develop, feature, release y hotfix
- **Scrum**: Gestión de proyectos con Trello
- **CI/CD**: Despliegue automático con Vercel (staging + producción)

## 🚀 Tecnologías

- Angular 19+
- TypeScript
- CSS
- Git & GitHub
- Vercel (Deployment)
- Trello (Project Management)

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/[TU-USUARIO]/app-forum-deploy.git
cd app-forum-deploy

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start
```

## 🌿 Estructura de Ramas (Git Flow)

- `main`: Producción (despliega automáticamente a Vercel)
- `develop`: Desarrollo/Staging (despliega a entorno de pruebas)
- `feature/*`: Nuevas funcionalidades
- `releases/*`: Preparación de versiones
- `hotfix/*`: Correcciones urgentes en producción

## 📝 Workflow Completo

### Sprint 0: Configuración Inicial ✅
```bash
git init
git add .
git commit -m "Sprint 0: Proyecto Angular de inicio"
git branch -M main
git branch develop
```

### Sprint 1: Feature Branch
```bash
git checkout develop
git checkout -b feature/mejora-visible
# ... hacer cambios ...
git add .
git commit -m "feat: Añadir header del foro con navegación"
git push origin feature/mejora-visible
# Crear PR en GitHub: feature/mejora-visible → develop
```

### Hotfix
```bash
git checkout main
git checkout -b hotfix/tests-angular
# ... añadir tests ...
git add .
git commit -m "hotfix: Añadir archivos de test faltantes"
git push origin hotfix/tests-angular
# Crear PR en GitHub: hotfix/tests-angular → main
# Merge también a develop
```

## 📊 Tablero Trello

Listas organizadas:
1. Product Backlog
2. To Do
3. In Progress
4. QA (Deploy a Develop)
5. Done
6. Deployed (Main - Producción)

## 🔗 Enlaces

- **Repositorio**: [GitHub](https://github.com/[TU-USUARIO]/app-forum-deploy)
- **Producción**: [Vercel Main](https://...)
- **Staging**: [Vercel Develop](https://...)
- **Trello**: [Tablero](https://...)

## 📖 Documentación Adicional

- [`retrospectiva.md`](./retrospectiva.md): Aprendizajes y propuestas de mejora

## 👨‍💻 Autor

[Tu Nombre]

## 📄 Licencia

MIT
