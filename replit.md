# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM (API server) + Firebase Firestore (mobile app)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Firebase (Mobile App)

- **Project**: `mymod-788d5`
- **Firestore collection**: `apps` — stores all uploaded APK entries
- **Config**: stored as `EXPO_PUBLIC_FIREBASE_*` env vars
- **Firebase file**: `artifacts/mobile/lib/firebase.ts`
- **AppsContext**: `artifacts/mobile/context/AppsContext.tsx` — uses real-time `onSnapshot` listener
- **Security rules**: All users can read `apps`, only authenticated admin should write (configure in Firebase Console)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
