# Retrospectiva: Práctica Git y GitHub con Scrum

## 📅 Fecha
5 de Diciembre de 2025

## 👥 Equipo
- Desarrollador: [Tu Nombre]
- Rol: Product Owner, Scrum Master, Developer

---

## 🎯 Objetivos Alcanzados

### Sprint 0: Configuración Inicial ✅
- Proyecto Angular creado exitosamente
- Git inicializado con estructura Git Flow (main, develop)
- Repositorio conectado a GitHub
- Despliegue configurado en Vercel (producción + staging)

### Sprint 1: Mejora Visible ✅
- Componente ForumHeader creado con diseño atractivo
- Integraciónal proyecto principal
- Pull Requests realizados siguiendo el flujo: feature → develop → release → main
- Despliegue automático verificado

### Hotfix: Tests Angular ✅
- Archivos de test `.spec.ts` añadidos
- Hotfix desplegado directamente a producción
- Sincronización con rama develop completada

---

## 💡 Aprendizajes del Equipo

### Técnicos
1. **Git Flow en Acción**: 
   - Comprendí la importancia de mantener ramas separadas para desarrollo (develop) y producción (main)
   - El flujo de feature branches permite trabajar en nuevas funcionalidades sin afectar el código estable

2. **Despliegue Continuo**:
   - Vercel automatiza el despliegue al hacer push, lo que acelera el feedback
   - Tener URLs diferentes para staging y producción ayuda a validar cambios antes de liberar

3. **Pull Requests como Revisión**:
   - Los PRs son una excelente herramienta para documentar cambios
   - Facilitan la revisión de código incluso trabajando solo

### Metodológicos
1. **Scrum en Proyectos Pequeños**:
   - Aunque es un proyecto individual, usar Trello ayuda a visualizar el progreso
   - Las tarjetas organizadas por estado (Backlog → To Do → Done → Deployed) dan claridad

2. **Hotfixes vs Features**:
   - Los hotfixes deben ir directo a main (producción) para correcciones urgentes
   - Las features pasan por develop primero para ser probadas

---

## 🚀 Propuestas de Mejora

### Para Próximos Proyectos

1. **Automatización de Tests**:
   - Configurar GitHub Actions para ejecutar tests automáticamente en cada PR
   - Prevenir merges con tests fallidos

2. **Branch Protection Rules**:
   - Activar protecciones en GitHub para la rama `main`
   - Requerir revisión de PRs (aunque sea auto-revisión)

3. **Commits más Descriptivos**:
   - Usar convenciones como Conventional Commits (`feat:`, `fix:`, `docs:`)
   - Facilita generar changelogs automáticos

4. **Etiquetas de Versión**:
   - Usar tags de Git (v1.0.0, v1.1.0) para marcar releases
   - Ayuda a rastrear qué versión está en producción

5. **Integración con Trello**:
   - Usar Power-Ups de GitHub en Trello para vincular PRs automáticamente
   - Automatizar movimiento de tarjetas según estado de PRs

---

## 📊 Métricas del Proyecto

- **Total de Commits**: 3 (Sprint 0, Sprint 1, Hotfix)
- **Pull Requests cerrados**: 3
- **Ramas creadas**: 5 (main, develop, feature/mejora-visible, releases/Sprint1, hotfix/tests-angular)
- **Despliegues exitosos**: 6 (3 en staging, 3 en producción)
- **Tiempo de desarrollo**: ~1 día
- **Incidencias en producción**: 0

---

## ✍️ Conclusión

Esta práctica ha sido muy valiosa para entender cómo funciona un flujo de trabajo profesional con Git, GitHub y herramientas de CI/CD. Aunque lo realicé de forma individual, simular los roles de Scrum y usar las herramientas correctas me prepara para trabajar en equipos reales.

El uso de Git Flow proporciona una estructura clara que previene errores y facilita la colaboración. La integración con Vercel demuestra el poder del despliegue continuo, permitiendo ver cambios en tiempo real.

**Calificación personal del sprint**: 9/10
- Lo que salió bien: Configuración, organización, despliegues
- A mejorar: Documentación más detallada en PRs, tests más completos

---

## 🔗 Enlaces de Referencia

- **Repositorio GitHub**: [Añadir URL]
- **Tablero Trello**: [Añadir URL]
- **Producción (Main)**: [Añadir URL Vercel]
- **Staging (Develop)**: [Añadir URL Vercel]

---

**Firma**: [Tu Nombre]  
**Fecha**: 5 de Diciembre de 2025
