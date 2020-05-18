<template>
  <div id="app">
    main
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.lodashExample()
  },
  methods: {
    lodashExample() {

      if(_.isEqual('안녕하세요', 'Hello')) {
        console.log('same')
      }
      if(_.isEmpty([])) {
        console.log('empty')
      }

    }
  }
}
</script>
