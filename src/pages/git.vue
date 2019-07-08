<template>
  <f7-page>
    <f7-navbar :title="this.navbar.title" :bg-color="this.navbar['bg-color']" :text-color="this.navbar['text-color']" :color="this.navbar['color']" back-link="Back">
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
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
    <f7-list-item title="mod_01" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="dirbase" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="OP-257" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="viewbuilder2.0" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="cv-online" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="apifox" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="viewBuilder" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="opraTest" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="vodacomza" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="googleads-php-lib" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="vuejs" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="17" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="mockup" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="evaluacion" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="symfony_mcss" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="materializecss" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="ambionis" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="3dm" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="estudio-hcrgs" link="#">
      <f7-icon slot="media" f7="attachment"></f7-icon>
    </f7-list-item>
    <f7-list-item title="porfolio---servicios" link="#">
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

    }
  };
</script>