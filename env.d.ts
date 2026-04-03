/// <reference types="vite/client" />

import type Bootstrap from 'bootstrap'

declare global {
  interface Window {
    bootstrap: typeof Bootstrap
  }
}
