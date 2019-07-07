<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" :bg-color="this.navbar['bg-color']" :text-color="this.navbar['text-color']" :color="this.navbar['color']">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
        <f7-nav-title sliding>{{this.navbar.title}}</f7-nav-title>
      </f7-nav-left>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!-- Page content-->
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link panel-open="left">Left Link</f7-link>
      <f7-link panel-open="right">Right Link</f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "cv-online",
          "bg-color":"deeppurple",
          "text-color":"white",
          "color":"white",
        },
      }
    },
    methods: {
      openDialog(text){
        let d = this.$f7.dialog.progress(text, "deeppurple");
        d.$backdropEl.css({
          background: 'black',
        });
      },
      closeDialog(){
        this.$f7.dialog.close();
      }
    },
    created: function () {
      this.openDialog("Cargando");
      (x => {
        setTimeout(function() {
          x.closeDialog();
        }, 1000);
      })(this);
    }
  };
</script>