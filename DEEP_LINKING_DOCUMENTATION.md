# Deep-Linking Implementation for Services Section

## Overview
This document explains how the deep-linking feature was implemented to allow footer links to navigate directly to specific tabs within the Services section.

## Problem Statement
When users clicked on service links in the footer (e.g., "Software Development", "AI Solutions"), the page would scroll to the Services section but would not automatically select the correct tab. The tab would remain on the default tab instead of switching to the one corresponding to the clicked link.

## Solution Architecture

### 1. URL Hash Structure
Each service tab is accessible via a unique URL hash following this pattern:
```
#services-{tabName}
```

Examples:
- `#services-software` → Software Development tab
- `#services-ai` → AI Solutions tab
- `#services-video` → Content Creation tab
- `#services-marketing` → Digital Marketing tab

### 2. Footer Links Configuration
**File:** `lib/i18n/translations.ts`

The footer service links are configured to use hash-based navigation:

```typescript
servicesLinks: [
  { label: "Software Development", href: "#services-software" },
  { label: "AI Solutions", href: "#services-ai" },
  { label: "Content Creation", href: "#services-video" },
  { label: "Digital Marketing", href: "#services-marketing" },
]
```

### 3. Footer Component Implementation
**File:** `components/footer.tsx`

**Key Implementation Detail:** Use native `<a>` tags for hash links instead of Next.js `Link` component.

```tsx
{link.href.startsWith("#") ? (
  <a
    href={link.href}
    className="text-secondary-foreground/70 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block"
  >
    {link.label}
  </a>
) : (
  <Link
    href={link.href}
    className="text-secondary-foreground/70 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block"
  >
    {link.label}
  </Link>
)}
```

**Why This Matters:**
- Next.js `Link` component does NOT trigger the browser's `hashchange` event for hash-only navigation
- Native `<a>` tags properly trigger `hashchange` events
- This is critical for the Services component to detect tab changes

### 4. Services Component Implementation
**File:** `components/services.tsx`

#### State Management
```tsx
const SERVICE_KEYS = ["software", "ai", "graphic", "motion", "video", "marketing"] as const
type ServiceTab = (typeof SERVICE_KEYS)[number]

const [activeTab, setActiveTab] = useState<ServiceTab>("software")
```

#### Hash Detection Logic
```tsx
useEffect(() => {
  const updateTabFromHash = () => {
    const hash = window.location.hash
    
    // Check if hash matches our pattern
    if (hash && hash.startsWith("#services-")) {
      const tabName = hash.substring(10) // Remove "#services-" prefix
      
      // Verify it's a valid tab
      if (SERVICE_KEYS.includes(tabName as ServiceTab)) {
        setActiveTab(tabName as ServiceTab)
        
        // Scroll to section
        const section = document.getElementById("services")
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  // Run on mount to check initial hash
  updateTabFromHash()

  // Listen for hash changes
  window.addEventListener("hashchange", updateTabFromHash)
  
  // Cleanup
  return () => {
    window.removeEventListener("hashchange", updateTabFromHash)
  }
}, [])
```

**How It Works:**
1. **On Mount:** Checks if URL has a hash and sets the active tab accordingly
2. **Hash Change Listener:** Listens for `hashchange` events (triggered when clicking footer links)
3. **Tab Extraction:** Removes `#services-` prefix using `substring(10)`
4. **Validation:** Ensures the extracted tab name is valid
5. **State Update:** Updates `activeTab` state to switch the tab
6. **Scrolling:** Scrolls to the Services section smoothly

#### Controlled Tabs Component
```tsx
<Tabs
  value={activeTab}
  onValueChange={(next) => {
    const nextTab = next as ServiceTab
    setActiveTab(nextTab)
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#services-${nextTab}`)
    }
  }}
  className="max-w-5xl mx-auto"
>
```

**Key Features:**
- `value={activeTab}`: Makes the Tabs component controlled by state
- `onValueChange`: Updates both state and URL hash when user manually clicks tabs
- `window.history.replaceState`: Updates URL without triggering page reload

## Flow Diagram

```
User clicks footer link (#services-ai)
         ↓
Native <a> tag navigates to hash
         ↓
Browser fires 'hashchange' event
         ↓
Services component's useEffect detects change
         ↓
Extracts "ai" from "#services-ai"
         ↓
Validates "ai" is in SERVICE_KEYS
         ↓
Updates activeTab state to "ai"
         ↓
Tabs component re-renders with AI tab active
         ↓
Scrolls to Services section
```

## Critical Implementation Points

### 1. **Never use Next.js Link for hash-only navigation**
   - Next.js Link prevents `hashchange` events
   - Use native `<a>` tags for hash links

### 2. **Empty dependency array in useEffect**
   - Ensures event listener is set up once
   - Prevents memory leaks and duplicate listeners

### 3. **Controlled Tabs component**
   - Must use `value` prop (not `defaultValue`)
   - Must implement `onValueChange` to sync state with URL

### 4. **Hash validation**
   - Always validate extracted tab names
   - Prevents invalid state from malformed URLs

## Testing Checklist

- [ ] Click each footer service link
- [ ] Verify correct tab opens in Services section
- [ ] Verify page scrolls to Services section
- [ ] Manually click tabs and verify URL updates
- [ ] Refresh page with hash in URL and verify correct tab loads
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices

## Common Issues and Solutions

### Issue: Tab doesn't switch when clicking footer links
**Cause:** Using Next.js Link for hash navigation  
**Solution:** Use native `<a>` tags for hash links

### Issue: Tab switches but doesn't scroll
**Cause:** Missing scroll logic in hash change handler  
**Solution:** Add `scrollIntoView` in `updateTabFromHash`

### Issue: URL doesn't update when manually clicking tabs
**Cause:** Missing `onValueChange` handler  
**Solution:** Implement `onValueChange` with `window.history.replaceState`

### Issue: Wrong tab loads on page refresh
**Cause:** Not checking hash on mount  
**Solution:** Call `updateTabFromHash()` immediately in useEffect

## Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Performance Considerations
- Event listener is added once on mount
- No unnecessary re-renders (empty dependency array)
- Smooth scrolling for better UX
- Hash validation prevents invalid state updates

## Future Enhancements
- Add transition animations between tabs
- Implement scroll offset for fixed headers
- Add analytics tracking for tab navigation
- Support keyboard navigation (arrow keys)
