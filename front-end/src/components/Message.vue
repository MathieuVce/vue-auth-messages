<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="message">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="600">
            <v-toolbar dark color="black">
              <v-toolbar-title>
                Message
              </v-toolbar-title>
            </v-toolbar>
            <v-row>
              <v-card-text v-if="message.id === -1">No message to display</v-card-text>
              <div v-else>
                <v-card-text @click="toDelete">{{ message.name }}</v-card-text>
                <v-card-text>Écrit par: {{ message.username }}</v-card-text>
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import { mapState, mapActions, mapMutations  } from 'vuex'

export default {
  computed: {
    ...mapState(['message']),
    ...mapMutations(['setMessage']),
  },
  async created() {
    try {
      await this.$store.dispatch('getMessage', this.$route.params.id)
    } catch (error) {
      console.log(error)
      this.setMessage(null)
    }
    console.log(this.message)
  },
  methods: {
    ...mapActions(['deleteMessage']),
    toDelete() {
      if (this.message.id !== -1) {
        this.deleteMessage(this.message.id)
        this.$router.push('/messages')
      }
    }
  },
}
</script>

<style scoped>
.message {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>