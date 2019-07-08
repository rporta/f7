//cv
import HomePage from '../pages/home.vue';
import ExperienciasLaborales from '../pages/experienciasLaborales.vue';
import HabilidadesTecnologicas from '../pages/habilidadesTecnologicas.vue';
import Git from '../pages/git.vue';
import Intereses from '../pages/intereses.vue';
import Contactos from '../pages/contactos.vue';
import CurrentInteres from '../pages/currentInteres.vue';
import CurrentExperiencia from '../pages/currentExperiencia.vue';
import CurrentGit from '../pages/currentGit.vue';

var routes = [{
	path: '/',
	component: HomePage,
}, {
	path: '/experienciasLaborales/',
	component: ExperienciasLaborales,
}, {
	path: '/habilidadesTecnologicas/',
	component: HabilidadesTecnologicas,
}, {
	path: '/intereses/',
	component: Intereses,
}, {
	path: '/git/',
	component: Git,
}, {
	path: '/currentInteres/',
	component: CurrentInteres,
}, {
	path: '/currentExperiencia/',
	component: CurrentExperiencia,
}, {
	path: '/currentGit/',
	component: CurrentGit,
}, {
	path: '/contactos/',
	component: Contactos,
}, ];

export default routes;