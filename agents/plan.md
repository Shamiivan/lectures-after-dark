# Refactor Plan: Clean Architecture & Visual Editor

Based on `refactor.md` and current branch state (`refactor/clean-arch-reboot`).

## Phase 1: Hero Component Conversion
- [x] Open `src/components/Hero.tsx`
- [x] Convert `Hero` to use `useNode` hook (`connect`, `drag`)
- [x] Add props interface (`title`, `subtitle`, `buttonText`)
- [x] Replace hardcoded text with props
- [x] Create `HeroSettings` component in `Hero.tsx`
- [x] Add inputs to `HeroSettings` for `title`, `subtitle`, `buttonText`
- [x] Register `HeroSettings` as `Hero.craft.related.settings`
- [ ] Verify `Hero` renders correctly in `Home.tsx`

## Phase 2: Instagram Component Conversion
- [x] Open `src/components/Instagram.tsx`
- [x] Convert to Craft.js component
- [x] Implement `InstagramSettings`
- [x] Connect to `useNode`
- [ ] Verify `Instagram` renders correctly

## Phase 3: IdeaSection Component Conversion
- [x] Open `src/components/IdeaSection.tsx`
- [x] Convert to Craft.js component
- [x] Implement `IdeaSectionSettings`
- [x] Connect to `useNode`
- [ ] Verify `IdeaSection` renders correctly

## Phase 4: Toolbox & Integration
- [x] Open `src/components/Toolbox.tsx`
- [x] Ensure `Hero`, `Instagram`, `IdeaSection` are imported
- [x] Verify they are draggable from Toolbox
- [x] Open `src/pages/Admin.tsx`
- [x] Test dragging components onto the canvas
- [x] Test editing props via Settings Panel
- [x] Test saving/loading

## Phase 5: Cleanup
- [x] Remove unused imports
- [x] Verify no console errors
