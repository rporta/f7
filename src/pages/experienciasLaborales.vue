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
        <f7-block-title large style="margin: 0;">Dashboard experiencias laborales</f7-block-title>
      </f7-list-item>
    </f7-list>
    <f7-block inset>
    </f7-block>

    <!-- row 1 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-repeat: no-repeat;background-size: 100%;background-position-y: 50%;background-image:url(static/section/experienciaslaborales/teceng-gaming.jpg);height: 250px;"
          >Teceng Gaming</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentExperiencia/Teceng Gaming')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-repeat: no-repeat;background-size: 100%;background-position-y: 50%;background-image:url(static/section/experienciaslaborales/opratel.jpg);height: 250px;"
          >Opratel</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentExperiencia/Opratel')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
      </f7-col>
      <f7-col style="padding: 25px;">
      </f7-col>
    </f7-row>
    
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "Experiencias Laborales",
          "bg-color":"deeppurple",
          "text-color":"white",
          "color":"white",
        }
      }
    },
    methods: {
      redirectTo(path){
        this.$f7.view.main.router.navigate(path);
        this.$f7.panel.close();
      }
    }
  };
</script>