<template>
  <v-footer
    padless
    :dark="mode ? false : true"
  >
    <v-card
      class="flex"
      flat
      style="background: transparent;"
    >
      <v-card-text class="py-1 text-center">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px" color="grey">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  computed: {
    ...mapState(['mode'])
  }
}
</script>