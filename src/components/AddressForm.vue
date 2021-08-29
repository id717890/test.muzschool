<template>
  <div class="row">
    <div
      class="col-12 col-sm-12 col-md-6"
      v-for="item in formBlocks"
      :key="item.id"
    >
      <component
        :ref="item.type"
        :is="item.type"
        @change="changeField"
        :settings="item"
      ></component>
    </div>
    <div class="col-12">
      <button
        class="btn btn-lg btn-outline-primary mt-4"
        type="button"
        @click="submit"
      >
        {{ $t('action.validateForm') }}
      </button>
    </div>
    <div class="col-12 pt-5" v-if="result && result.length">
      <h3 class="text-start mb-4">{{ $t('action.results') }}</h3>
      <p class="text-start" v-for="(item, index) in result" :key="index">
        <code>{{ item }}</code>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CountryComponent from '../components/Address/Country'
import RepublicComponent from '../components/Address/Republic'
import RegionComponent from '../components/Address/Region'
import CityComponent from '../components/Address/City'
import StreatComponent from '../components/Address/Streat'
import HouseComponent from '../components/Address/House'
import AppartmentComponent from '../components/Address/Appartment'
import PoscodeComponent from '../components/Address/Poscode'
import AdditionalComponent from '../components/Address/Additional'

export default {
  name: 'AddressForm',
  components: {
    CountryComponent,
    RegionComponent,
    RepublicComponent,
    CityComponent,
    StreatComponent,
    HouseComponent,
    AppartmentComponent,
    PoscodeComponent,
    AdditionalComponent,
  },
  data: () => ({
    formBlocks: null,
    result: null,
  }),
  computed: {
    ...mapState({
      blocks: (state) => {
        return state?.config?.sort((a, b) => {
          if (a.order > b.order) return 1
          else if (a.order < b.order) return -1
          else 0
        })
      },
    }),
    isAllFieldValid() {
      let isValid = true
      this.formBlocks.forEach((x) => {
        if (!x.isValid) isValid = false
      })
      return isValid
    },
  },
  mounted() {
    this.setInitialize()
  },
  methods: {
    submit() {
      this.result = null
      Object.keys(this.$refs).forEach((key) => {
        this.$refs[key][0].forceValidate()
      })
      if (this.isAllFieldValid) {
        this.result = this.formBlocks.map((x) => ({
          field: x.type,
          value: x.value,
        }))
      }
    },
    setInitialize() {
      this.$set(this, 'formBlocks', this.prepareBlocks())
    },
    prepareBlocks() {
      return this.blocks?.map((x) => {
        return {
          ...x,
          value: x?.value ? x.value : null,
          isValid: true,
          errors: [],
        }
      })
    },
    changeField(value) {
      const find = this.formBlocks.find((x) => x.type === value.type)
      if (find) {
        find.value = value.value
      }
    },
  },
}
</script>
