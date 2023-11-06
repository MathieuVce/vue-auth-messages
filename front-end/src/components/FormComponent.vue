<template>
  <div class="form-component">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="text-center">{{ title }}</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field v-model="formModel.username" label="Nom d'utilisateur" required></v-text-field>
                <v-text-field v-model="formModel.password" label="Mot de passe" type="password" required></v-text-field>
                <v-btn type="submit" color="black">{{ buttonText }}</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    formSubmit: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Soumettre',
    },
  },
  data() {
    return {
      formModel: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      this.$store.dispatch(this.formSubmit, this.formModel)
      this.formModel = {
        username: '',
        password: ''
      }
      this.$router.push('/newmessage')
    }
  }
};
</script>

<style scoped>
.form-component {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
