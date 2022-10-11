<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap"
    rel="stylesheet"
  >
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  >
  <div
    v-for="component in importArray"
    :key="component[0]"
    style="margin-bottom: 10px"
  >
    <h3 class="display-3">{{ component[0].split('/')[component[0].split('/').length - 3] }}/{{ component[0].split('/').pop() }}</h3>
    <component
      :is="component[1]"
    />
  </div>
</template>

<script lang="ts" setup>
const importArray = [
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/accordion/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/affix/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/alert/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/app-bar/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/avatar/examples/*.vue'),
  // import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/backtop/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/badge/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/breadcrumbs/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/button/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/button-dropdown/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/button-group/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/button-toggle/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/card/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/carousel/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/checkbox/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/chip/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/collapse/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/color-input/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/color-palette/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/counter/examples/*.vue'),
  // import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/data-table/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/date-input/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/date-picker/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/divider/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/dropdown/examples/*.vue'),
  // import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/file-upload/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/form/examples/*.vue'),
  // import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/hover/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui1-elements/icon/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/image/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/infinite-scroll/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/inner-loading/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/input/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/list/examples/*.vue'),
  // import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/modal/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/navbar/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/option-list/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/pagination/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/parallax/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/popover/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/progress-bar/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/progress-circle/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/radio/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/rating/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/scroll-container/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/select/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/sidebar/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/sidebar-item/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/slider/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/spacer/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/split/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/switch/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/table/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/tabs/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/time-input/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/time-picker/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/toast/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/tree-view/examples/*.vue'),
  import.meta.globEager('../6-vuestic-ui/packages/docs/src/page-configs/ui-elements/virtual-scroller/examples/*.vue'),
]
  .map(item => Object.entries(item).map(([fileName, componentIsh]: [string, any]) => [fileName, componentIsh.default]))
  .flat()
</script>
