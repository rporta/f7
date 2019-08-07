<template>
  <f7-app :params="f7params" ripple-color="blue">
    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar></f7-statusbar>
    <!-- Left panel with cover effect-->
    <f7-panel left reveal  >
      <f7-view>
        <f7-page style='
        background-image: url("static/sidenav/sidenav.png");
        background-size: cover;
        background-repeat: round;
        height: 100%;
        transform: translateX(0%);'
        >
          <f7-navbar title="Menu" bg-color="red" text-color="white" ></f7-navbar>
          <div class="item-media" style="background-image: url(static/perfil/sample-1.jpg);padding: 50px;">
            <img src="static/perfil/photo.jpg" style="border-radius: 50%;height: 100px;display: block;margin: auto;">
            <div style="padding-top: 25px;">
              <span class="badge color-green" style="padding: 5px;border-radius: 3px;">Ramiro Portas</span>
              <span class="badge color-red" style="margin-top: 25px; padding: 5px;border-radius: 3px;">ramiro.portas@gmail.com</span>
            </div>
          </div>
          <f7-list style="margin: 0px;" >
            <f7-list-item link="#" @click="redirectTo('/')" title="Home">
              <f7-icon slot="media" material="looks_one" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/experienciasLaborales/')" title="Experiencias laborales">
              <f7-icon slot="media" material="looks_two" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/habilidadesTecnologicas/')" title="Habilidades tecnologicas">
              <f7-icon slot="media" material="looks_3" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/intereses/')" title="Intereses">
              <f7-icon slot="media" material="looks_4" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/git/')" title="Git">
              <f7-icon slot="media" material="looks_5" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/contactos/')" title="Contactos">
              <f7-icon slot="media" material="looks_6" color="black"></f7-icon>
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>
    <!-- Right panel with reveal effect-->
    <f7-panel right reveal>
      <f7-view>
        <f7-page style='
        background-image: url("static/sidenav/sidenav.png");
        background-size: cover;
        background-repeat: round;
        height: 100%;
        transform: translateX(0%);'
        >
          <f7-navbar title="Menu" bg-color="blue" text-color="white" color="white"></f7-navbar>
          <div class="item-media" style="background-image: url(static/perfil/sample-1.jpg);padding: 50px;">
            <img src="static/perfil/photo.jpg" style="border-radius: 50%;height: 100px;display: block;margin: auto;">
            <div style="padding-top: 25px;">
              <span class="badge color-green" style="padding: 5px;border-radius: 3px;">Ramiro Portas</span>
              <span class="badge color-red" style="margin-top: 25px; padding: 5px;border-radius: 3px;">ramiro.portas@gmail.com</span>
            </div>
          </div>
          <f7-list style="margin: 0px;" >
            <f7-list-item link="#" @click="redirectTo('/')" title="Home">
              <f7-icon slot="media" material="looks_one" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/experienciasLaborales/')" title="Experiencias laborales">
              <f7-icon slot="media" material="looks_two" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/habilidadesTecnologicas/')" title="Habilidades Tecnologicas">
              <f7-icon slot="media" material="looks_3" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/intereses/')" title="Intereses">
              <f7-icon slot="media" material="looks_4" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/git/')" title="Git">
              <f7-icon slot="media" material="looks_5" color="black"></f7-icon>
            </f7-list-item>
            <f7-list-item link="#" @click="redirectTo('/contactos/')" title="Contactos">
              <f7-icon slot="media" material="looks_6" color="black"></f7-icon>
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>
    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>
    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>
  </f7-app>
</template>
<script>

import routes from '../js/routes.js';
import config from '../config/config.json';

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: 'cv-online', // App name
        theme: 'auto', // Automatic theme detection
        // App root data
        data: function () {
          return {
            config: config
          };
        },
        // App routes
        routes: routes,
      },
    }
  },
  methods: {
    redirectTo(path){
      this.$f7.view.main.router.navigate(path);
      this.$f7.panel.close();
    }
  },
  mounted() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}
</script>