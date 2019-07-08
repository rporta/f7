<template>
  <f7-page name="home" style="background-image: url(static/header/header.jpg);background-repeat: round;">
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
    <f7-block-title text-color="white" large style="margin: 0%;width: 100%;height: 100%;text-align: center;line-height: -moz-block-height;">Home</f7-block-title>
    <!-- Toolbar-->
    <f7-toolbar bottom style="background-color: #ffffff1f;">
      <f7-link panel-open="left" text-color="white">Panel izquierdo</f7-link>
      <f7-link panel-open="right" text-color="white">Panel derecho</f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "Main",
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