# Sidebar hover blur (implementation notes)
This project’s sidebar (`components/layout/SideNav.tsx`) supports a “minimal + elegant” interaction:
- The sidebar is always present on the left.
- It expands on hover.
- While expanded, the *rest of the page* gets a subtle blur + dim overlay.

## Where it’s implemented
- Sidebar component: `components/layout/SideNav.tsx`
- App layout: `app/layout.tsx` (adds `pl-20` so content doesn’t jump with a fixed sidebar)

## How the blur works
The blur is a full-screen backdrop overlay rendered *behind* the sidebar:
- It uses `backdrop-blur-sm` for blur.
- It uses `bg-black/20` for a subtle dim.
- It fades in/out via `transition-opacity`.

The overlay visibility is controlled by the same “expanded” state as the sidebar:
- `expanded = pinnedOpen || hovered`
- The overlay uses `expanded ? "opacity-100" : "opacity-0"`

Important detail:
- On *hover expand*, the overlay is `pointer-events-none` so it does not block interaction.
- On *pinned open* (menu button click), the overlay becomes `pointer-events-auto` so clicking it will close the menu.

## Hover vs click behavior
- Hovering the sidebar sets `hovered=true` (only when not pinned), which expands the sidebar.
- Clicking the menu button toggles `pinnedOpen`.
- Pressing `Esc` closes a pinned-open sidebar.

If you want **pure hover only** (no pinned/click behavior), you can remove:
- `pinnedOpen` state
- the menu button
- the `useEffect` Escape handler
…and replace `expanded` with just `hovered`.

## Tweaking the look
In `components/layout/SideNav.tsx`:
- Overlay strength:
  - Dim: change `bg-black/20` to `bg-black/10` (lighter) or `bg-black/30` (stronger)
  - Blur: change `backdrop-blur-sm` to `backdrop-blur-md` (stronger) or remove it
- Animation speed:
  - Change `duration-200` to `duration-300`

## Why it’s done this way
- The overlay must be a separate element so it can blur *everything behind it*.
- The sidebar remains sharp because it is rendered above the overlay (`z-40` vs overlay `z-30`).
- Keeping pointer-events disabled on hover avoids the overlay “trapping” the mouse / blocking the UI.
