<template>
  <f7-page>
    <f7-navbar :title="this.navbar.title" :bg-color="this.navbar['bg-color']" :text-color="this.navbar['text-color']" :color="this.navbar['color']" back-link="Back">
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-list tablet-inset>
      <f7-list-item >
        <f7-icon slot="media" material="mail"></f7-icon>
        <f7-block-title large style="margin: 0;">Puede enviar su consulta por esta via</f7-block-title>
      </f7-list-item>
    </f7-list>
    <f7-block inset>
    </f7-block>
    <f7-list no-hairlines-md>
      <f7-list-input
        outline
        label="Nobre"
        floating-label
        type="text"
        placeholder="Tu nombre"
        clear-button
      >
        <f7-icon f7="edit" slot="media"></f7-icon>
      </f7-list-input>
      <f7-list-input
        outline
        label="Apellido"
        floating-label
        type="text"
        placeholder="Tu Apellido"
        clear-button
      >
        <f7-icon f7="edit" slot="media"></f7-icon>
      </f7-list-input>
      <f7-list-input
        outline
        label="E-mail"
        floating-label
        type="email"
        placeholder="Tu correo"
        clear-button
      >
        <f7-icon f7="edit" slot="media"></f7-icon>
      </f7-list-input>
      <f7-list-input
        outline
        label="Mensaje"
        floating-label
        type="textarea"
        resizable
        placeholder="Tu mensaje"
        clear-button
      >
        <f7-icon f7="edit" slot="media"></f7-icon>
      </f7-list-input>
    </f7-list>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link >Enviar</f7-link>
      <f7-link >Cancelar</f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "Contactos",
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