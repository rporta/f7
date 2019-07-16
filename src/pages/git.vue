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
        <f7-block-title large style="margin: 0;">Dashboard repositorios</f7-block-title>
      </f7-list-item>
    </f7-list>
    <f7-block inset>
    </f7-block>
  <f7-row>
    <f7-col width="33"><img src="static/section/git/perfil.png" width="250" style="padding: 20px;display: block;margin: auto;" /></f7-col>
    <f7-col width="66">
      <f7-block-title>Informacion </f7-block-title>
      <f7-list media-list>
      <f7-list-item
      link="#"
      title="Gmail"
      subtitle="ramiro.portas@gmail.com">
      <img slot="media" src="static/section/git/gmail.png" width="44" />
      </f7-list-item>
      <f7-list-item
      link="#"
      @click="redirectToUrl('https://github.com/rporta?tab=repositories')"      
      title="Github"
      subtitle="github.com/rporta">
      <img slot="media" src="static/section/git/github.png" width="44" />
      </f7-list-item>
      <f7-list-item link="#" header="Cantidad de repositorios" title="21" after="">
        <f7-icon slot="media" f7="list_fill"></f7-icon>
      </f7-list-item>
      </f7-list>
    </f7-col>
  </f7-row>
  <f7-block-title>Lista de repositorios</f7-block-title>
  <f7-list>
    <f7-list-item title="mod_01" link="#" @click="redirectToUrl('https://github.com/rporta/mod_01')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="dirbase" link="#" @click="redirectToUrl('https://github.com/rporta/dirbase')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="OP-257" link="#" @click="redirectToUrl('https://github.com/rporta/OP-257')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="viewbuilder2.0" link="#" @click="redirectToUrl('https://github.com/rporta/viewbuilder2.0')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="cv-online" link="#" @click="redirectToUrl('https://github.com/rporta/cv-online')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="apifox" link="#" @click="redirectToUrl('https://github.com/rporta/apifox')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="viewBuilder" link="#" @click="redirectToUrl('https://github.com/rporta/viewBuilder')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="opraTest" link="#" @click="redirectToUrl('https://github.com/rporta/opraTest')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="vodacomza" link="#" @click="redirectToUrl('https://github.com/rporta/vodacomza')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="googleads-php-lib" link="#" @click="redirectToUrl('https://github.com/rporta/googleads-php-lib')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="vuejs" link="#" @click="redirectToUrl('https://github.com/rporta/vuejs')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="f7" link="#" @click="redirectToUrl('https://github.com/rporta/f7')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="mockup" link="#" @click="redirectToUrl('https://github.com/rporta/mockup')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="evaluacion" link="#" @click="redirectToUrl('https://github.com/rporta/evaluacion')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="symfony_mcss" link="#" @click="redirectToUrl('https://github.com/rporta/symfony_mcss')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="materializecss" link="#" @click="redirectToUrl('https://github.com/rporta/materializecss')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="ambionis" link="#" @click="redirectToUrl('https://github.com/rporta/ambionis')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="3dm" link="#" @click="redirectToUrl('https://github.com/rporta/3dm')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="estudio-hcrgs" link="#" @click="redirectToUrl('https://github.com/rporta/estudio-hcrgs')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="porfolio---servicios" link="#" @click="redirectToUrl('https://github.com/rporta/porfolio---servicios')">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
  </f7-list>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "Git",
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
      },
      redirectToUrl(path){
        window.open(path, '_blank');
        // window.location.replace(path);
      }

    }
  };
</script>