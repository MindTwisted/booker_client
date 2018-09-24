<template>
  <div class="dashboard">

    <div class="dashboard__navbar">
      <navbar></navbar>
    </div>

    <div class="dashboard__aside">
      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li>
            <router-link v-bind:to="{name: 'dashboard.stats'}" 
                        active-class="is-active">
              Stats
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="{name: 'dashboard.booking'}"
                        active-class="is-active">
              Booking
            </router-link>
          </li>
        </ul>
        <template v-if="isAdmin">
          <p class="menu-label">
            Resources
          </p>
          <ul class="menu-list">
            <li>
              <router-link v-bind:to="{name: 'dashboard.users'}"
                          active-class="is-active">
                Users
              </router-link>
            </li>
            <li>
              <router-link v-bind:to="{name: 'dashboard.rooms'}"
                          active-class="is-active">
                Rooms
              </router-link>
            </li>
          </ul>
        </template>
      </aside>
    </div>

    <div class="dashboard__content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Vuex from 'vuex'
import Navbar from '@/components/Navbar'

export default {
  name: 'dashboard',
  components: {
    'navbar': Navbar
  },
  computed: {
    ...Vuex.mapGetters([
      'isAdmin'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &__navbar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 125;
  }

  &__aside {
    position: fixed;
    width: 12rem;
    padding: 0.75rem;
    left: 0;
    top: 4rem;
    z-index: 100;
  }

  &__content {
    margin-left: 12rem;
    padding: 1rem;
    margin-top: 4rem;
  }

  @media screen and (max-width: 769px) {
    &__aside {
      position: relative;
      width: 100%;
    }

    &__content {
      margin-left: 0;
      margin-top: 2rem;
    }
  }
}
</style>

<style lang="scss">
.dashboard {
    &__title {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
    }

    &__actions {
      & > * {
        margin-right: 0.25rem;
      }
    }
}
</style>



