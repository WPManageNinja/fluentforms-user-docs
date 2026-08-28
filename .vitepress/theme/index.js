import DefaultTheme from 'vitepress/theme'
import './custom.css';
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import ChangelogFilter from './components/ChangelogFilter.vue' // Free/Pro filter for the changelog
import ZoomableImage from './components/ZoomableImage.vue' // Click-to-zoom wrapper for doc images
import Layout from './Layout.vue' // Import new layout file

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)
    app.component('ChangelogFilter', ChangelogFilter)
    // Guarded: enhanceApp can run more than once (HMR, multiple render passes) and a
    // second registration would warn.
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
} 
