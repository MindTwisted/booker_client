<template>
  <div id="app">
    <router-view/>

    <notifications group="messages" 
                   position="bottom right"/>
  </div>
</template>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500');

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

#app {
  font-family: 'Raleway', sans-serif;
}

.title {
  font-weight: 300;
}
</style>
