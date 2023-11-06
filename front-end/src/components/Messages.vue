<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="messages">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="600">
            <v-toolbar dark color="black">
              <v-toolbar-title>
                Messages
              </v-toolbar-title>
            </v-toolbar>
            <v-list>
              <!-- eslint-disable-next-line vue/valid-v-on -->
              <div v-if="messages.length === 0">
                <v-list-item>
                  <v-list-item-title>No messages yet</v-list-item-title>
                </v-list-item>
              </div>
              <!-- eslint-disable-next-line vue/valid-v-on -->
              <v-list-item v-else :to="'message/' + message.id" v-for="message in messages" :key="message.id">
                <div class="align-end">
                  <v-list-item-title>{{ message.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ message.username }}</v-list-item-subtitle>
                  <v-list-item-action>
                    <v-btn class="button" icon @click="deleteMessage(message.id)">
                      <v-icon color="black">mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </div>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['messages']),
  },
  async created() {
    this.$store.dispatch('fetchMessages')
  },
  methods: {
    ...mapActions(['deleteMessage']),
  },
};
</script>

<style scoped>
.align-end {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  width: 15px;
  height: 15px;
}

.messages {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>