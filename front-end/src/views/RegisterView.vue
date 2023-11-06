<template>
  <FormComponent
    :title="'Inscription'"
    :button-text="'S\'inscrire'"
    :formSubmit="'register'"
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
