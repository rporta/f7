<template>
  <f7-page>
    <f7-navbar :title="this.navbar.title" :bg-color="this.navbar['bg-color']" :text-color="this.navbar['text-color']" :color="this.navbar['color']" back-link="Back">
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list tablet-inset>
      <f7-list-item >
        <f7-icon slot="media" f7="demo-list-icon"></f7-icon>
        <f7-block-title large style="margin: 0;">Data list, with icons</f7-block-title>
      </f7-list-item>
    </f7-list>
    <f7-block strong>
        <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
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