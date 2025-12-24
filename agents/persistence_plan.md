# Persistence Implementation Plan

Goal: Save and load Craft.js editor state using Convex.

## Phase 1: Convex Setup
- [ ] Create `convex/schema.ts`
    - Define `pages` table with `slug` (string) and `layout` (string/json)
- [ ] Create `convex/pages.ts`
    - `savePage`: Mutation to upsert page layout by slug
    - `getPage`: Query to get page layout by slug
    - `deletePage`: Mutation to delete page by slug

## Phase 2: Frontend Integration
- [ ] Update `src/components/Topbar.tsx`
    - Use `useMutation` to call `savePage`
    - Use `useMutation` to call `deletePage`
    - Add "Delete Page" button (with confirmation)
    - Save current state with slug "home"
- [ ] Update `src/pages/Admin.tsx`
    - Use `useQuery` to fetch "home" layout
    - Load layout into `Editor` on mount (if exists)
- [ ] Update `src/pages/Home.tsx`
    - Use `useQuery` to fetch "home" layout
    - Render fetched layout or fallback to default

## Phase 3: Verification
- [ ] Run `npx convex dev` in terminal
- [ ] Test saving from Admin
- [ ] Test deleting from Admin
- [ ] Verify persistence after reload
- [ ] Verify Home page loads saved layout
