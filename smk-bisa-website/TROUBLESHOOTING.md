# SMK Bisa Website - Troubleshooting Guide

## Problem: Content Sections Not Visible (Tentang, Program, Testimoni)

### Quick Fix Options:

### Option 1: Use Simple Version (Recommended for Testing)
If you can't see the content sections, switch to the simple version:

1. Open `src/main.jsx`
2. Change line 9 from:
   ```javascript
   const AppToUse = App;
   ```
   to:
   ```javascript
   const AppToUse = SimpleApp;
   ```
3. Save and refresh the browser

This version has all the same content but without complex animations.

### Option 2: Fix Animation Issues
If you want to keep the animated version:

1. **Check Browser Console**: Open Developer Tools (F12) and look for JavaScript errors
2. **Disable Animations**: Add this to your browser's address bar:
   ```
   javascript:document.body.classList.add('loaded')
   ```
3. **Force Content Visibility**: Add this CSS temporarily to `src/index.css`:
   ```css
   .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right {
     opacity: 1 !important;
     transform: none !important;
   }
   ```

### Option 3: Check Dependencies
Make sure all dependencies are installed:
```bash
npm install
```

If you get permission errors, try:
```bash
npm install --force
```

## Content Verification Checklist

✅ **Navigation Menu**: Should show Beranda, Tentang, Program, Mitra, Testimoni, Kontak
✅ **Hero Section**: Large title "SMK Bisa: Jembatan Nyata SMK dan Industri Digital"
✅ **Tentang Section**: Visi, Misi, and Profil Perusahaan
✅ **Program Section**: Prakerin 4,5 Bulan and Sekolah Affiliator AI
✅ **Testimoni Section**: Rotating testimonials with star ratings
✅ **Mitra Section**: Partner logos/names
✅ **Kontak Section**: Contact information in footer

## Common Issues & Solutions

### Issue: "Lucide React icons not showing"
**Solution**: Make sure `lucide-react` is installed:
```bash
npm install lucide-react
```

### Issue: "Content appears then disappears"
**Solution**: This is the scroll reveal animation. Either:
- Use SimpleApp version, or
- Scroll down slowly to trigger animations, or
- Add the CSS fix from Option 2 above

### Issue: "Loading screen never ends"
**Solution**: Check browser console for JavaScript errors. The loading should end after 1.5 seconds.

### Issue: "Buttons don't work"
**Solution**: All buttons should now be functional:
- "Daftar Program" → Opens WhatsApp
- "Hubungi Kami" → Scrolls to contact section
- Phone numbers → Opens phone dialer
- Email → Opens email client

## Testing Steps

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Open Browser**: Go to `http://localhost:5173`

3. **Check Each Section**:
   - Scroll through the entire page
   - Click navigation menu items
   - Test all buttons and links
   - Check mobile responsiveness (resize browser)

4. **Verify Content**:
   - Hero section with call-to-action buttons
   - About section with vision/mission
   - Program details with benefits
   - Testimonials that rotate automatically
   - Partner/collaboration section
   - Contact information

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Performance Notes

- First load might be slower due to animations
- SimpleApp version loads faster
- All images are optimized
- CSS animations use hardware acceleration

## Need Help?

If content is still not showing:

1. Try the SimpleApp version first
2. Check browser console for errors
3. Ensure all npm packages are installed
4. Clear browser cache and reload
5. Try a different browser

The SimpleApp version contains exactly the same content but without complex animations, so you can verify all sections are working properly.
