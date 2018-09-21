<template>
  <div id="app">
    <router-view/>

    <notifications group="messages" 
                   position="bottom right"/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');

@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/grid/_all';
@import '~bulma/sass/elements/container';
@import '~bulma/sass/elements/title';
@import '~bulma/sass/elements/button';
@import '~bulma/sass/elements/form';
@import '~bulma/sass/elements/other';
@import '~bulma/sass/components/navbar';
@import '~bulma/sass/components/modal';

#app {
  font-family: 'Raleway', sans-serif;
}
</style>
