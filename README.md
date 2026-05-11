# Calculadora Local de Costos IA

App web local para cotizar proyectos de generacion de imagen, video y audio con IA. Usa React + TypeScript + Vite en frontend, IndexedDB/Dexie para datos locales y un backend Node para actualizar precios desde fuentes publicas.

## Requisitos

- Node.js 20 o superior
- Windows: usar `npm.cmd` para evitar bloqueos de PowerShell con `npm.ps1`

## Instalacion

```powershell
npm.cmd install
```

Opcional: copiar `.env.example` a `.env` y completar keys. Las keys quedan solo en backend; no se exponen al frontend.

```env
FAL_KEY=
FREEPIK_API_KEY=
HIGGSFIELD_API_KEY=
KIE_API_KEY=
REPLICATE_API_TOKEN=
FAL_MODEL_SCAN_LIMIT=80
```

## Desarrollo

```powershell
npm.cmd run dev
```

URLs por defecto:

- App: `http://127.0.0.1:3003/`
- API local: `http://127.0.0.1:8787/`

## Actualizacion de precios

La app actualiza automaticamente fuentes publicas rapidas al abrir.

Actualizacion completa manual, incluyendo APIs autenticadas disponibles:

```powershell
npm.cmd run update-prices
```

El backend guarda snapshots y runtime local en `data/`, pero esos archivos generados no se versionan.

## Scripts

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run dev
npm.cmd run update-prices
```

## Datos

- `data/catalog.seed.json`: catalogo base versionable.
- `data/catalog.runtime.json`: catalogo actualizado localmente, ignorado por git.
- `.env`: claves privadas locales, ignorado por git.

## Seguridad

No subir `.env`, `node_modules`, `dist`, logs, snapshots ni `data/catalog.runtime.json`.
