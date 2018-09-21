<template>
  <div class="dashboard">
    <div class="dashboard__navbar">
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'dashboard',
  components: {
    'navbar': Navbar
  }
}
</script>

