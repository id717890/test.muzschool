<template>
  <div class="mb-3" v-if="settings">
    <label for="republic-field" class="form-label">
      {{ $t('republic.label') }}
    </label>
    <input
      type="text"
      class="form-control mb-2"
      :class="{ 'is-invalid': !settings.isValid }"
      id="republic-field"
      :value="settings.value"
      @input="change"
      @keypress="press"
    />
    <p
      class="text-start text-danger mb-0"
      v-for="(error, index) in settings.errors"
      :key="index"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
import MixinComponentValidation from '@/mixins/componentValidation'
export default {
  name: 'RepublicField',
  props: {
    settings: {
      required: true,
      type: Object,
    },
  },
  mixins: [MixinComponentValidation],
}
</script>
