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
            <f7-block-title large style="margin: 0;">{{this.titulo}}</f7-block-title>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-item >
              <p>nombre : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].nombre}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item>
          <f7-list-item >
              <p>rubro : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].rubro}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item>
          <f7-list-item >
              <p>periodo laboral : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].periodoLaboral}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item>
          <f7-list-item >
              <p>especializacion : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].especializacion}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item >
          <f7-list-item >
              <p>calle : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].domicilio.calle}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item >
          <f7-list-item >
              <p>altura : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].domicilio.altura}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item >
          <f7-list-item >
              <p>ciudad : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].domicilio.ciudad}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item >
          <f7-list-item >
              <p>codigo postal : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].domicilio.codigoPostal}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item >
          <f7-list-item >
              <p>telefono : {{$f7.data.config.experienciaLaboral[titulo.replace(' ', '')].contacto.telefono}}</p>
                        <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
          </f7-list-item >
        </f7-list>

    <f7-block-title large>Actividad </f7-block-title>
    <div v-for="e in $f7.data.config.experienciaLaboral[titulo.replace(' ', '')].actividad">
      <f7-block-title medium>{{e.titulo}}</f7-block-title>
      <f7-block strong>
      <p>{{e.descripcion}}</p>
      </f7-block>
      <f7-block-title medium>Tecnologias</f7-block-title>
      <f7-list>
        <f7-list-item :title="t" v-for="t in e.tecnologias">
          <f7-icon text-color="deeporange" slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
        </f7-list-item>
      </f7-list>
      <br>
    </div>

  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        "navbar" : {
          "title": "Experiencia",
          "bg-color":"deeppurple",
          "text-color":"white",
          "color":"white",
        },
        "titulo" : this.ptitulu
      }
    },
    props:{
      ptitulu:{
        type: String,
        required : false,
        default: "",
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