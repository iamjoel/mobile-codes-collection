<template>
  <div class="main">
    <calendar >
      <template slot-scope="data">
        <span>{{data.data}}</span>
      </template>
    </calendar>
  </div>
</template>

<script>
import Calendar from '@/components/calendar'
export default {
  components: {
    Calendar
  },
  data() {
    return {

    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>