<template>
  <FormComponent
    :title="'Connexion'"
    :button-text="'Se connecter'"
    :formSubmit="'login'"
  />
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';

export default {
  components: {
    FormComponent,
  },
};
</script>
