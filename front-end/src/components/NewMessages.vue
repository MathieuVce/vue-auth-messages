<template>
  <div class="newmessage">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="600">
            <v-toolbar dark color="black">
              <v-toolbar-title>
                New Message
              </v-toolbar-title>
            </v-toolbar>
            <v-form>
              <v-container>
                <v-text-field v-model="messageBody" label="Message" required></v-text-field>
                <br>
                <v-btn @click="submit">Submit</v-btn>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      messageBody: "",
    }
  },
  methods: {
    ...mapActions(['submitMessage']),
    async submit() {
      await this.submitMessage(this.messageBody);
      this.messageBody = "";
    },
  }
}
</script>

<style scoped>
.newmessage {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>