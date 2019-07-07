<template>
  <f7-page>
    <f7-navbar :title="this.navbar.title" :bg-color="this.navbar['bg-color']" :text-color="this.navbar['text-color']" :color="this.navbar['color']" back-link="Back">
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </f7-block>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "Intereses",
          "bg-color":"deeppurple",
          "text-color":"white",
          "color":"white",
        }
      }
    },
    methods: {

    }
  };
</script>