<template>
  <the-header/>
  <duplicate-header/>
</template>

<script>
import DuplicateHeader from './TheHeader.vue'

export default {
  name: 'Page',
  components: {
    TheHeader: () => import('./TheHeader.vue'),
    /**
     * DuplicateHeader description
     * @author Matteo Fogli <pecus@pecus.it>
     */
    DuplicateHeader
  },
}
</script>
