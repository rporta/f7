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
        <f7-block-title large style="margin: 0;">Dashboard interes</f7-block-title>
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
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Musica</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Musica')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Tecnologia</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Tecnologia')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Viajar</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Viajar')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Aire Libre</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Aire Libre')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
    </f7-row>
    <!-- row 2 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Frameworks</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Frameworks')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Modelado 3D</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Modelado 3D')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Efectos especiales</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Efectos especiales')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Simulaciones fisicas</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Simulaciones fisicas')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
    </f7-row>
    <!-- row 3 -->
    <f7-row>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >UI</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Generar interfaces')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Comunicacion con hardware</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Comunicacion con hardware')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Comunicacion con lenguajes de programacion</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Comunicacion con lenguajes de programacion')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
      <f7-col style="padding: 25px;">
        <f7-card class="demo-card-header-pic" style="height: 300px;margin: auto;">
          <f7-card-header
            text-color="white"
            class="no-border"
            valign="bottom"
            style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);height: 250px;"
          >Inteligencia artifical</f7-card-header>
          <f7-toolbar bg-color="white">
            <f7-link @click="redirectTo('/currentInteres/Inteligencia artifical')" link="#" text-color="black">Ver mas</f7-link>
          </f7-toolbar>
        </f7-card>  
      </f7-col>
    </f7-row>
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
      redirectTo(path){
        this.$f7.view.main.router.navigate(path);
        this.$f7.panel.close();
      }
    }
  };
</script>