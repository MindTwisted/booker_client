<template>
  <div id="app">
    <router-view/>

    <notifications group="messages" 
                   position="bottom right"/>
  </div>
</template>

<style lang="scss">
@import '~bulmaswatch/flatly/_variables';
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/grid/_all';
@import '~bulma/sass/elements/container';
@import '~bulma/sass/elements/title';
@import '~bulma/sass/elements/button';
@import '~bulma/sass/elements/form';
@import '~bulma/sass/elements/table';
@import '~bulma/sass/elements/other';
@import '~bulma/sass/elements/box';
@import '~bulma/sass/elements/tag';
@import '~bulma/sass/components/dropdown';
@import '~bulma/sass/components/navbar';
@import '~bulma/sass/components/modal';
@import '~bulma/sass/components/menu';
@import '~bulmaswatch/flatly/_overrides';

.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
  border-radius: 0.4rem;

  font-size: 0.9rem;

  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e64231;
    border-left-color: #B82E24;
  }

  &.success {
    background: #2cc26b;
    border-left-color: #42A85F;
  }
}
</style>
